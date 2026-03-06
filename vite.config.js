import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Exclude chaincss from dependency optimization
    exclude: ['@melcanz85/chaincss']
  },
  build: {
    rollupOptions: {
      // Mark chaincss as external so it's not bundled
      external: ['@melcanz85/chaincss']
    }
  },
  server: {
    watch: {
      // Ignore the chaincss folder to prevent unnecessary triggers
      ignored: ['**/chaincss/**']
    }
  }
})