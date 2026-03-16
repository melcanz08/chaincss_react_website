import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ✅ CRITICAL: Set base to your repository name
  base: '/chaincss_react_website/',
  optimizeDeps: {
    exclude: ['@melcanz85/chaincss']
  },
  build: {
    rollupOptions: {
      external: ['@melcanz85/chaincss']
    }
  },
  server: {
    watch: {
      ignored: ['**/chaincss/**']
    }
  }
})