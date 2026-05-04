import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // 0.0.0.0으로 바인딩 → 같은 네트워크의 다른 PC/폰에서 접속 가능
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
