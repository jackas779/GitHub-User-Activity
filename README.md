# GitHub Activity CLI

## Descripción del Proyecto

GitHub Activity CLI es una herramienta sencilla de línea de comandos construida con Node.js que permite obtener y mostrar la actividad reciente de un usuario de GitHub directamente en la terminal. Al ejecutar el comando `github-activity <username>`, la aplicación realiza una solicitud a la API de GitHub para obtener los eventos recientes de un usuario y muestra los detalles en un formato legible. Esta aplicación no depende de librerías externas y se basa únicamente en módulos nativos de Node.js para la obtención y manejo de datos.

Este proyecto es ideal para practicar habilidades en la construcción de interfaces de línea de comandos (CLI), manejo de APIs, y procesamiento de datos JSON.

Proyecto realizo con los requisitos propuestos de la pagina de roadmap para mas detalles de los requisitos ir a la siguiente url  [Roadmap](https://roadmap.sh/projects/github-user-activity)

## Características

* **Obtención de Actividad:**
    * Consulta los eventos recientes de un usuario de GitHub.
    * Muestra las acciones recientes como push de commits, creación de issues, estrellas en repositorios, etc.
* **Despliegue en la Terminal:**
    * Los eventos se presentan de manera clara y estructurada en la terminal.
* **Manejo de Errores:**
    * Si el nombre de usuario no es válido o la API de GitHub falla, se muestra un mensaje de error informativo.
* **Sin Dependencias Externas:**
    * El proyecto se ha desarrollado utilizando exclusivamente los módulos nativos de Node.js, sin la necesidad de librerías externas.

## Requisitos

Para ejecutar esta aplicación, solo necesitas tener instalado:

* **Node.js**: Se recomienda la versión 14 o superior, que incluye `npm` (el gestor de paquetes de Node.js).

## Instalación

Sigue estos pasos para instalar y ejecutar GitHub Activity CLI en tu sistema.

### 1. Clonar el Repositorio

Primero, clona el repositorio del proyecto:

1.  **Clonar el Repositorio:**
    ```bash
    git clone git clone https://github.com/jackas779/GitHub-User-Activity.git
    cd GitHub-User-Activity
    ```

2.  **Instalar Globalmente:**
    Desde el directorio raíz del proyecto clonado, ejecuta el siguiente comando para instalar la CLI globalmente usando npm:
    ```bash
    npm install -g .
    ```
    El punto (`.`) al final indica a npm que instale el paquete ubicado en el directorio actual de forma global.

3.  **Verificar Instalación:**
    Una vez completada la instalación, deberías poder ejecutar el comando `github-activity` desde cualquier ventana de terminal nueva. 
    deberia aparecerte una lista de la actividad reciente

    ```
      El usuario jackas779 ha creado 2 rama(s) o etiqueta(s) en el repositorio jackas779/GitHub-User-Activity.
      El usuario jackas779 ha realizado un push de 15 commit(s) al repositorio jackas779/Task-Tracket.
      El usuario jackas779 ha creado 2 rama(s) o etiqueta(s) en el repositorio jackas779/Task-Tracket.
      El usuario jackas779 ha realizado un push de 2 commit(s) al repositorio jackas779/tetris.
      El usuario jackas779 ha creado 2 rama(s) o etiqueta(s) en el repositorio jackas779/tetris.
    ```

## Desinstalación Global

Para eliminar GitHub-User-Activity CLI de tu instalación global de npm, usa el siguiente comando:

```bash
npm uninstall -g github-activity #[O el nombre exacto de tu paquete en package.json]
```

## Nota 

## Ejemplo de uso sin instalar el proyecto

Puedes ejecutar el script de la CLI utilizando `node` y pasando el nombre de usuario de GitHub como argumento. Existen dos formas de ejecutar la CLI:

### Opción 1: Usando `node index.js`

```bash
node index.js <username>
