# Resolución de Problemas

## Problemas Comunes

### Error: `vite` is not recognized

Asegúrate de haber instalado todas las dependencias. Ejecuta `yarn install` en la raíz del proyecto.

### Error: Cannot find module '../dist/jiti'

Intenta reinstalar los módulos de Node.js:
```bash
rm -rf node_modules yarn.lock
yarn install
