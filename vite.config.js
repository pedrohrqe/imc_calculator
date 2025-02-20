import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acessar de qualquer IP na rede
    port: 3000,      // Opcional: defina a porta desejada
  }
})
