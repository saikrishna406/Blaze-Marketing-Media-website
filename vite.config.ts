import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression() // Enable Gzip compression
  ],
  build: {
    target: 'esnext', // Modern browsers for better optimization
    minify: 'esbuild', // Faster minification
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['lucide-react'],
          'three': ['three', 'three-mesh-bvh'],
          'utils': ['@react-three/fiber', '@react-three/drei']
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.svg')) {
            return 'assets/svg/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false, // Disable sourcemaps in production
    reportCompressedSize: false // Skip reporting compressed sizes
  },
  optimizeDeps: {
    include: ['lucide-react', 'three', '@react-three/fiber', '@react-three/drei'],
    exclude: ['@react-three/postprocessing'] // Exclude heavy packages that aren't immediately needed
  },
  server: {
    hmr: { overlay: false }, // Disable HMR overlay for faster updates
  }
})