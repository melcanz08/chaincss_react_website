import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/chaincss_react_website/', // Updated to match folder name
  css: {
    devSourcemap: true
  }
})