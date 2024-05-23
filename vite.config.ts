import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from 'path';

export default defineConfig({
  build: {},
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 8 versions'],
        }) 
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@api': path.resolve(__dirname, 'src/api'),
    }
  }
})