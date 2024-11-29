import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: './postcss.config.js', // Esto conecta PostCSS y Tailwind
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        watch: {
            usePolling: true,
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // Backend URL para desarrollo
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''), // Opcional
            },
        },
    },
    resolve: {
        alias: {
            '@': '/src', // Alias para rutas absolutas
        },
    },
    build: {
        outDir: 'dist', // Directorio de salida para producción
        sourcemap: true,
    },
});