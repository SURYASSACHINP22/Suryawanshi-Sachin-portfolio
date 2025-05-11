import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  base: './',
  publicDir: 'public',
  plugins: [
    react(),
    imagetools()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
