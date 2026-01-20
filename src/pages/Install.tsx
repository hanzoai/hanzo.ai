
import { useEffect } from 'react';
import { Terminal } from 'lucide-react';

const Install = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Type';
    meta.content = 'text/plain';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <pre style={{ margin: 0, padding: 0 }}>
{`#!/bin/sh
<<\\EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>hanzo.sh | Install Hanzo Platform</title>
    <link rel="stylesheet" href="https://hanzo.sh/styles.css"/>
  </head>
  <body class="bg-[#1A1F2C] text-[var(--white)] min-h-screen">
    <div class="max-w-4xl mx-auto p-8">
      <div class="text-center mb-16">
        <div class="mb-8">
          <span class="font-display text-8xl text-[var(--white)]">H</span>
        </div>
        <h1 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Install Hanzo Platform</h1>
        <p class="text-xl text-neutral-400 max-w-2xl mx-auto">
          One command to install the complete Hanzo development platform. 
          This page doubles as both documentation and the installer script itself.
        </p>
      </div>

      <div class="bg-[var(--black)]/50 rounded-lg p-8 mb-12 border border-purple-500/20 backdrop-blur">
        <div class="flex items-center gap-3 mb-4">
          <Terminal class="text-purple-400" size="20" />
          <h2 class="text-xl font-semibold text-purple-400">Quick Install</h2>
        </div>
        <pre class="bg-[var(--black)] rounded-lg p-4 overflow-x-auto border border-purple-500/10"><code>curl -fsSL hanzo.sh/install.sh | sh</code></pre>
        <p class="mt-4 text-sm text-neutral-400">This command downloads and executes the Hanzo Platform installer.</p>
      </div>

      <div class="space-y-8">
        <div class="bg-[var(--black)]/30 rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4 text-purple-400">Requirements</h2>
          <ul class="list-disc list-inside text-neutral-400 space-y-2">
            <li>Root access (sudo)</li>
            <li>Linux operating system</li>
            <li>Docker support</li>
            <li>Ports 80, 443, and 3000 available</li>
          </ul>
        </div>

        <div class="bg-[var(--black)]/30 rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4 text-purple-400">What's Included</h2>
          <ul class="list-disc list-inside text-neutral-400 space-y-2">
            <li>Docker Swarm initialization</li>
            <li>Hanzo Platform container</li>
            <li>PostgreSQL 16 database</li>
            <li>Redis 7 cache</li>
            <li>Traefik v3.1.2 proxy</li>
          </ul>
        </div>
      </div>

      <footer class="mt-16 text-center text-neutral-500 border-t border-gray-800 pt-8">
        <p>&copy; 2024 Hanzo. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>
EOF

install_hanzo() {
  if [ "$(id -u)" != "0" ]; then
    echo "This script must be run as root" >&2
    exit 1
  fi

  # check if is Mac OS
  if [ "$(uname)" = "Darwin" ]; then
    echo "This script must be run on Linux" >&2
    exit 1
  fi

  # check if is running inside a container
  if [ -f /.dockerenv ]; then
    echo "This script must be run on Linux" >&2
    exit 1
  fi

  # check if something is running on port 80
  if ss -tulnp | grep ':80 ' >/dev/null; then
    echo "Error: something is already running on port 80" >&2
    exit 1
  fi

  # check if something is running on port 443
  if ss -tulnp | grep ':443 ' >/dev/null; then
    echo "Error: something is already running on port 443" >&2
    exit 1
  fi

  command_exists() {
    command -v "$@" > /dev/null 2>&1
  }

  if command_exists docker; then
    echo "Docker already installed"
  else
    curl -sSL https://get.docker.com | sh
  fi

  docker swarm leave --force 2>/dev/null

  get_ip() {
    local ip=""
    # Try IPv4 first
    ip=\$(curl -4s --connect-timeout 5 https://ifconfig.io 2>/dev/null)
    if [ -z "\$ip" ]; then
      ip=\$(curl -4s --connect-timeout 5 https://icanhazip.com 2>/dev/null)
    fi
    if [ -z "\$ip" ]; then
      ip=\$(curl -4s --connect-timeout 5 https://ipecho.net/plain 2>/dev/null)
    fi
    # If no IPv4, try IPv6
    if [ -z "\$ip" ]; then
      ip=\$(curl -6s --connect-timeout 5 https://ifconfig.io 2>/dev/null)
      if [ -z "\$ip" ]; then
        ip=\$(curl -6s --connect-timeout 5 https://icanhazip.com 2>/dev/null)
      fi
      if [ -z "\$ip" ]; then
        ip=\$(curl -6s --connect-timeout 5 https://ipecho.net/plain 2>/dev/null)
      fi
    fi
    if [ -z "\$ip" ]; then
      echo "Error: Could not determine server IP address automatically." >&2
      echo "Please set the ADVERTISE_ADDR environment variable manually." >&2
      exit 1
    fi
    echo "\$ip"
  }

  advertise_addr="\${ADVERTISE_ADDR:-\$(get_ip)}"
  echo "Using advertise address: \$advertise_addr"

  docker swarm init --advertise-addr \$advertise_addr
  if [ \$? -ne 0 ]; then
    echo "Error: Failed to initialize Docker Swarm" >&2
    exit 1
  fi

  echo "Swarm initialized"
  docker network rm -f hanzo-network 2>/dev/null
  docker network create --driver overlay --attachable hanzo-network
  echo "Network created"

  mkdir -p /etc/hanzo
  chmod 777 /etc/hanzo

  docker pull postgres:16
  docker pull redis:7
  docker pull traefik:v3.1.2
  docker pull hanzo/platform:latest

  # Installation
  docker service create \\
    --name hanzo \\
    --replicas 1 \\
    --network hanzo-network \\
    --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock \\
    --mount type=bind,source=/etc/hanzo,target=/etc/hanzo \\
    --mount type=volume,source=hanzo-docker-config,target=/root/.docker \\
    --publish published=3000,target=3000,mode=host \\
    --update-parallelism 1 \\
    --update-order stop-first \\
    --constraint 'node.role == manager' \\
    -e ADVERTISE_ADDR=\$advertise_addr \\
    hanzo/platform:latest

  GREEN="\\\\033[0;32m"
  YELLOW="\\\\033[1;33m"
  BLUE="\\\\033[0;34m"
  NC="\\\\033[0m" # No Color

  format_ip_for_url() {
    local ip="\$1"
    if echo "\$ip" | grep -q ':'; then
      echo "[\${ip}]"
    else
      echo "\${ip}"
    fi
  }

  formatted_addr=\$(format_ip_for_url "\$advertise_addr")
  echo ""
  printf "\${GREEN}Congratulations, hanzo is installed!\${NC}\\n"
  printf "\${BLUE}Wait 15 seconds for the server to start\${NC}\\n"
  printf "\${YELLOW}Please go to http://\${formatted_addr}:3000\${NC}\\n\\n"
}

update_hanzo() {
  echo "Updating Hanzo Platform..."
  docker pull hanzo/platform:latest
  docker service update --image hanzo/platform:latest hanzo
  echo "Hanzo Platform has been updated to the latest version."
}

# Main script execution
if [ "\$1" = "update" ]; then
  update_hanzo
else
  install_hanzo
fi`}
    </pre>
  );
};

export default Install;
