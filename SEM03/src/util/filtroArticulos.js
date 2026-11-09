export const TODAS_LAS_CATEGORIAS = 'TODAS'

export function filtrarArticulosPorCategoria(articulos, categoriaSeleccionada) {
  if (categoriaSeleccionada === TODAS_LAS_CATEGORIAS) {
    return articulos
  }

  return articulos.filter((articulo) => articulo.categoria === categoriaSeleccionada)
}
