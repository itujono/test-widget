import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        kpi: "./src/main-kpi.tsx",
        "network-hashrate": "./src/main-network-hashrate.tsx",
        hashprice: "./src/main-hashprice.tsx",
      },
      output: {
        entryFileNames: "main-[name].js",
        chunkFileNames: "main-[name].js",
        assetFileNames: "main-[name].[ext]",
        dir: "widget-dist",
      },
    },
  },
  plugins: [react()],
});
