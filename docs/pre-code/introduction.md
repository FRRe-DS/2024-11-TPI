# Introducción

El proyecto Bienal del Chaco 2024 es un sistema destinado a gestionar el evento Bienal Internacional de Escultura del Chaco. Este proyecto tiene tanto un frontend como un backend, y utiliza una serie de herramientas y tecnologías modernas.
## Tecnologías Utilizadas

- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js, Express, MySQL
- **Gestión de Dependencias:** Yarn, Lerna
- **Control de Versiones:** Git

Para más detalles, consulta [Arquitectura del Proyecto](../post-code/architecture.md) .
Para más detalles sobre el TPI, consulta [Trabajo Práctico Final - Año 2024](tpi.md) .

# Explicación y Relación con SOLID:
Responsabilidad Única (Single Responsibility Principle):

Cada componente debe tener una responsabilidad clara. Ejemplo: El componente Navbar solo debe manejar la barra de navegación, no la lógica de autenticación.
Los servicios en la carpeta services/ encapsulan la lógica de negocio y separación de API calls, manteniendo los componentes simples.
Abierto/Cerrado (Open/Closed Principle):

Al usar hooks personalizados (hooks/) y servicios (services/), puedes extender la funcionalidad sin modificar el código existente.
Sustitución de Liskov (Liskov Substitution Principle):

Asegúrate de que los componentes puedan ser reemplazados por otros sin romper la funcionalidad. Ejemplo: Button en ui/ debería ser reemplazable por otro botón sin cambiar cómo funcionan los componentes que lo usan.
Segregación de Interfaces (Interface Segregation Principle):

Mantén las interfaces pequeñas y enfocadas. Ejemplo: Si tienes un componente Form, no debería manejar también la lógica de validación, delega eso a un hook o servicio.
Inversión de Dependencias (Dependency Inversion Principle):

Los componentes de alto nivel (páginas) no deben depender de componentes de bajo nivel directamente. Utiliza servicios e inyección de dependencias donde sea necesario.
