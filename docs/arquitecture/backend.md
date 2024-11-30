# Estructura del Backend

```plaintext
backend/
├── config/                # Configuraciones globales (DB, variables de entorno)
│   ├── database.js        # Configuración y conexión de Sequelize
│   └── env.js             # Variables de entorno
├── controllers/           # Controladores: manejan las solicitudes HTTP
│   ├── authController.js  # Login, registro, autenticación
│   ├── eventoController.js # CRUD para eventos
│   ├── escultorController.js # CRUD para escultores
│   ├── esculturaController.js # CRUD para esculturas
│   └── votoController.js  # Lógica para votos
├── middlewares/           # Middlewares: validaciones, autenticación, etc.
│   ├── authMiddleware.js  # Verificación de JWT
│   └── errorHandler.js    # Manejo global de errores
├── models/                # Modelos de datos (Sequelize)
│   ├── User.js            # Modelo para usuarios
│   ├── Escultor.js        # Modelo para escultores
│   ├── Escultura.js       # Modelo para esculturas
│   ├── Evento.js          # Modelo para eventos
│   ├── Voto.js            # Modelo para votos
│   └── index.js           # Asociación y exportación de modelos
├── routes/                # Rutas: Definen los endpoints
│   ├── authRoutes.js      # Rutas para autenticación
│   ├── eventoRoutes.js    # Rutas para eventos
│   ├── escultorRoutes.js  # Rutas para escultores
│   ├── esculturaRoutes.js # Rutas para esculturas
│   └── votoRoutes.js      # Rutas para votaciones
├── services/              # Lógica de negocio y procesamiento
│   ├── authService.js     # Registro, login, generación de JWT
│   ├── qrService.js       # Generación y validación de QR
│   └── votoService.js     # Validación y procesamiento de votos
├── utils/                 # Utilidades auxiliares
│   ├── jwt.js             # Generar y verificar JWT
│   ├── qrGenerator.js     # Función para generar QR
│   └── helpers.js         # Funciones generales
├── .env                   # Variables de entorno (local)
├── Dockerfile             # Configuración para contenedor del backend
├── package.json           # Dependencias y scripts del backend
├── index.js               # Punto de entrada de la aplicación
└── README.md              # Documentación del backend