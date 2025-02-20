
import { useEffect } from 'react';

const Install = () => {
  useEffect(() => {
    // Instead of trying to modify document.contentType, we'll set a meta tag
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
  <body class="bg-black text-white min-h-screen">
    <div class="max-w-4xl mx-auto p-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Install Hanzo Platform</h1>
        <p class="text-xl text-gray-400">One command to install the complete Hanzo development platform</p>
      </div>

      <div class="bg-gray-900 rounded-lg p-6 mb-8">
        <pre class="overflow-x-auto"><code>curl -sL hanzo.sh | sh</code></pre>
      </div>

      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Requirements</h2>
          <ul class="list-disc list-inside text-gray-400">
            <li>Node.js 18+</li>
            <li>Git</li>
            <li>Curl</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-2">What gets installed?</h2>
          <ul class="list-disc list-inside text-gray-400">
            <li>Hanzo CLI</li>
            <li>Hanzo Bot</li>
            <li>Hanzo Chat</li>
            <li>Development dependencies</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-2">Documentation</h2>
          <p class="text-gray-400">
            Visit <a href="https://docs.hanzo.ai" class="text-purple-400 hover:text-purple-300">docs.hanzo.ai</a> for complete documentation
          </p>
        </div>
      </div>

      <footer class="mt-12 text-center text-gray-500">
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
