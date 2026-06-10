import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin' // ou @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  base: 'https://johnywdev.github.io/Sistema-de-Login/', 
})
