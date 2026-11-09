# Proyecto de gestión de inventario

## Introducción

Proyecto frontend desarrollado progresivamente durante las primeras semanas del curso. La aplicación simula la gestión de inventario de un supermercado y evoluciona desde una navegación básica entre páginas hasta la administración de artículos, filtros, detalle de productos y carrito de compras.

El proyecto utiliza React, React Router, Tailwind CSS y un estado global para mantener sincronizada la información del inventario.

## Resumen del desarrollo

| Semana | Carpeta | Desarrollo principal | Tecnologías y conceptos |
|---|---|---|---|
| Semana 01 | `SEM01` | Sitio inicial de gestión de inventario con página principal, menú de navegación, información de tiendas y preguntas frecuentes. | React, JavaScript, CSS, React Router, Vite |
| Semana 02 | `SEM02` | Registro de nuevos artículos, tabla completa del inventario, estado global, datos iniciales desde JSON y persistencia local. | React Context API, hooks, `inventory.json`, `localStorage`, Tailwind CSS |
| Semana 03 | `SEM03` | Filtro por categoría, detalle de artículos, carrito de compras y actualización automática del stock al modificar cantidades. | `useReducer`, Context API, React Router, componentes reutilizables, Tailwind CSS |

## Evolución del proyecto

```text
SEM01
  └── Navegación y páginas informativas

SEM02
  └── Estado global, formulario y tabla de inventario

SEM03
  └── Filtros, detalle de artículos y carrito de compras
```

## Estructura de las entregas

- [SEM01](./SEM01): versión inicial del sitio.
- [SEM02](./SEM02): gestión de artículos e inventario global.
- [SEM03](./SEM03): filtros, detalle y carrito de compras.

Cada carpeta contiene su propio `README.md` con el enunciado, funcionalidades, estructura y comandos correspondientes a esa semana.

## Ejecución

Cada entrega se ejecuta de forma independiente. Para iniciar una versión:

```bash
cd SEM03
npm install
npm run dev
```

También se puede reemplazar `SEM03` por `SEM01` o `SEM02`.

## Validación

Dentro de cada entrega:

```bash
npm run build
npm run lint
```
