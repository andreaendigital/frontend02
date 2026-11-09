# Semana 02 - Gestión de inventario

## Enunciado de la actividad

Continuar el proyecto desarrollado durante la Semana 01 y ampliar el sitio web de gestión de inventario para un supermercado.

La aplicación debe incorporar un nuevo menú que permita acceder a dos páginas adicionales:

1. Una página para ingresar nuevos artículos al inventario.
2. Una página que muestre en una tabla todos los artículos registrados.

También se debe implementar un estado global para almacenar la lista de artículos disponibles. Cada artículo debe incluir, como mínimo, su nombre, marca y tipo de producto. El formulario debe permitir agregar nuevos artículos al estado global y la tabla debe reflejar la información actualizada.

Para el diseño se debe utilizar un framework CSS. En esta entrega se utiliza **Tailwind CSS**.

## Requisitos implementados

- Estado global mediante React Context API.
- Lista inicial de artículos almacenada en un archivo JSON.
- Artículos con nombre, marca, tipo, cantidad, unidad y estado.
- Formulario para registrar nuevos artículos.
- Validación de campos obligatorios.
- Actualización automática del inventario después de guardar un artículo.
- Tabla responsive con todos los artículos registrados.
- Menú superior con navegación mediante React Router.
- Página principal con resumen, búsqueda y contadores dinámicos.
- Persistencia de los artículos en `localStorage`.
- Diseño responsive completamente estilizado con Tailwind CSS.

## Rutas de la aplicación

| Ruta | Descripción |
|---|---|
| `/` | Página principal con resumen y búsqueda de inventario |
| `/tiendas` | Información de las tiendas |
| `/preguntas-frecuentes` | Preguntas frecuentes |
| `/articulos/nuevo` | Formulario para agregar un artículo |
| `/articulos` | Tabla completa del inventario |

## Fuente de datos y estado global

Los artículos iniciales se encuentran en:

```text
src/data/inventory.json
```

El archivo JSON es importado por `InventoryContext.jsx`. El contexto global entrega la lista y la función `addArticle()` a las páginas mediante el hook personalizado `useInventory()`.

El flujo de datos funciona de la siguiente manera:

1. `inventory.json` proporciona los artículos iniciales.
2. `InventoryProvider` carga esos datos utilizando `useState`.
3. `useInventory()` permite consultar los artículos desde cualquier página.
4. El formulario agrega nuevos artículos al estado global.
5. La tabla y la página principal se actualizan automáticamente.
6. `useEffect` guarda los cambios en `localStorage`.

## Estructura principal

```text
src/
├── component/
│   ├── footer.jsx
│   └── navigation.jsx
├── context/
│   └── InventoryContext.jsx
├── data/
│   └── inventory.json
├── pages/
│   ├── AddArticlePage.jsx
│   ├── ArticlesPage.jsx
│   ├── FaqPage.jsx
│   ├── InventoryPage.jsx
│   └── StoresPage.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Tecnologías utilizadas

- React.
- JavaScript.
- React Router DOM.
- React Context API.
- Hooks de React: `useState`, `useEffect`, `useMemo` y `useContext`.
- Tailwind CSS.
- Vite.
- JSON para los datos iniciales.
- `localStorage` para conservar los artículos agregados.

## Instalación y ejecución

Desde la carpeta `SEM02`, instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir la dirección indicada por Vite, normalmente:

```text
http://localhost:5173
```

## Validación

Para comprobar la compilación y revisar el código:

```bash
npm run build
npm run lint
```

## Evidencias / Screenshots

<img width="1171" height="887" alt="Captura de pantalla 2026-11-09 141411" src="https://github.com/user-attachments/assets/7cdd6f8a-560f-4f25-bd74-8e89ca2a1a1b" />


<img width="1175" height="573" alt="Captura de pantalla 2026-11-09 141430" src="https://github.com/user-attachments/assets/f43bbc56-a4ce-4771-84a2-418f0521333a" />


<img width="1179" height="648" alt="Captura de pantalla 2026-11-09 141439" src="https://github.com/user-attachments/assets/d31f5555-c807-49f4-ac33-e08141c55c77" />



















Estado de la última validación:

- Build de producción: aprobado.
- Lint del proyecto: aprobado sin errores ni advertencias.
