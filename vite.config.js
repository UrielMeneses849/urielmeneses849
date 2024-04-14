import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'compression';

export default defineConfig({
  plugins: [react()],
  base: "/", // Ruta base de la aplicación

  server: {
    middlewareMode: true,
    configureServer: ({ app }) => {
      // Habilitar compresión Gzip y Brotli
      app.use(compression());
    },
    port: 5173, // Puerto personalizado
  },

  // Otras configuraciones de Vite
});
