# Cómo Funciona `config/database.js`

Este archivo establece la conexión con la base de datos MySQL para el proyecto 'Bienal del Chaco 2024'. Utiliza `Sequelize`, un ORM de Node.js, que permite gestionar la base de datos a través de modelos y consultas SQL simplificadas.

### Configuración Principal

#### `const sequelize = new Sequelize(...)`

1. **Nombre de la Base de Datos**:
    - El primer argumento, `'bienal'`, especifica el nombre de la base de datos con la que se conecta Sequelize.

2. **Usuario y Contraseña**:
    - `'bienal'` como segundo y tercer argumento define el usuario y la contraseña para acceder a la base de datos.
                                                                                
3. **Host**:
    - `host: 'localhost'` indica que la base de datos se ejecuta en la misma máquina que el servidor, facilitando el acceso local.

4. **Dialect**:
    - `dialect: 'mysql'` indica que se utiliza MySQL como sistema de gestión de base de datos.

5. **Logging**:
    - `logging: false` desactiva el registro de consultas SQL en la consola, lo que puede ser útil para reducir el ruido de salida en entornos de producción.

### Exportación del Módulo

- **`module.exports = sequelize`**:
    - Exporta la instancia de `sequelize` para que pueda ser utilizada en otros archivos del proyecto. Esto permite definir modelos y realizar consultas a la base de datos desde cualquier lugar en el código.

### Funcionalidades de Seguridad en `database.js`

- **Gestión Segura de Conexiones**:
    - Al usar Sequelize, el archivo evita el uso directo de consultas SQL, protegiendo contra inyecciones SQL y mejorando la seguridad de la aplicación.

### Resumen

El archivo `database.js` es esencial para la conexión del proyecto con MySQL, facilitando las operaciones de base de datos mediante Sequelize. La configuración incluye detalles básicos como el nombre de la base de datos, el usuario y la contraseña, y especifica la desactivación de registros para optimizar el rendimiento.
"""

# Cómo Funciona `controllers/authController.js`

Este archivo contiene la lógica de autenticación del sistema, que incluye el manejo de las rutas de inicio de sesión y registro de usuarios. Utiliza el modelo `User` para interactuar con la base de datos y emplea `jsonwebtoken` y `bcryptjs` para gestionar la autenticación y la encriptación de contraseñas.

### Funciones Principales

#### `login(req, res)`

1. **Recepción de Credenciales**:
    - El cliente envía las credenciales (`username` y `password`) mediante una solicitud `POST` al servidor.

2. **Búsqueda del Usuario**:
    - Se utiliza el modelo `User` para buscar un usuario en la base de datos que coincida con el `username` proporcionado.
    - Si no se encuentra el usuario, se responde con un error `401 Unauthorized`.

3. **Verificación de Contraseña**:
    - Se compara la contraseña proporcionada con la almacenada en la base de datos usando `bcrypt.compare`.
    - Si las contraseñas no coinciden, se responde con un error `401 Unauthorized`.

4. **Generación del Token JWT**:
    - Si las credenciales son válidas, se genera un token JWT utilizando la función `generateToken`, que incluye los datos del usuario (ID, `username`, y `role`).
    - El token tiene una duración de `1h`.

5. **Respuesta al Cliente**:
    - El servidor responde al cliente con el token y la información del usuario.

#### `register(req, res)`

1. **Recepción de Datos**:
    - El cliente envía los datos necesarios para registrar un nuevo usuario (`username`, `password`, y `role`).

2. **Verificación de Usuario Existente**:
    - Se verifica si ya existe un usuario con el mismo `username` en la base de datos.
    - Si el usuario ya existe, se responde con un error `400 Bad Request`.

3. **Encriptación de la Contraseña**:
    - Se utiliza `bcrypt.hash` para encriptar la contraseña antes de almacenarla en la base de datos, asegurando que no se guarde en texto plano.

4. **Creación del Usuario**:
    - Se crea un nuevo usuario en la base de datos utilizando el modelo `User`.

5. **Generación del Token JWT**:
    - Se genera un token JWT para el nuevo usuario usando la función `generateToken`.

6. **Respuesta de Confirmación**:
    - El servidor responde al cliente con un mensaje de éxito (`201 Created`), junto con el token y la información del nuevo usuario.

### Funcionalidades de Seguridad en `authController.js`

- **Encriptación de Contraseña**:
    - La librería `bcryptjs` garantiza que las contraseñas se almacenen de forma segura, previniendo que se expongan en texto plano.

- **Token JWT para Sesiones Seguras**:
    - Se utiliza JWT firmado con una clave secreta para garantizar que solo los usuarios autenticados puedan acceder a las áreas protegidas del sistema.

- **Expiración de Tokens**:
    - Los tokens tienen un tiempo de expiración (`1h`), lo que limita el acceso del usuario y reduce el riesgo de accesos no autorizados.

### Resumen

El archivo `authController.js` implementa un sistema de autenticación eficaz y seguro, gestionando el inicio de sesión y el registro de usuarios. Utiliza prácticas recomendadas de seguridad, como el hashing de contraseñas y la utilización de tokens JWT, lo que permite una arquitectura robusta y escalable para la gestión de usuarios.

# Cómo Funciona `middleware/authMiddleware.js`

Este archivo define un middleware que verifica la autenticidad de los tokens JWT (JSON Web Token) enviados por los clientes en las solicitudes HTTP. Utiliza `jsonwebtoken` para descifrar el token y autenticar al usuario, asegurando que las áreas protegidas de la aplicación solo sean accesibles para usuarios autenticados.

### Función Principal

#### `verifyToken(req, res, next)`

1. **Obtención del Token de Autorización**:
    - El middleware extrae el token de autenticación de los encabezados de la solicitud HTTP usando `req.headers['authorization']`.
    - Si no se proporciona un token, la función responde con un error `403 Forbidden` y un mensaje `"Token no proporcionado."`.

2. **Extracción del Token JWT**:
    - Verifica si el token comienza con el prefijo `"Bearer "`. Si es así, elimina esta parte y extrae solo el token JWT para procesarlo.

3. **Verificación del Token**:
    - Usando la clave secreta almacenada en `SECRET_KEY`, `jwt.verify()` intenta verificar la validez del token.
    - Si el token no es válido, responde con un error `401 Unauthorized` y el mensaje `"Token no válido."`.

4. **Asignación de Datos del Usuario**:
    - Si el token es válido, `jwt.verify()` decodifica el token, y se almacena el contenido decodificado en `req.user`.
    - Esto permite que las siguientes funciones en la cadena de middleware puedan acceder a los datos del usuario autenticado.

5. **Continúa con el Flujo de Ejecución**:
    - Si el token es válido, llama a `next()` para que la solicitud continúe hacia el siguiente middleware o controlador de la ruta solicitada.

### Funcionalidades de Seguridad en `authMiddleware.js`

- **Verificación del Token de Autorización**:
    - Al requerir que se proporcione un token válido en cada solicitud, este middleware asegura que solo usuarios autenticados tengan acceso a recursos protegidos, previniendo accesos no autorizados.

- **Protección de Rutas Mediante Tokens JWT**:
    - Los tokens contienen la información del usuario y están firmados con una clave secreta (`SECRET_KEY`). El uso de esta clave asegura que solo los usuarios que posean un token emitido por el servidor puedan acceder.

### Resumen

El archivo `authMiddleware.js` implementa un middleware de seguridad esencial para la autenticación de usuarios en la aplicación. Verifica que cada solicitud contenga un token JWT válido antes de permitir el acceso a rutas protegidas, garantizando así una capa de seguridad basada en la autenticación del usuario.

# Cómo Funciona `index.js`

Este archivo es el punto de entrada principal para el servidor backend de la aplicación. Configura la aplicación Express, define los middlewares esenciales y gestiona el enrutamiento de las distintas funcionalidades de la aplicación, como eventos, escultores, esculturas, imágenes, autenticación, usuarios y patrocinadores. Además, establece la conexión con la base de datos utilizando Sequelize.

### Configuración Inicial

1. **Importaciones de Módulos Necesarios**:
    - `express`: Para crear el servidor y manejar las rutas HTTP.
    - `cors`: Para permitir solicitudes entre diferentes dominios.
    - `sequelize`: Para gestionar la conexión con la base de datos MySQL.
    - Módulos de enrutamiento: Importa los archivos de rutas necesarios (`eventosRouter`, `escultoresRouter`, `esculturasRouter`, `imagenesRouter`, `authRoutes`, `userRoutes`, y `sponsorRoutes`) para gestionar las diferentes entidades de la aplicación.

2. **Configuración del Servidor**:
    - `app`: Se inicializa una aplicación Express.
    - `PORT`: Se define el puerto en el que el servidor escuchará las solicitudes, en este caso, el puerto 3000.
    - `.env`: Se carga el archivo `.env` para acceder a las variables de entorno.

### Middlewares Principales

1. **CORS**:
    - Configura el middleware `cors` para permitir solicitudes desde cualquier origen, lo que es útil durante el desarrollo para pruebas desde distintos clientes.

2. **JSON**:
    - Se utiliza `express.json()` para analizar las solicitudes entrantes con datos en formato JSON, permitiendo así que el servidor procese y responda a solicitudes JSON.

### Rutas

- El servidor define rutas específicas para cada funcionalidad del sistema:
    - **`/eventos`**: Gestiona eventos.
    - **`/escultores`**: Gestiona escultores.
    - **`/esculturas`**: Gestiona esculturas.
    - **`/imagenes`**: Gestiona imágenes asociadas a esculturas.
    - **`/api/auth`**: Gestiona la autenticación de usuarios.
    - **`/api/user`**: Gestiona la información de usuarios registrados.
    - **`/api/sponsors`**: Gestiona patrocinadores.

Cada una de estas rutas es manejada por un archivo separado de controladores para mantener la modularidad del código.

### Inicialización del Servidor y Conexión a la Base de Datos

1. **Sincronización de Sequelize**:
    - `sequelize.sync({ alter: true })`: Sincroniza el modelo de datos con la base de datos MySQL. La opción `{ alter: true }` permite que Sequelize modifique la estructura de la base de datos para adaptarse a los cambios en los modelos, evitando posibles errores de inconsistencia.

2. **Inicio del Servidor**:
    - `app.listen(PORT, ...)`: Inicia el servidor en el puerto especificado y muestra un mensaje de confirmación en la consola para verificar que el servidor está en funcionamiento.

### Manejo de Errores de Conexión

- Si ocurre un error al conectar con la base de datos, este se captura y se muestra en la consola para que el desarrollador pueda tomar acción.

### Resumen

El archivo `index.js` configura y organiza el servidor Express de la aplicación, asegurando que todas las rutas y middlewares estén debidamente configurados y que la base de datos esté sincronizada. Al mantener cada conjunto de rutas en archivos separados, el código es modular, escalable y fácil de mantener.
