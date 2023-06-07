import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/styles": path.resolve(__dirname, "src/styles"),
      "@/services": path.resolve(__dirname, "src/services"),
      "@/contexts": path.resolve(__dirname, "src/contexts"),
      "@/utils": path.resolve(__dirname, "src/utils"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/layouts": path.resolve(__dirname, "src/layouts"),
    }
  }
})
