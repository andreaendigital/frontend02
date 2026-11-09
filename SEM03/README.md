# Semana 03 - Filtro, detalle y carrito de compras

## Enunciado de esta semana

Continuar la evolución del sitio web de gestión de inventario creado en las semanas anteriores, manteniendo React, React Router y Tailwind CSS.

Esta semana se solicita:

1. Crear un filtro que permita mostrar los artículos según la categoría seleccionada.
2. Mantener la lista original del inventario sin modificarla al aplicar el filtro.
3. Mostrar el detalle de un artículo cuando el usuario lo seleccione.
4. Permitir agregar artículos al carrito desde su pantalla de detalle.
5. Descontar del inventario la cantidad agregada al carrito.
6. Crear una pantalla de carrito de compras.
7. Permitir aumentar o disminuir la cantidad de artículos desde el carrito.
8. Actualizar el inventario general cada vez que cambie la cantidad del carrito.
9. Continuar utilizando Tailwind CSS como framework de estilos.

## Requisitos solicitados y solución implementada

### 1. Filtro por categoría

El filtro se encuentra separado en:

```text
src/util/filtroArticulos.js
```

La función `filtrarArticulosPorCategoria(articulos, categoriaSeleccionada)` recibe la lista original y la categoría seleccionada.

- Si la categoría es `TODAS`, devuelve todos los artículos.
- Si se selecciona una categoría específica, devuelve únicamente los artículos correspondientes.
- La lista original no se modifica.

El componente que utiliza esta función es:

```text
src/components/ListadoArticulos.jsx
```

El componente inicia mostrando todas las categorías y actualiza el filtro mediante un evento `onChange`.

### 2. Detalle de artículos

Al seleccionar una fila de la lista, React Router navega a:

```text
/articulos/:id
```

La pantalla está implementada en:

```text
src/pages/ArticleDetailPage.jsx
```

En ella se muestran:

- Nombre del artículo.
- Marca.
- Categoría.
- Stock disponible.
- Botón para agregar al carrito.

### 3. Carrito de compras

La pantalla del carrito se encuentra en:

```text
src/pages/CartPage.jsx
```

Ruta:

```text
/carrito
```

Desde esta pantalla el usuario puede:

- Ver los artículos seleccionados.
- Aumentar la cantidad con el botón `+`.
- Disminuir la cantidad con el botón `−`.
- Ver la cantidad total agregada.

### 4. Actualización del inventario

El inventario y el carrito comparten un estado global. Cuando se agrega un artículo:

- Se descuenta una unidad del inventario.
- Se agrega una unidad al carrito.

Cuando se aumenta la cantidad:

- Se descuenta otra unidad del inventario.
- Se incrementa la cantidad del carrito.

Cuando se disminuye la cantidad:

- Se devuelve una unidad al inventario.
- Se reduce la cantidad del carrito.

## Estado global solicitado

El estado global está separado en los siguientes archivos:

```text
src/context/
├── InventoryContext.jsx
├── inventoryProvider.jsx
└── InventoryReducer.js
```

### Estado inicial

El estado inicial contiene:

```js
{
  articles: listaInicialDeArticulos,
  cart: []
}
```

La lista inicial se obtiene desde:

```text
src/data/inventory.json
```

### Acciones del reducer

`InventoryReducer.js` define las acciones:

- `AGREGAR_ARTICULO`
- `AGREGAR_AL_CARRITO`
- `AUMENTAR_CARRITO`
- `DISMINUIR_CARRITO`

El `InventoryProvider` expone el estado y las acciones para que puedan ser utilizadas desde todas las páginas mediante `useInventory()`.

## Rutas principales

| Ruta | Funcionalidad |
|---|---|
| `/articulos` | Lista y filtro por categoría |
| `/articulos/:id` | Detalle del artículo |
| `/carrito` | Carrito de compras |
| `/articulos/nuevo` | Formulario para registrar artículos |

También se mantienen las páginas de las semanas anteriores:

- `/`
- `/tiendas`
- `/preguntas-frecuentes`

## Estructura principal

```text
src/
├── components/
│   └── ListadoArticulos.jsx
├── context/
│   ├── InventoryContext.jsx
│   ├── InventoryReducer.js
│   └── inventoryProvider.jsx
├── data/
│   └── inventory.json
├── pages/
│   ├── AddArticlePage.jsx
│   ├── ArticleDetailPage.jsx
│   ├── ArticlesPage.jsx
│   ├── CartPage.jsx
│   ├── FaqPage.jsx
│   ├── InventoryPage.jsx
│   └── StoresPage.jsx
├── util/
│   └── filtroArticulos.js
├── App.jsx
├── index.css
└── main.jsx
```

## Tecnologías utilizadas

- React.
- JavaScript.
- React Router DOM.
- React Context API.
- `useState`.
- `useReducer`.
- `useEffect`.
- `useMemo`.
- `useContext`.
- `useParams`.
- Tailwind CSS.
- Vite.
- JSON.
- `localStorage`.

## Instalación y ejecución

Desde la carpeta `SEM03`:

```bash
npm install
npm run dev
```

Abrir la dirección indicada por Vite, normalmente:

```text
http://localhost:5173
```

## Validación

```bash
npm run build
npm run lint
```

La aplicación fue validada con build de producción y lint sin errores ni advertencias.
