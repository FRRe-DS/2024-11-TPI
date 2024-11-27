# Imagen base para Node.js
FROM node:18

# Crear y establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y yarn.lock al contenedor
COPY package.json ./

# Instalar las dependencias
RUN yarn install

# Copiar el resto del código del backend al contenedor
COPY . .

# Exponer el puerto en el que corre el backend
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["yarn", "start"]
