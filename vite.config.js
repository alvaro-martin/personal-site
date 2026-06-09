import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/personal-site/',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
      translations: path.resolve(__dirname, 'src/translations'),
      assets: path.resolve(__dirname, 'src/assets'),
    }
  },
  server: {
    port: 3000
  }
})
