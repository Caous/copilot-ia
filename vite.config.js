import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// GSAP, ScrollTrigger e Lenis são carregados via CDN no index.html (window.gsap,
// window.ScrollTrigger, window.Lenis). Marcamos como `external` para o caso de
// alguém importá-los por engano — o bundle nunca os inclui.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2020",
    sourcemap: false,
  },
});
