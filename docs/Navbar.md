# Documentación de Componentes del Navbar

Este archivo contiene la descripción detallada de cada componente del sistema de navegación, explicando su función, cómo interactúa con otros componentes y cómo está diseñado.

---

## **1. HomeButton.tsx**
**¿Qué hace?**
- Es un componente reutilizable que muestra el logo y, al hacer clic en él, redirige al usuario a la página principal (home).

**Cómo funciona:**
- Usa `useNavigate` de `react-router-dom` para manejar la redirección.
- El contenedor tiene `cursor-pointer` para que el usuario sepa que es clickeable.

**Cómo interactúa:**
- Es usado dentro de otros componentes (como `NavbarToggleButton`) para mostrar el logo y proporcionar navegación.

---

## **2. NavbarToggleButton.tsx**
**¿Qué hace?**
- Muestra el botón para alternar el estado del navbar (expandido/colapsado).
- Incluye el componente `HomeButton` para mostrar el logo y redirigir al home.

**Cómo funciona:**
- Usa un `boolean` (`isExpanded`) para cambiar entre dos estados visuales:
    - `>`: Cuando el navbar está colapsado.
    - `<`: Cuando el navbar está expandido.

**Cómo interactúa:**
- Se usa en el componente `Navbar`.
- Recibe `isExpanded` y `toggleNavbar` como props desde `Navbar` para controlar su estado.

---

## **3. NavbarLinks.tsx**
**¿Qué hace?**
- Renderiza la lista de enlaces de navegación.
- Puede mostrar los enlaces en **fila** (navbar horizontal) o **columna** (sidebar).

**Cómo funciona:**
- Recibe `links` (array de objetos `INavbarLink`).
- Usa la prop `isVertical` para decidir si muestra los enlaces horizontalmente (`flex`) o verticalmente (`flex-col`).

**Cómo interactúa:**
- Es utilizado tanto por `Navbar` (para el navbar horizontal) como por `Sidebar` (para el sidebar vertical).

---

## **4. Sidebar.tsx**
**¿Qué hace?**
- Es un componente para mostrar un **sidebar** en dispositivos móviles.
- Usa `NavbarLinks` con disposición vertical para renderizar los enlaces.

**Cómo funciona:**
- Usa un booleano `isExpanded` para mostrar u ocultar el sidebar (`translate-x-0` o `-translate-x-full`).
- Renderiza un botón para cerrar el sidebar.

**Cómo interactúa:**
- Se usa dentro de `Navbar` y comparte los mismos enlaces (`links`) que el navbar horizontal.

---

## **5. Navbar.tsx**
**¿Qué hace?**
- Es el componente principal que contiene tanto el **navbar horizontal** (para pantallas grandes) como el **sidebar** (para móviles).

**Cómo funciona:**
- Usa `useState` para manejar el estado `isExpanded`.
- Detecta el tamaño de pantalla mediante clases de Tailwind (`hidden md:block`, `md:hidden`) para mostrar el navbar o el sidebar.
- Contiene:
    - `NavbarToggleButton`: Para alternar el estado expandido.
    - `Sidebar`: Para la navegación en móviles.
    - `NavbarLinks`: Para mostrar los enlaces en el navbar horizontal.

**Cómo interactúa:**
- Es el punto central de navegación:
    - Renderiza `NavbarLinks` para dispositivos grandes.
    - Renderiza `Sidebar` para móviles.
    - Utiliza `NavbarToggleButton` para alternar entre estados.

---

## **6. INavigationLink.ts**
**¿Qué hace?**
- Define la interfaz para los enlaces de navegación.
- Permite que los enlaces sean internos (`id`) o externos (`href`).

**Cómo funciona:**
- Proporciona un contrato para los objetos de tipo `INavbarLink`:
    - `id`: Navegación interna (anclas).
    - `href`: Navegación externa (URLs).
    - `label`: Texto del enlace.
    - `icon`: Ícono opcional.

**Cómo interactúa:**
- Es utilizada por:
    - `NavbarLinks`: Para renderizar los enlaces.
    - `Sidebar`: Para definir los enlaces del sidebar.
    - `Navbar`: Para definir y pasar los enlaces.

---

## **7. DefaultLayout.tsx**
**¿Qué hace?**
- Define la estructura general de la página, incluyendo:
    - `Navbar`.
    - Contenido principal (`children`).
    - `Footer`.

**Cómo funciona:**
- Recibe los enlaces desde dentro de este mismo archivo y los pasa al componente `Navbar`.
- Renderiza el contenido principal (`children`) entre el navbar y el footer.

**Cómo interactúa:**
- Proporciona un contenedor estructurado para todas las páginas de la aplicación.

---

## **8. NavbarStyles.ts**
**¿Qué hace?**
- Centraliza las clases de estilo usadas por los componentes relacionados con el navbar.

**Cómo funciona:**
- Define las clases comunes como:
    - `container`: Estilo del contenedor principal del navbar.
    - `nav`: Estilo para el navbar horizontal.
    - `sidebar`: Estilo para el sidebar.
    - `button`: Estilo para los botones.

**Cómo interactúa:**
- Es importado por componentes como `Navbar`, `Sidebar` y `NavbarToggleButton` para garantizar consistencia en el diseño.

---

## **Interacción General**

```mermaid
graph TD
    App --> DefaultLayout
    DefaultLayout --> Navbar
    DefaultLayout --> Footer

    Navbar --> NavbarToggleButton
    Navbar --> NavbarLinks
    Navbar --> Sidebar

    Sidebar --> NavbarLinks

    HomeButton --> NavbarToggleButton
    NavbarLinks --> INavigationLink

    NavbarStyles --> Navbar
    NavbarStyles --> Sidebar
    NavbarStyles --> NavbarToggleButton