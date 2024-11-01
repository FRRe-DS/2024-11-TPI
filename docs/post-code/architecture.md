# Estructura del Proyecto

## Introducción

Esta guía presenta una propuesta de estructura de carpetas para el proyecto, organizada de manera profesional y siguiendo principios de separación de preocupaciones y escalabilidad, lo que facilita la mantenibilidad del código.

## Estructura Propuesta

### **src/**
La raíz del código fuente, donde todo se organiza en carpetas lógicas que representan responsabilidades clave del proyecto.

1. **src/assets/**
    - Contiene imágenes, fuentes, estilos globales, y cualquier otro recurso estático.

2. **src/components/**
    - Componentes reutilizables independientes y autónomos, como botones, modales, etc.
    - **Estructura sugerida:**
      ```
      src/components/Button/
      src/components/Modal/
      ```

3. **src/features/**
    - Organiza el código por funcionalidades (como “Voting”, “Events”, etc.). Cada funcionalidad tiene sus propios componentes, hooks, contextos, servicios y pruebas.
    - **Ejemplo:**
      ```
      src/features/Voting/
        ├── components/
        ├── hooks/
        ├── context/
        ├── VotingPage.tsx
        ├── VotingService.ts
      src/features/Events/
        ├── components/
        ├── hooks/
        ├── context/
        ├── EventsPage.tsx
        ├── EventService.ts
      ```

4. **src/layout/**
    - Diseños de páginas o secciones comunes, como la barra de navegación, pie de página, etc.
    - **Ejemplo:**
      ```
      src/layout/Navbar/
      src/layout/Footer/
      ```

5. **src/pages/**
    - Contiene las páginas principales del sitio, agrupando los archivos de ruta y layout.
    - **Ejemplo:**
      ```
      src/pages/Home.tsx
      src/pages/Login.tsx
      src/pages/Register.tsx
      ```

6. **src/context/**
    - Contextos compartidos globalmente, como `AuthContext`.
    - **Ejemplo:**
      ```
      src/context/AuthContext.tsx
      ```

7. **src/services/**
    - Funciones de servicio que manejan lógica compartida y peticiones de red. Podrías tener un archivo para cada entidad de negocio.
    - **Ejemplo:**
      ```
      src/services/AuthService.ts
      src/services/EventService.ts
      ```

8. **src/types/**
    - Define los tipos TypeScript globales o específicos de ciertas entidades del proyecto.
    - **Ejemplo:**
      ```
      src/types/User.d.ts
      src/types/Event.d.ts
      ```

9. **src/utils/**
    - Funciones utilitarias que pueden ser usadas en diferentes partes del proyecto, como formateadores de fecha o validadores.
    - **Ejemplo:**
      ```
      src/utils/formatDate.ts
      ```

10. **src/hooks/**
    - Hooks personalizados que no están directamente relacionados con una característica específica.
    - **Ejemplo:**
      ```
      src/hooks/useAuth.ts
      src/hooks/useEvents.ts
      ```

11. **src/router/**
    - Manejador de rutas del proyecto. Mantener las rutas en su propio módulo ayuda a gestionar la estructura de navegación fácilmente.
    - **Ejemplo:**
      ```
      src/router/index.tsx
      ```

12. **public/**
    - Archivos estáticos que necesitan ser accesibles públicamente, como `index.html` y `favicon.ico`.

### Ejemplo Final

