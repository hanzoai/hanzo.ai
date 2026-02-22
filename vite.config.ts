import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
function copyIndexTo404(): Plugin {
  return {
    name: "copy-index-to-404",
    closeBundle: async () => {
      const distDir = path.resolve(__dirname, "dist");
      const indexPath = path.join(distDir, "index.html");
      const notFoundPath = path.join(distDir, "404.html");

      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
        console.log("Created 404.html for GitHub Pages SPA routing");
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // use 0.0.0.0 instead of ::
    port: 8080,
  },
  plugins: [
    react(),
    // Only include componentTagger in development mode
    process.env.NODE_ENV === 'development' && componentTagger(),
    // Copy index.html to 404.html for GitHub Pages
    copyIndexTo404(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@hanzo/zen-models": path.resolve(__dirname, "../docs/packages/zen-models/src"),
    },
  },
});
