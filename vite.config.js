import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  build: {
    minify: "esbuild",
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "src/main.js",
      output: {
        entryFileNames: "bundle.min.js",
        format: "iife",
        name: "WebflowBundle",
        globals: {
          three: "(typeof THREE !== 'undefined' ? THREE : {})",
        },
      },
      external: ["three"],
    },
  },
  resolve: {
    alias: {
      "@pages": resolve(__dirname, "src/pages"),
      "@utils": resolve(__dirname, "src/utils"),
      "@config": resolve(__dirname, "src/config"),
    },
    extensions: [".js", ".json"],
  },
});