# Imagen base para Node.js
FROM node:18

# Crear y establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos esenciales para instalar dependencias
COPY package.json ./

# Instalar las dependencias
RUN yarn install

# Copiar el resto del código del frontend
COPY . .

# Construir la aplicación
RUN yarn build

# Usar Nginx para servir la aplicación
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Exponer el puerto donde Nginx sirve la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
