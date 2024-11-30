# Como Funciona `routes/authRoutes.js`

Este archivo organiza la lógica de autenticación en dos rutas principales: `/login` para la autenticación de usuarios y `/register` para el registro de nuevos usuarios. Cada endpoint tiene sus propias responsabilidades y funciona de la siguiente manera:

### `POST /login`: Inicio de Sesión

1. **Recepción de Credenciales**:
- El cliente envía las credenciales (`username` y `password`) al servidor mediante una solicitud `POST`.

2. **Búsqueda del Usuario**:
- Utilizando el modelo `User`, el servidor intenta encontrar un usuario en la base de datos que coincida con el `username` proporcionado.
- Si el usuario no existe, se devuelve un mensaje de error (`401 Unauthorized`) con el mensaje "Usuario o contraseña incorrectos".

3. **Verificación de Contraseña**:
- Si el usuario es encontrado, se compara la contraseña ingresada con la almacenada en la base de datos usando `bcrypt.compare`, que es una función de comparación de contraseñas encriptadas.
- Si las contraseñas no coinciden, se devuelve un error de `401 Unauthorized` con el mensaje "Usuario o contraseña incorrectos".

4. **Generación del Token JWT**:
- Si el `username` y la `password` son correctos, se genera un token JWT (JSON Web Token) usando `jsonwebtoken`.
- Este token contiene los datos del usuario, incluyendo `id`, `username`, y `role`. También tiene una expiración definida (`1h`), lo cual limita el tiempo de autenticación.

5. **Respuesta al Cliente**:
- El servidor responde al cliente enviando el token y la información básica del usuario.
- El token es almacenado en el cliente y se utiliza para autenticar solicitudes futuras.

### `POST /register`: Registerpage de Usuario

1. **Recepción de Datos**:
- El cliente envía los datos requeridos para crear un nuevo usuario (`username`, `password`, y `role`).

2. **Encriptación de la Contraseña**:
- Antes de almacenar la contraseña en la base de datos, esta es encriptada utilizando `bcrypt.hash` con un nivel de seguridad de `10`. Este proceso asegura que las contraseñas no se guarden en texto plano y mejora la seguridad del sistema.

3. **Creación del Usuario en la Base de Datos**:
- Una vez encriptada la contraseña, el servidor utiliza el modelo `User` para crear un nuevo registro de usuario en la base de datos.
- Si el proceso es exitoso, se envía una respuesta al cliente confirmando la creación del usuario.

4. **Respuesta de Confirmación**:
- El servidor responde al cliente con un mensaje de éxito (`201 Created`), incluyendo algunos datos del nuevo usuario (ID, `username` y `role`).

## Funcionalidades de Seguridad en `authRoutes.js`

- **Encriptación de Contraseña**:
    - La librería `bcryptjs` garantiza que las contraseñas de los usuarios no se almacenen en texto plano, sino en forma de hash. Esto significa que incluso si alguien accede a la base de datos, las contraseñas reales no estarán expuestas.

- **Token JWT para Sesión Segura**:
    - Los tokens JWT firmados con una clave secreta (`SECRET_KEY`) aseguran que solo usuarios autenticados puedan acceder a las áreas protegidas del sistema. Este token se incluye en futuras solicitudes para verificar la autenticidad de la sesión.

- **Expiración de Tokens**:
    - El tiempo de expiración de los tokens (`1h`) asegura que el usuario deba autenticarse nuevamente después de un período de inactividad, reduciendo el riesgo de accesos no autorizados.

## Resumen

El archivo `authRoutes.js` implementa un sistema de autenticación básico pero robusto, usando `bcrypt` para la seguridad de contraseñas y JWT para la gestión de sesiones. Esto permite una arquitectura de autenticación confiable, donde los datos de usuario se manejan de forma segura y se protegen contra accesos no autorizados.
