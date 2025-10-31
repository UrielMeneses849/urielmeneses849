import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser';
import react from '@vitejs/plugin-react';
 // Importa el módulo 'compression'

 export default defineConfig({
  plugins: [react()],
  base: "https://urielmeneses.site", // Ruta base de la aplicación

  server: {
    port: 5173, // Puerto personalizado
  },

  optimizeDeps: {
    include: ['src/animationWorker.js'], // Ruta correcta del Web Worker
  },
  
  build: {
    minify: 'terser',
    rollupOptions: {
      plugins: [terser()],
    },
  },

  // Otras configuraciones de Vite
});
