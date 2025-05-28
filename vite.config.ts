import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@constants': path.resolve(__dirname, './src/types/index.tsx'),
      '@components': path.resolve(__dirname,'./src/components/index.tsx'),
    }
  }
})
