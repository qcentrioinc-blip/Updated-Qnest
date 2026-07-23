import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    // Only pre-bundle essential deps 
    include: [
      'react',
      'react-dom/client',
      'react-router-dom',
      'framer-motion',
      'gsap',
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'mui': ['@mui/material', '@emotion/react', '@emotion/styled'],
          'framer': ['framer-motion'],
          'three': ['three'],
        }
      }
    }
  }
})

