# ✈ TravelWorld – Agencia de Viajes

Aplicación web de planificación de viajes desarrollada con **React**, **React Router v6**, **Apollo Client** y **Vite**. Permite a los usuarios explorar destinos turísticos, consultar vuelos y hoteles disponibles, todo integrado con una API REST mock y una API GraphQL mock.

---

## 📋 Tabla de contenidos

- [Vista general](#-vista-general)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Cómo hacer funcionar el proyecto](#-cómo-hacer-funcionar-el-proyecto)
- [Puntos de evaluación](#-puntos-de-evaluación)
  - [1. Interfaz responsiva](#1--interfaz-responsiva)
  - [2. API REST mock](#2--api-rest-mock)
  - [3. API GraphQL mock](#3--api-graphql-mock)
  - [4. React Router](#4--react-router)
  - [5. Componentes reutilizables y estructura modular](#5--componentes-reutilizables-y-estructura-modular)
  - [6. Manejo de estado con useState y useEffect](#6--manejo-de-estado-con-usestate-y-useeffect)

---

## 🌍 Vista general

TravelWorld es una SPA (Single Page Application) que simula el flujo completo de una agencia de viajes digital:

1. El usuario llega a la **página de inicio** con hero, features y categorías por región.
2. Navega a la **lista de destinos** donde puede buscar por nombre/país y filtrar por continente.
3. Selecciona un destino y accede a su **página de detalle** con información de clima, moneda, idioma y actividades populares.
4. Desde las pestañas del detalle consulta los **vuelos disponibles** y los **hoteles disponibles** para ese destino.

---

## 🛠 Tecnologías utilizadas

| Tecnología | Versión | Rol |
|---|---|---|
| React | 19 | Librería de UI |
| React Router DOM | 6 | Navegación entre vistas |
| Apollo Client | 3 | Cliente GraphQL mock |
| GraphQL | 16 | Lenguaje de consultas |
| Vite | 5 | Bundler y servidor de desarrollo |
| CSS Modular | — | Estilos por componente |

---

## 📁 Estructura del proyecto

```
travel-agency/
├── public/
│   └── favicon.svg
├── src/
│   ├── api/
│   │   └── destinationsApi.js       # API REST mock (fetch con delay simulado)
│   ├── graphql/
│   │   ├── mockData.js              # Datos estáticos de vuelos y hoteles
│   │   ├── schema.js                # typeDefs GraphQL
│   │   ├── queries.js               # Queries GET_FLIGHTS y GET_HOTELS
│   │   └── apolloClient.js          # Apollo Client con MockLink
│   ├── components/
│   │   ├── Navbar.jsx               # Barra de navegación sticky
│   │   ├── LoadingSpinner.jsx       # Spinner de carga reutilizable
│   │   └── StarRating.jsx           # Componente de estrellas
│   ├── pages/
│   │   ├── Home.jsx                 # Landing page
│   │   ├── DestinationList.jsx      # Listado de destinos con filtros
│   │   ├── DestinationDetail.jsx    # Detalle + tabs + Outlet
│   │   ├── Flights.jsx              # Vuelos (consulta GraphQL)
│   │   ├── Hotels.jsx               # Hoteles (consulta GraphQL)
│   │   └── NotFound.jsx             # Página 404
│   ├── router/
│   │   └── AppRouter.jsx            # Configuración React Router v6
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.css
│   │   ├── Home.css
│   │   ├── DestinationList.css
│   │   ├── DestinationDetail.css
│   │   ├── Flights.css
│   │   ├── Hotels.css
│   │   ├── LoadingSpinner.css
│   │   └── NotFound.css
│   ├── App.jsx                      # Raíz: ApolloProvider + AppRouter
│   └── main.jsx                     # Entry point React
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Cómo hacer funcionar el proyecto

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

### Instalación

```bash
# 1. Clona o descarga el repositorio y entra a la carpeta
cd travel-agency

# 2. Instala las dependencias
npm install
```

### Servidor de desarrollo

```bash
npm run dev
```

Abre el navegador en `http://localhost:5173`.

### Build de producción

```bash
npm run build
```

Los archivos compilados quedan en la carpeta `dist/`.

### Vista previa del build

```bash
npm run preview
```

---

## 📌 Puntos de evaluación

### 1. 📱 Interfaz responsiva

La aplicación adapta su layout a cualquier tamaño de pantalla mediante:

- **CSS Grid con `auto-fill` y `minmax`** — los grids de destinos y hoteles redistribuyen sus columnas automáticamente según el ancho disponible.
- **`clamp()`** en tipografía — el título del hero escala entre `2.5rem` y `4.5rem` sin saltos abruptos.
- **`flex-wrap`** — filtros, amenidades y actividades se reorganizan en múltiples filas en pantallas pequeñas.
- **Media queries explícitas** en breakpoints de `480px`, `600px` y `768px` para Navbar, listado de destinos, detalle, hoteles y vuelos.

```css
/* Ejemplo: grid de destinos */
.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.75rem;
}

/* Colapsa a una columna en móvil */
@media (max-width: 600px) {
  .destinations-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### 2. 🌐 API REST mock

**Archivo:** `src/api/destinationsApi.js`

Simula un endpoint `GET /api/destinations` con datos estáticos y latencia de red artificial (200–600 ms) para reproducir el comportamiento real de una API.

Expone dos funciones:

| Función | Descripción |
|---|---|
| `fetchDestinations()` | Retorna el array completo de 6 destinos |
| `fetchDestinationById(id)` | Retorna un destino por su ID o lanza un error |

```js
// src/api/destinationsApi.js
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchDestinations() {
  await delay(Math.random() * 400 + 200);
  return [...DESTINATIONS_DATA];
}
```

Cada destino incluye: `id`, `name`, `country`, `continent`, `image`, `description`, `activities`, `rating`, `climate`, `currency` e `language`.

Los componentes `DestinationList` y `DestinationDetail` consumen esta API y muestran un spinner durante la carga y un mensaje de error si la petición falla.

---

### 3. 🔗 API GraphQL mock

**Archivos:** `src/graphql/`

Se implementó un cliente Apollo con un **`MockLink` personalizado** que intercepta todas las operaciones GraphQL en el cliente sin necesitar un servidor real. El link resuelve las queries localmente con datos estáticos y simula latencia de red.

**Schema definido:**

```graphql
type Flight {
  id: ID!
  airline: String!
  origin: String!
  destination: String!
  departure: String!
  arrival: String!
  duration: String!
  price: Float!
  seats: Int!
  class: String!
  stops: Int!
}

type Hotel {
  id: ID!
  name: String!
  stars: Int!
  pricePerNight: Float!
  image: String!
  amenities: [String!]!
  available: Boolean!
  address: String!
  checkIn: String!
  checkOut: String!
  reviews: Float!
}

type Query {
  flights(destinationId: ID!): [Flight!]!
  hotels(destinationId: ID!): [Hotel!]!
}
```

**Queries utilizadas en componentes:**

```js
// GET_FLIGHTS — usada en Flights.jsx
const { data, loading, error } = useQuery(GET_FLIGHTS, {
  variables: { destinationId },
});

// GET_HOTELS — usada en Hotels.jsx
const { data, loading, error } = useQuery(GET_HOTELS, {
  variables: { destinationId },
});
```

Cada destino tiene 3 vuelos y 3 hoteles asociados (18 vuelos y 18 hoteles en total).

---

### 4. 🧭 React Router

**Archivo:** `src/router/AppRouter.jsx`

Se configura con `createBrowserRouter` de React Router v6. Las rutas de vuelos y hoteles son **rutas hijas anidadas** dentro del detalle de destino, lo que permite compartir el layout sin recargar la página.

**Árbol de rutas:**

```
/                            → Home
/destinations                → DestinationList
/destinations/:id            → DestinationDetail
/destinations/:id/flights    → Flights       (ruta hija)
/destinations/:id/hotels     → Hotels        (ruta hija)
*                            → NotFound
```

**Mecanismos utilizados:**

| Hook / Componente | Uso |
|---|---|
| `createBrowserRouter` | Define el árbol de rutas |
| `RouterProvider` | Provee el router a la app |
| `<Outlet>` | Renderiza rutas hijas en `DestinationDetail` |
| `useOutletContext` | Pasa `destinationId` y `destinationName` a `Flights` y `Hotels` |
| `useParams` | Lee el parámetro `:id` de la URL |
| `useLocation` | Detecta la ruta activa para resaltar la pestaña correcta |
| `<Link>` | Navegación declarativa sin recarga |

---

### 5. 🧩 Componentes reutilizables y estructura modular

El código está dividido en capas con responsabilidades bien delimitadas:

| Capa | Carpeta | Responsabilidad |
|---|---|---|
| Acceso a datos REST | `src/api/` | Comunicación con la API REST mock |
| Acceso a datos GraphQL | `src/graphql/` | Schema, queries y cliente Apollo |
| Componentes base | `src/components/` | Piezas reutilizables sin lógica de negocio |
| Vistas | `src/pages/` | Una página por ruta, orquesta datos y layout |
| Rutas | `src/router/` | Configuración centralizada de React Router |
| Estilos | `src/styles/` | Un archivo CSS por componente o vista |

**Componentes reutilizables:**

- **`LoadingSpinner`** — acepta un `message` prop, usado en 4 vistas distintas.
- **`StarRating`** — acepta `stars` y `max`, usado en las tarjetas de hotel.
- **`Navbar`** — presente en todas las vistas a través del `RootLayout`.
- **`ClassBadge`** (interno en `Flights.jsx`) — renderiza el badge de clase de vuelo según su tipo.

---

### 6. ⚛️ Manejo de estado con `useState` y `useEffect`

**`DestinationList`** — gestiona 5 estados independientes:

```js
const [destinations, setDestinations] = useState([]);  // datos de la API
const [loading, setLoading]           = useState(true); // estado de carga
const [error, setError]               = useState(null); // error de red
const [search, setSearch]             = useState("");   // filtro por texto
const [filterContinent, setFilterContinent] = useState("Todos"); // filtro por continente
```

**`DestinationDetail`** — reinicia la carga automáticamente cuando el usuario navega a un destino distinto, gracias a la dependencia `[id]` en `useEffect`:

```js
useEffect(() => {
  setLoading(true);
  fetchDestinationById(id)
    .then((data) => {
      setDestination(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, [id]); // ← se re-ejecuta cada vez que cambia el destino
```

**`Flights` y `Hotels`** — delegan el estado de carga al hook `useQuery` de Apollo Client, que maneja internamente `loading`, `error` y `data`.

En todos los casos, la interfaz muestra:
- `<LoadingSpinner>` mientras los datos se están obteniendo.
- Un mensaje de error descriptivo si la petición falla.
- Los datos renderizados una vez disponibles.


###7 Evidencia

<img width="1230" height="819" alt="Captura de pantalla 2026-11-23 125620" src="https://github.com/user-attachments/assets/f4f0deba-3127-4905-ae17-5247896cf6a3" />

<img width="447" height="117" alt="Captura de pantalla 2026-11-23 125627" src="https://github.com/user-attachments/assets/9664eaeb-f874-4401-b7be-e79c11e4a362" />

<img width="1186" height="899" alt="Captura de pantalla 2026-11-23 125639" src="https://github.com/user-attachments/assets/96d16617-36d9-4ebb-8070-a27c658f4446" />

<img width="490" height="794" alt="Captura de pantalla 2026-11-23 125838" src="https://github.com/user-attachments/assets/57f2069f-63dd-4bae-87f4-94f45fa86236" />





