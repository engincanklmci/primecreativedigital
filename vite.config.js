import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Simple build configuration
  build: {
    minify: true,
    target: 'es2015',
    sourcemap: false,
  },
  
  // Development server
  server: {
    port: 3000,
    open: true,
  },
  
  // Preview server
  preview: {
    port: 4173,
    open: true,
  },
})