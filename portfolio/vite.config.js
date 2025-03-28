import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Exposes to the local network
    port: 5173, // You can specify a different port if needed
  },
  plugins: [react(),tailwindcss(),
  ],
})
