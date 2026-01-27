import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Optimized build configuration
  build: {
    minify: 'terser',
    target: 'es2015',
    sourcemap: false,
    
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('react-router-dom')) {
              return 'router';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react')) {
              return 'ui';
            }
            if (id.includes('react-helmet-async')) {
              return 'utils';
            }
            return 'vendor';
          }
        }
      }
    },
    
    // Optimize chunks
    chunkSizeWarningLimit: 1000,
    
    // Terser options for better minification
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        safari10: true
      }
    }
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