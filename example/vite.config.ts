import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import autoInstall from "..";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    autoInstall({
      cli:'npm',
      include:['**/main.tsx'],
      exclude: [],
    }),
  ],
});
