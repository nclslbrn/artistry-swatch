// vite.config.ts
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import process from "node:process";

export default defineConfig({
  base: process.env.VITE_BASE_URL ?? "/",
  build: {
    rollupOptions: {
      output: {
        format: "iife",
      },
    },
    outDir: "./dist/",
    emptyOutDir: true,
  },
  plugins: [dts()],
});
