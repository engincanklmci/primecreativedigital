import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build optimizations
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
          
          // Async chunks for pages
          pages: [
            './src/pages/Home.jsx',
            './src/pages/Services.jsx',
            './src/pages/Portfolio.jsx',
            './src/pages/About.jsx',
            './src/pages/Blog.jsx',
            './src/pages/Contact.jsx'
          ]
        },
        
        // Asset naming for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          return `assets/[ext]/[name]-[hash].${ext}`;
        }
      }
    },
    
    // Optimize bundle size
    target: 'es2015',
    cssCodeSplit: true,
    sourcemap: false,
    
    // Asset optimization
    assetsInlineLimit: 4096, // 4kb
  },
  
  // Development server
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  
  // Preview server
  preview: {
    port: 4173,
    open: true,
  },
  
  // Asset optimization
  assetsInclude: ['**/*.webp'],
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
  
  // CSS optimization
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
  
  // Resolve aliases
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@context': '/src/context',
      '@data': '/src/data',
    },
  },
})
