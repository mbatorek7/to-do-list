import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/to-do-list/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
