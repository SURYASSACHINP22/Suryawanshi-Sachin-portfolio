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
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      }
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000
  }
})
