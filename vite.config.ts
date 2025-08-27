/* eslint-disable no-console */
/* eslint-disable import/order */
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path, { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  console.log(`Running in ${mode} mode`)
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
  }
})
