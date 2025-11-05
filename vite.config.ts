import { AliasOptions, defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"

const aliases: AliasOptions = {
  "@cmp": path.resolve(__dirname, "./src/components"),
  "@wid": path.resolve(__dirname, "./src/widgets"),
  "@wrp": path.resolve(__dirname, "./src/wrappers"),
  "@enum": path.resolve(__dirname, "./src/common/enums"),
  "@api": path.resolve(__dirname, "./src/api/endpoints"),
  "@": path.resolve(__dirname, "./src"),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: aliases,
  },
  server: {
    port: 3000,
  },
})
