import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  plugins: [
    react(),
    // Isso ativa o React Compiler que está no seu package.json
    babel({
      plugins: [
        ['babel-plugin-react-compiler', { target: '19' }]
      ]
    })
  ]
})