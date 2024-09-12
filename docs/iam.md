### Archivo: packages/backend/config/database.js
- Propósito: Configura la conexión a tu base de datos MySQL usando Sequelize.
- Qué hacer: Asegúrate de tener Sequelize instalado (npm install sequelize mysql2 o yarn add sequelize mysql2).

## Carpeta: packages/backend/models/
- Propósito: Define la estructura de las tablas en la base de datos.
- Qué hacer: Crea archivos para cada modelo. Asegúrate de definir las relaciones entre modelos si es necesario (por ejemplo, Evento, Escultor, Escultura, Imagen).

## Carpeta: packages/backend/routes/
- Propósito: Define las rutas para la API que manejarán las peticiones HTTP.
- Qué hacer: Crea archivos de rutas para cada entidad (por ejemplo, eventos.js, escultores.js).

## Archivo: packages/backend/index.js

- Propósito: Configura y arranca el servidor Express.
- Qué hacer: Asegúrate de importar y usar las rutas definidas. Configura el puerto en el que escuchará el servidor.