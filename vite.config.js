import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig, loadEnv } from "vite"
import sparkPlugin from "@github/spark/spark-vite-plugin"
import createIconImportProxy from "@github/spark/vitePhosphorIconProxyPlugin"
import { resolve } from 'path'

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      tailwindcss(),
      createIconImportProxy(),
      sparkPlugin(),
    ],
    resolve: {
      alias: {
        '@': resolve(projectRoot, 'src')
      }
    },
    server: {
      host: env.VITE_HOST || 'localhost',
      port: env.VITE_PORT ? Number(env.VITE_PORT) : 5173,
    },
  }
})
