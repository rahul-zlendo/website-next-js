import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



const BACKEND_URL = 'https://api.zlendorealty.com';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    allowedHosts: ["ffa08f1d12ae.ngrok-free.app"],
    proxy: {
      '/api': {
        target: BACKEND_URL,
        changeOrigin: true,
        secure: false, // IP based certs often fail verification
      }
    }
  }
})
