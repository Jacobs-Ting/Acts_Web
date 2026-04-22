import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages 專案頁面會部署在 /<repo-name>/ 路徑下。
  // 如果之後 repo 名稱改掉，這裡也要一起改。
  base: "/Acts_Web/",
});
