# Precondiciones

## Requisitos Iniciales

1. **JetBrains WebStorm:** Crea una cuenta en JetBrains con el correo estudiantil para acceder a programas premium.
2. **Node.js:** Descárgalo desde [nodejs.org](https://nodejs.org/en).
3. **MySQL Workbench:** Descárgalo e instálalo.
4. **Git:** Descárgalo desde [git-scm.com](https://git-scm.com).

## Configuración de MySQL Workbench

1. Inicia sesión en tu Local instance con tu usuario root.
2. Ejecuta los siguientes comandos en la terminal de MySQL:
   ```sql
   CREATE USER 'bienal'@'%' IDENTIFIED BY 'bienal';
   GRANT ALL PRIVILEGES ON *.* TO 'bienal'@'%' WITH GRANT OPTION;

3. Regresa a la pantalla principal y crea una nueva conexión:

- Connection Name: Bienal
- Username: bienal
- Password: bienal
- Haz clic en OK.

Una vez creada la conexión, ingresa y ejecuta:
```sql
CREATE DATABASE bienal;
USE bienal;
