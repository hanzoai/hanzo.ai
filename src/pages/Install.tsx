
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
    <link rel="stylesheet" href="https://hanzo.ai/styles.css"/>
  </head>
  <body class="bg-[#1A1F2C] text-white min-h-screen">
    <div class="max-w-4xl mx-auto p-8">
      <div class="text-center mb-16">
        <div class="mb-8">
          <span class="font-display text-8xl text-white">H</span>
        </div>
        <h1 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Install Hanzo Platform</h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          One command to install the complete Hanzo development platform. 
          This page doubles as both documentation and the installer script itself.
        </p>
      </div>

      <div class="bg-black/50 rounded-lg p-8 mb-12 border border-purple-500/20 backdrop-blur">
        <div class="flex items-center gap-3 mb-4">
          <Terminal className="text-purple-400" size={20} />
          <h2 class="text-xl font-semibold text-purple-400">Quick Install</h2>
        </div>
        <pre class="bg-black rounded-lg p-4 overflow-x-auto border border-purple-500/10"><code>curl -sL hanzo.sh | sh</code></pre>
        <p class="mt-4 text-sm text-gray-400">This command downloads and executes the Hanzo Platform installer.</p>
      </div>

      <div class="space-y-8">
        <div class="bg-black/30 rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4 text-purple-400">Requirements</h2>
          <ul class="list-disc list-inside text-gray-400 space-y-2">
            <li>Node.js 18 or later</li>
            <li>Git (any recent version)</li>
            <li>Curl for downloading the installer</li>
          </ul>
        </div>

        <div class="bg-black/30 rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4 text-purple-400">What's Included</h2>
          <ul class="list-disc list-inside text-gray-400 space-y-2">
            <li>Hanzo CLI - Command line interface for managing your projects</li>
            <li>Hanzo Bot - AI-powered development assistant</li>
            <li>Hanzo Chat - Team collaboration tools</li>
            <li>Development dependencies and tools</li>
          </ul>
        </div>

        <div class="bg-black/30 rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4 text-purple-400">Documentation</h2>
          <p class="text-gray-400">
            Visit <a href="https://docs.hanzo.ai" class="text-purple-400 hover:text-purple-300 underline">docs.hanzo.ai</a> for complete documentation and guides
          </p>
        </div>
      </div>

      <footer class="mt-16 text-center text-gray-500 border-t border-gray-800 pt-8">
        <p>© 2024 Hanzo. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>
EOF

# Ensure dependencies are installed
deps="curl git node npm"

for dep in $deps; do
    if ! command -v $dep >/dev/null 2>&1; then
        echo "Error: $dep is required but not installed."
        exit 1
    fi
done

# Download and execute the full installer
echo "Installing Hanzo Platform..."
curl -sL https://raw.githubusercontent.com/hanzoai/platform/main/scripts/install.sh > install-$$.sh
sh install-$$.sh

# Clean up
rm install-$$.sh

echo "Hanzo Platform installed successfully!"
echo "Run 'hanzo --help' to get started"
`}
    </pre>
  );
};

export default Install;
