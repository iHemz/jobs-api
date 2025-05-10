import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      output: {
        // Manual chunking configuration to optimize bundle size
        manualChunks: {
          // Group React and ReactDOM in a vendor chunk
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Group all MUI components in a separate chunk
          "vendor-mui": [
            "@mui/material",
            "@emotion/react",
            "@emotion/styled",
            "styled-components",
          ],
          // Group all Redux related packages
          "vendor-redux": ["@reduxjs/toolkit", "react-redux"],
          // Group utility libraries
          "vendor-utils": ["js-cookie", "react-hook-form", "react-icons"],
        },
      },
    },

    chunkSizeWarningLimit: 800,
  },
});
