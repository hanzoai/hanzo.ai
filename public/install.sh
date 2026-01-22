#!/bin/sh
<<\EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="refresh" content="0; url=https://hanzo.sh"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Hanzo Install - Redirecting to hanzo.sh</title>
    <style>
      :root {
        --bg: #0a0a0a;
        --text: #e5e5e5;
        --muted: #737373;
        --accent: #fd4444;
      }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background: var(--bg);
        color: var(--text);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      }
      .container { text-align: center; }
      h1 { font-size: 1.5rem; margin-bottom: 1rem; }
      p { color: var(--muted); margin-bottom: 1rem; }
      a { color: var(--accent); }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Redirecting to hanzo.sh...</h1>
      <p>If you are not redirected, <a href="https://hanzo.sh">click here</a>.</p>
    </div>
  </body>
</html>
EOF

# Hanzo Installer - Redirects to hanzo.sh
# The canonical installer is now at hanzo.sh
#
# Usage: curl -fsSL hanzo.ai/install.sh | sh
#        (redirects to hanzo.sh)

exec curl -fsSL https://hanzo.sh/install | sh -s -- "$@"
