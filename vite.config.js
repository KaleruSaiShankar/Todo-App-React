// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Todo-App-React/', // 🔁 Replace with actual GitHub repo name
  plugins: [react()],
})
