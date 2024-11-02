                  # Cómo Funciona `models/user.js`
                  
                  Este archivo define el modelo `User` para la aplicación utilizando Sequelize, que representa a los usuarios en la base de datos. Aquí se especifican los atributos principales del usuario, como `username`, `password`, `role` y `email`, junto con validaciones y restricciones de unicidad. Además, incluye un hook que encripta la contraseña antes de guardarla.
                  
                  ### Estructura del Modelo `User`
                  
                  #### Campos Definidos
                  
                  1. **`id`**:
                      - Tipo: `INTEGER`
                      - Propiedades: `autoIncrement`, `primaryKey`
                      - Es el identificador único para cada usuario y se incrementa automáticamente con cada nuevo registro.
                  
                     2. **`username`**:
                         - Tipo: `STRING`
                         - Propiedades: `allowNull: false`, `unique: true`
                         - Este campo es único y no puede ser nulo, garantizando que cada usuario tenga un nombre de usuario único.
                  
                     3. **`password`**:
                         - Tipo: `STRING`
                         - Propiedades: `allowNull: false`
                         - Almacena la contraseña del usuario, la cual es encriptada antes de ser guardada en la base de datos (usando `bcrypt` en el hook `beforeSave`).
                  
                     4. **`role`**:
                         - Tipo: `ENUM('admin', 'user')`
                         - Propiedades: `allowNull: false`
                         - Define los roles permitidos, donde un usuario puede ser `admin` o `user`.
                  
                     5. **`email`**:
                         - Tipo: `STRING`
                         - Propiedades: `allowNull: false`, `unique: true`
                         - Incluye validación de formato de correo electrónico (`isEmail: true`) y asegura que cada usuario tenga un correo único.
                  
                     6. **Timestamps**:
                         - Sequelize crea y actualiza automáticamente los campos `createdAt` y `updatedAt`, renombrados como `created_at` y `updated_at`, respectivamente.
                  
                  ### Hook `beforeSave`
                  
                  - **Propósito**: Este hook se ejecuta antes de guardar o actualizar un usuario en la base de datos.
                    - **Función**: Verifica si el campo `password` ha cambiado y, si es así, utiliza `bcrypt.hash` para encriptar la contraseña antes de guardarla.
                  
                  ### Método `register`
                  
                  Este método maneja el registro de un nuevo usuario, incluyendo la verificación de unicidad, creación de usuario y generación de token JWT para autenticación.
                  
                  1. **Verificación de Usuario Existente**:
                      - Antes de crear un nuevo usuario, verifica si el `username` ya está en uso.
                  
                     2. **Creación de Usuario**:
                         - Si no existe un usuario con el `username` proporcionado, crea un nuevo registro en la base de datos con `username`, `password` y `role`.
                  
                     3. **Generación de Token JWT**:
                         - Al registrar el usuario, genera un token JWT con el `id`, `username`, y `role`, firmado con `SECRET_KEY` y con expiración de `1h`.
                  
                     4. **Respuesta al Cliente**:
                         - Si el registro es exitoso, envía una respuesta al cliente con el token y datos del usuario; si falla, envía un mensaje de error.
                  
                  ### Funcionalidades de Seguridad en `models/user.js`
                  
                  - **Encriptación de Contraseña**:
                      - El hook `beforeSave` utiliza `bcrypt` para asegurar que las contraseñas se almacenen encriptadas, protegiendo los datos sensibles de los usuarios.
                  
                        - **Token JWT en el Método `register`**:
                            - El token JWT se genera al registrar al usuario, permitiendo su autenticación y acceso seguro al sistema.
                  
                  ### Resumen
                  
                  El archivo `models/user.js` define el modelo `User` con campos esenciales y reglas de validación. Asegura la unicidad de `username` y `email`, y utiliza un hook para encriptar contraseñas antes de su almacenamiento. La inclusión de la lógica de registro y generación de token facilita una gestión segura y eficiente de usuarios dentro del sistema.
                  
                                                                                                      