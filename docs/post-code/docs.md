1. types/
   Propósito: Centralizar todos los tipos y interfaces de TypeScript para cada módulo.
   Contenido: Interfaces, tipos y enums específicos de cada funcionalidad.
   Ejemplos:
   User.ts: Define interfaces como User, UserProfile, UserRole.
   Auth.ts: Contiene tipos como AuthResponse, Credentials, AuthError.
   Common.ts: Tipos compartidos, como ApiResponse, PaginatedResponse.
2. utils/
   Propósito: Almacenar funciones y utilidades que son independientes del estado y pueden ser reutilizadas en cualquier parte de la aplicación.
   Contenido: Funciones de validación, formateo, manipulación de datos, etc.
   Ejemplos:
   formatDate.ts: Función para formatear fechas.
   validateEmail.ts: Validador de emails.
   calculateAge.ts: Calcula la edad a partir de una fecha de nacimiento.
3. services/
   Propósito: Encapsular la lógica de interacción con APIs y otras fuentes de datos externas, gestionando también la lógica de autenticación y el manejo de tokens.
   Contenido: Módulos que contienen funciones para realizar solicitudes HTTP o manejar datos del backend.
   Ejemplos:
   AuthService.ts: Lógica de login, logout, obtener datos del usuario.
   UserService.ts: Lógica para obtener, actualizar o eliminar datos de usuarios.
   ApiService.ts: Cliente general de API con configuración de axios para llamadas generales.
4. components/
   Propósito: Almacenar componentes reutilizables, organizándolos para mantener clara la estructura.
   Contenido: Componentes UI (botones, modales) y otros específicos de la funcionalidad (como formularios de login o el menú de usuario).
   Subcarpetas recomendadas:
   /shared: Componentes UI reutilizables y genéricos (Botones, Modales).
   /feature-specific: Componentes específicos de una funcionalidad.
   Ejemplos:
   NavbarButton.tsx: Un botón reutilizable.
   UserProfile.tsx: Componente para mostrar el perfil del usuario.
   Navbar.tsx: Componente de navegación superior, si es usado en todas las páginas.
5. hooks/
   Propósito: Centralizar lógica de React personalizada que maneje datos de estado, lógica de negocio o interacciones que se repitan.
   Contenido: Hooks personalizados y compartidos que abstraen la lógica común o hacen que los componentes sean más declarativos.
   Ejemplos:
   useAuth.ts: Maneja la autenticación, validación de tokens y permisos.
   useUserData.ts: Devuelve los datos del usuario autenticado o actualiza el perfil.
   useFetch.ts: Hook genérico para hacer solicitudes de datos a la API.

src/
└── features/
├── auth/
│   ├── components/
│   │   └── LoginForm.tsx
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── services/
│   │   └── AuthService.ts
│   ├── types/
│   │   └── Auth.ts
│   └── utils/
│       └── validateCredentials.ts
├── user/
│   ├── components/
│   │   └── UserProfile.tsx
│   ├── hooks/
│   │   └── useUserData.ts
│   ├── services/
│   │   └── UserService.ts
│   ├── types/
│   │   └── User.ts
│   └── utils/
│       └── calculateAge.ts
└── common/
├── components/
│   └── NavbarButton.tsx
├── hooks/
│   └── useFetch.ts
├── types/
│   └── Common.ts
└── utils/
└── formatDate.ts
