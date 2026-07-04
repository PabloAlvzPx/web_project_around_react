# Proyecto: Around the U.S. (React)

Este proyecto es una aplicación web dinámica desarrollada con React y Vite, que permite a los usuarios gestionar un perfil de usuario y visualizar una galería de tarjetas fotográficas. Este trabajo representa la migración de una página web estática a una arquitectura basada en componentes, utilizando el paradigma declarativo de React.

## Tecnologías utilizadas

- React: Biblioteca principal para la creación de la interfaz de usuario basada en componentes.
- Vite: Herramienta de compilación para un desarrollo rápido y eficiente.
- JavaScript (ES6+): Lógica dinámica y manejo de estados.
- CSS (BEM): Estilos organizados bajo la metodología Block Element Modifier.

## Funcionalidades principales

- Componentización: Estructura modular dividida en componentes reutilizables (Header, Main, Footer, Card, Popup, ImagePopup, etc.).
- Manejo de Estados: Uso de useState para controlar la apertura/cierre de ventanas emergentes y la visualización de imágenes.
- Renderizado Dinámico: Uso del método .map() para renderizar tarjetas de forma eficiente a partir de datos ficticios.
- Interactividad: Los usuarios pueden abrir popups para editar su perfil, añadir nuevas tarjetas o ampliar imágenes, con capacidad de cierre mediante el botón "X", la tecla "Esc" o haciendo clic fuera del contenedor.

## Instrucciones de instalación y ejecución

1. Clonar el repositorio:
   git clone <tu-enlace-de-repositorio>

2. Instalar dependencias:
   npm install

3. Ejecutar en modo desarrollo:
   npm run dev
   _El proyecto se abrirá automáticamente en http://localhost:3000 ._

## Estructura del proyecto

- src/: Contiene todo el código fuente.
  - components/: Componentes funcionales de React.
  - blocks/: Archivos CSS organizados por bloques (BEM).
  - images/: Recursos gráficos del proyecto.
  - main.jsx: Punto de entrada de la aplicación.
  - index.css: Estilos globales.

Desarrollado por Pablo Alvarez como parte del bootcamp de Desarrollo Web de TripleTen.
