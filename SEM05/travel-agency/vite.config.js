import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Cambia '/travel-agency/' por el nombre exacto de tu repositorio en GitHub.
// Ejemplo: si tu repo se llama "sem05-tarea", escribe '/sem05-tarea/'
export default defineConfig({
  base: '/frontend02/SEM05/travel-agency/',
  plugins: [react()],
})
