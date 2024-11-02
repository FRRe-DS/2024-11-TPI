# Cómo Funciona `EventManagement.tsx`

Este archivo define el componente `EventManagement`, que organiza la gestión de eventos en la aplicación. `EventManagement` utiliza un formulario (`EventForm`) para la creación o modificación de eventos y un encabezado (`Header`) para mostrar información contextual o navegación relacionada.

### Estructura del Componente `EventManagement`

1. **Importación de Dependencias**:
    - `React`: Importa la biblioteca principal de React, que permite la creación de componentes funcionales.
    - `EventForm`: El formulario que facilita la creación y edición de eventos.
    - `Header`: El encabezado que aparece sobre la lista de eventos actuales (aquí comentado para una posible implementación futura).

2. **Definición del Componente `EventManagement`**:
    - Este componente es un componente funcional de React (`React.FC`), proporcionando la interfaz para gestionar eventos.

3. **Estructura y Estilos**:
    - **Contenedor Principal (`div`)**: Con clases `max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg`, el contenedor centra el contenido, aplica sombras, bordes redondeados y un fondo blanco.
    - **Título (`h2`)**: Título principal del componente, estilizado con clases de Tailwind para tamaño (`text-2xl`) y peso de fuente (`font-bold`).
    - **Formulario (`EventForm`)**: Llamado a través del componente `EventForm`, que permite a los administradores crear o actualizar eventos.
    - **Sección de Eventos Actuales**:
        - **Subtítulo (`h3`)**: Un subtítulo que introduce la lista de eventos actuales.
        - **Encabezado (`Header`)**: Importa un encabezado para información adicional o navegación, que puede contextualizar la lista de eventos actuales.

### Componentes Utilizados

1. **`EventForm`**:
    - Encargado de gestionar la entrada de datos para eventos (campos como nombre, fecha, lugar, etc.).
    - Facilita la creación de nuevos eventos o la actualización de eventos existentes, en función de la lógica interna del formulario.

2. **`Header`**:
    - Puede mostrar información contextual o de navegación sobre los eventos. Su funcionalidad dependerá de la lógica implementada en `Header`.

### Funcionalidades de Seguridad

- **Contenedores y Estilos Aislados**: Las clases CSS aplicadas aseguran que el componente esté visualmente aislado, manteniendo la consistencia de diseño y facilitando la lectura.
- **Estructura Modular**: `EventManagement` mantiene el código modular, llamando a `EventForm` y `Header` para evitar repetición de código y permitir futuras expansiones.

### Resumen

El componente `EventManagement` centraliza la gestión de eventos, utilizando `EventForm` para entrada de datos y `Header` para mostrar información adicional. Gracias a sus estilos y estructura modular, el componente es fácil de mantener y extiende la funcionalidad de gestión de eventos en la aplicación.

# Cómo Funciona `Menu.tsx`

Este archivo define el componente `Menu`, que permite a los usuarios seleccionar entre diferentes secciones, como "Manage Events" y "Manage Sponsors". Este componente recibe `onSelect` y `selectedSection` como props para manejar la selección y el estado activo de las secciones, aplicando estilos dinámicos según la sección seleccionada.

### Estructura del Componente `Menu`

1. **Interfaz `MenuProps`**:
    - Define las propiedades esperadas en `Menu`:
        - **`onSelect`**: Una función que permite cambiar la sección seleccionada, recibiendo una de las opciones (`'events'` o `'sponsors'`).
        - **`selectedSection`**: Un valor de tipo `'events'` o `'sponsors'`, que indica qué sección está actualmente seleccionada.

2. **Definición del Componente `Menu`**:
    - Utiliza el tipo `React.FC` para tipar el componente como funcional, cumpliendo con `MenuProps`.

3. **Estructura y Estilos**:
    - **Contenedor de Navegación (`nav`)**: Define la barra de navegación donde se ubican los botones, aplicando clases de Tailwind CSS para espaciado (`space-x-4 p-4`), color de fondo (`bg-gray-200`), bordes redondeados (`rounded-md`), y sombra (`shadow-md`).
    - **Botones de Sección**:
        - **Botón "Manage Events"**: Asigna la función `onSelect` al hacer clic para cambiar la sección a `'events'`.
        - **Botón "Manage Sponsors"**: Similar al botón de "Manage Events", cambia la sección a `'sponsors'`.
        - Ambos botones utilizan clases de Tailwind para ajustar estilos según la selección actual. La clase `bg-blue-600` se aplica al botón seleccionado (`selectedSection`), mientras que los demás botones reciben un color más claro (`bg-blue-400`) y un efecto `hover:bg-blue-500` al pasar el cursor.

### Funcionalidades de Seguridad

- **Validación de Propiedades**: El componente recibe solo las secciones válidas (`'events'` y `'sponsors'`) gracias a la interfaz `MenuProps`, lo cual evita errores de tipo y facilita la lectura y mantenimiento del código.

### Resumen

`Menu.tsx` es un componente de navegación que permite alternar entre las secciones de gestión de eventos y patrocinadores. La interfaz `MenuProps` garantiza el correcto manejo de las propiedades, mientras que los estilos condicionales aplicados aseguran que el botón activo esté resaltado, mejorando la experiencia de usuario y manteniendo la interfaz intuitiva.

# Cómo Funciona `useAdmin.ts`

Este archivo define el hook personalizado `useAdmin`, que facilita la gestión de eventos y patrocinadores en el sistema. Este hook maneja el estado de la carga, error y actualiza dinámicamente la lista de eventos y patrocinadores mediante operaciones de lectura, creación, actualización y eliminación (CRUD) a través de la API.

### Estructura del Hook `useAdmin`

1. **Interfaces `Event` y `Sponsor`**:
    - **`Event`**: Define las propiedades principales de un evento, como `id`, `name`, y `date`.
    - **`Sponsor`**: Define las propiedades principales de un patrocinador, como `id` y `name`.
    - Estas interfaces garantizan el tipo de datos correcto al manejar eventos y patrocinadores.

2. **Estados Locales**:
    - **`events` y `sponsors`**: Arrays que almacenan los eventos y patrocinadores obtenidos de la API.
    - **`loadingEvents` y `loadingSponsors`**: Booleanos que indican si los datos están en proceso de carga.
    - **`error`**: Almacena mensajes de error en caso de que ocurra alguna falla en las operaciones de la API.

3. **Efecto `useEffect` para Cargar Datos Iniciales**:
    - Al montar el componente, se ejecuta `useEffect`, que llama a dos funciones asincrónicas para cargar los eventos y patrocinadores:
        - **`fetchEvents`**: Realiza una solicitud `GET` a `/api/events`, actualizando el estado `events` con los datos obtenidos.
        - **`fetchSponsors`**: Realiza una solicitud `GET` a `/api/sponsors`, actualizando el estado `sponsors` con los datos obtenidos.
    - Si ocurre algún error, el estado `error` se actualiza con un mensaje correspondiente.

4. **Funciones CRUD para Eventos**:
    - **`addEvent`**: Agrega un nuevo evento mediante una solicitud `POST` a `/api/events`. Si es exitosa, actualiza `events` añadiendo el nuevo evento.
    - **`updateEvent`**: Actualiza un evento existente mediante una solicitud `PUT` a `/api/events/${eventId}`. Si es exitosa, actualiza el evento correspondiente en el estado `events`.
    - **`deleteEvent`**: Elimina un evento mediante una solicitud `DELETE` a `/api/events/${eventId}`, eliminando el evento del estado `events` si la solicitud tiene éxito.
    - **Patrocinadores**: Aunque el código para patrocinadores no está implementado, se puede agregar fácilmente siguiendo la misma estructura.

### Funcionalidades de Seguridad en `useAdmin.ts`

- **Manejo de Errores**: Cada función CRUD captura los errores con bloques `try-catch`, almacenando los mensajes de error en el estado `error`.
- **Ejecución Condicional**: `useEffect` se ejecuta una sola vez al montar el componente, evitando sobrecarga en la API con múltiples solicitudes.

### Resumen

El hook `useAdmin.ts` proporciona una interfaz centralizada para gestionar eventos y patrocinadores en la aplicación. Facilita la obtención, adición, actualización y eliminación de datos, mientras maneja los estados de carga y errores. Al modularizar esta lógica en un hook personalizado, se simplifica su reutilización en diferentes partes de la aplicación.

# Cómo Funciona `AdminPage.tsx`

El componente `AdminPage` es la página principal de administración donde los usuarios pueden gestionar eventos. Utiliza varios componentes internos, incluyendo `Navbar`, `Footer`, `Menu`, `Header`, y `EventManagement`, y permite cambiar entre secciones mediante un menú de opciones.

### Estructura del Componente `AdminPage`

1. **Importaciones de Componentes**:
   - **`Navbar`** y **`Footer`**: Importados desde la carpeta `layout` para proporcionar un encabezado y pie de página.
   - **`Menu`**: Menú de navegación de administración que permite alternar entre opciones de administración (eventos y patrocinadores).
   - **`Header`** y **`EventManagement`**: Se muestran en función de la opción seleccionada en el menú.

2. **Estado `selectedOption`**:
   - **`selectedOption`**: Utiliza `useState` para almacenar la sección seleccionada en el menú (`'events'` o `'sponsors'`). Esto determina cuál de los componentes de administración (eventos o patrocinadores) se muestra en pantalla.

3. **Autenticación con `useAuth`**:
   - Se usa el hook `useAuth` para obtener la función `fetchUser`, que se encarga de verificar o cargar datos del usuario autenticado.
   - **`useEffect`**: Llama a `fetchUser` al montar el componente para garantizar que los datos del usuario estén actualizados. Esto también ayuda a gestionar la autenticación.

4. **Renderizado Condicional**:
   - **`Menu`**: Proporciona la capacidad de alternar entre secciones y actualiza el estado `selectedOption` según la selección del usuario.
   - **`EventManagement` y `Header`**: Se renderizan condicionalmente según el valor de `selectedOption`. Cuando `selectedOption` es `'events'`, se muestra `EventManagement`; de lo contrario, se muestra `Header`.

### Funcionalidades de Seguridad en `AdminPage`

- **Verificación del Usuario**: `fetchUser` se llama al montar el componente, garantizando que el usuario esté autenticado antes de que acceda a opciones administrativas.

### Resumen

El componente `AdminPage` organiza y muestra la interfaz de administración de manera sencilla. Con un menú de opciones y la función de autenticación, permite al usuario cambiar entre las secciones de administración de eventos y patrocinadores. La estructura modular y el uso de `useState` y `useEffect` hacen que el código sea fácil de mantener y extender.
