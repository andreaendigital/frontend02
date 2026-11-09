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

## Screenshoots / Evidencia

<img width="1184" height="902" alt="Captura de pantalla 2026-11-09 115744" src="https://github.com/user-attachments/assets/f7c7d810-3f7a-4abe-9c05-0561560df1c5" />

<img width="1184" height="907" alt="Captura de pantalla 2026-11-09 115750" src="https://github.com/user-attachments/assets/93aed1dc-9a05-48b8-9840-7bb16d58df84" />

<img width="1180" height="904" alt="Captura de pantalla 2026-11-09 115756" src="https://github.com/user-attachments/assets/4eaf40b1-90ee-4c3c-b7b4-c3db162d9b5e" />






