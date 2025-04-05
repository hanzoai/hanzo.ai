import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Node.js global doesn't have crypto in old versions
// Let's create a simple workaround for crypto.getRandomValues
global.crypto = global.crypto || {
  getRandomValues: function(buffer) {
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = Math.floor(Math.random() * 256);
    }
    return buffer;
  }
};

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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
