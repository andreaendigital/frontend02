# Semana 01 - Gestión de inventario

## Descripción de la tarea

Desarrollar un sitio web frontend para la gestión de inventario de un supermercado utilizando HTML, CSS, JavaScript y React.

La aplicación cuenta con una página principal para consultar el inventario y un menú inferior que permite navegar entre distintas pantallas dentro del mismo frontend. La navegación se implementa con **React Router**.

## Funcionalidades implementadas

- Página principal de inventario.
- Resumen de productos registrados, disponibles y con stock bajo.
- Búsqueda de productos por nombre o categoría.
- Página **Nuestras tiendas** con locales, direcciones y horarios.
- Página **Preguntas frecuentes** con respuestas desplegables.
- Navegación entre páginas sin recargar el frontend.
- Diseño responsive para computadores y dispositivos móviles.

## Tecnologías utilizadas

- React
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Vite

## Estructura principal

```text
src/
├── component/
│   ├── footer.jsx
│   └── navigation.jsx
├── pages/
│   ├── FaqPage.jsx
│   ├── InventoryPage.jsx
│   └── StoresPage.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Instalación y ejecución

1. Instalar las dependencias:

   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

3. Abrir en el navegador la dirección indicada por Vite, normalmente:

   ```text
   http://localhost:5173
   ```

## Validación

Para comprobar la compilación y el código, ejecutar:

```bash
npm run build
npm run lint
```
