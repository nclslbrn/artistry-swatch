// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// https://vitejs.dev/guide/build.html#library-mode

export default defineConfig({
  base: "artistry-swatch",
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
