import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    // Keep a single copy of React/TanStack in the graph so hooks and
    // context don't break from duplicate installs.
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  // Point the SSR build at our custom server entry (src/server.ts), which
  // wraps TanStack Start's default handler with our own error page.
  environments: {
    ssr: {
      build: {
        rollupOptions: { input: "./src/server.ts" },
      },
    },
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    // TanStack Start's Vite plugin must come before React's.
    tanstackStart(),
    viteReact(),
    tailwindcss(),
    nitro(),
  ],
});
