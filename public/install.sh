#!/bin/sh
<<\EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
    <title>Hanzo - curl hanzo.sh | sh</title>
    <meta name="description" content="Install Hanzo Dev and Hanzo CLI with a single command"/>
    <link rel="icon" href="/favicon.ico"/>
    <style>
      :root {
        --bg: #0a0a0a;
        --text: #e5e5e5;
        --muted: #737373;
        --accent: #fd4444;
        --border: #262626;
        --code-bg: #171717;
      }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background: var(--bg);
        color: var(--text);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      }
      .container { max-width: 640px; text-align: center; }
      .logo {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: var(--accent);
      }
      h1 {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
      .tagline {
        color: var(--muted);
        margin-bottom: 2rem;
      }
      .install-box {
        background: var(--code-bg);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 2rem;
      }
      .install-code {
        font-family: "SF Mono", "Fira Code", "Consolas", monospace;
        font-size: 1rem;
        color: var(--text);
        user-select: all;
      }
      .install-code .cmd { color: #c084fc; }
      .install-code .flag { color: #22d3ee; }
      .install-code .url { color: #4ade80; }
      .copy-btn {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--muted);
        padding: 0.5rem 1rem;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 1rem;
        font-size: 0.875rem;
        transition: all 0.2s;
      }
      .copy-btn:hover {
        background: var(--border);
        color: var(--text);
      }
      .packages {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 2rem;
        flex-wrap: wrap;
      }
      .package {
        background: var(--code-bg);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1rem 1.5rem;
        text-align: left;
      }
      .package-name {
        font-family: monospace;
        font-size: 0.875rem;
        color: var(--accent);
        margin-bottom: 0.25rem;
      }
      .package-desc {
        font-size: 0.75rem;
        color: var(--muted);
      }
      .links {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .links a {
        color: var(--muted);
        text-decoration: none;
        font-size: 0.875rem;
        transition: color 0.2s;
      }
      .links a:hover { color: var(--text); }
      .footer {
        margin-top: 3rem;
        color: var(--muted);
        font-size: 0.75rem;
      }
      .footer a { color: var(--accent); text-decoration: none; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">⌘ Hanzo</div>
      <h1>Install Hanzo</h1>
      <p class="tagline">AI coding agent and CLI for your terminal</p>

      <div class="install-box">
        <code class="install-code">
          <span class="cmd">curl</span> <span class="flag">-fsSL</span> <span class="url">hanzo.sh</span> | <span class="cmd">sh</span>
        </code>
        <br/>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('curl -fsSL hanzo.sh | sh')">
          Copy to clipboard
        </button>
      </div>

      <div class="packages">
        <div class="package">
          <div class="package-name">@hanzo/dev</div>
          <div class="package-desc">AI coding agent</div>
        </div>
        <div class="package">
          <div class="package-name">@hanzo/cli</div>
          <div class="package-desc">Platform CLI</div>
        </div>
      </div>

      <div class="links">
        <a href="https://github.com/hanzoai/dev">GitHub</a>
        <a href="https://docs.hanzo.ai">Docs</a>
        <a href="https://hanzo.ai">Website</a>
        <a href="https://discord.gg/hanzo">Discord</a>
      </div>

      <div class="footer">
        <p>© 2025 <a href="https://hanzo.ai">Hanzo AI</a> · MIT License</p>
      </div>
    </div>
    <script>
      // Add copy feedback
      document.querySelector('.copy-btn').addEventListener('click', function() {
        this.textContent = 'Copied!';
        setTimeout(() => { this.textContent = 'Copy to clipboard'; }, 2000);
      });
    </script>
  </body>
</html>
EOF

# Hanzo CLI/Dev Installer
# Run with: curl -fsSL hanzo.sh | sh
#
# This script installs @hanzo/dev (AI coding agent) and @hanzo/cli (platform CLI)
# by detecting the available package manager and using it to install globally.

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Print banner
echo ""
echo "${BLUE}${BOLD}  ⌘ Hanzo Installer${NC}"
echo ""

# Detect OS
OS="$(uname -s)"
case "$OS" in
    Linux*)     PLATFORM=linux;;
    Darwin*)    PLATFORM=macos;;
    MINGW*|MSYS*|CYGWIN*) PLATFORM=windows;;
    *)          PLATFORM=unknown;;
esac

# Detect available package manager
detect_package_manager() {
    if command -v bun >/dev/null 2>&1; then
        echo "bun"
    elif command -v pnpm >/dev/null 2>&1; then
        echo "pnpm"
    elif command -v npm >/dev/null 2>&1; then
        echo "npm"
    elif command -v yarn >/dev/null 2>&1; then
        echo "yarn"
    else
        echo "none"
    fi
}

PM=$(detect_package_manager)

if [ "$PM" = "none" ]; then
    echo "${RED}Error: No JavaScript package manager found.${NC}"
    echo ""
    echo "Please install one of the following:"
    echo "  - Node.js + npm: https://nodejs.org"
    echo "  - Bun: curl -fsSL https://bun.sh/install | bash"
    echo "  - pnpm: curl -fsSL https://get.pnpm.io/install.sh | sh"
    echo ""
    exit 1
fi

echo "${GREEN}Using package manager:${NC} $PM"
echo ""

# Install packages
echo "${YELLOW}Installing @hanzo/dev...${NC}"
case "$PM" in
    bun)
        bun add -g @hanzo/dev
        ;;
    pnpm)
        pnpm add -g @hanzo/dev
        ;;
    npm)
        npm install -g @hanzo/dev
        ;;
    yarn)
        yarn global add @hanzo/dev
        ;;
esac

echo ""
echo "${YELLOW}Installing @hanzo/cli...${NC}"
case "$PM" in
    bun)
        bun add -g @hanzo/cli
        ;;
    pnpm)
        pnpm add -g @hanzo/cli
        ;;
    npm)
        npm install -g @hanzo/cli
        ;;
    yarn)
        yarn global add @hanzo/cli
        ;;
esac

echo ""
echo "${GREEN}${BOLD}✓ Installation complete!${NC}"
echo ""
echo "Get started:"
echo "  ${BOLD}hanzo login${NC}      # Authenticate with Hanzo"
echo "  ${BOLD}hanzo dev${NC}        # Start the AI coding agent"
echo ""
echo "Documentation: https://docs.hanzo.ai"
echo ""
