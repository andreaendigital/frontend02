export const TIPOS_ACCION = {
  AGREGAR_ARTICULO: 'AGREGAR_ARTICULO',
  AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
  AUMENTAR_CARRITO: 'AUMENTAR_CARRITO',
  DISMINUIR_CARRITO: 'DISMINUIR_CARRITO',
}

function actualizarArticulo(articulo, cambioStock) {
  const stock = Math.max(0, articulo.stock + cambioStock)
  return { ...articulo, stock, status: stock === 0 ? 'Agotado' : stock < 20 ? 'Stock bajo' : 'Disponible' }
}

export function reducer(estado, accion) {
  switch (accion.type) {
    case TIPOS_ACCION.AGREGAR_ARTICULO:
      return { ...estado, articles: [...estado.articles, accion.payload] }
    case TIPOS_ACCION.AGREGAR_AL_CARRITO: {
      const articulo = estado.articles.find((item) => item.id === accion.payload)
      if (!articulo || articulo.stock < 1) return estado
      const itemExistente = estado.cart.find((item) => item.id === articulo.id)
      return {
        articles: estado.articles.map((item) => item.id === articulo.id ? actualizarArticulo(item, -1) : item),
        cart: itemExistente ? estado.cart.map((item) => item.id === articulo.id ? { ...item, quantity: item.quantity + 1 } : item) : [...estado.cart, { ...articulo, quantity: 1 }],
      }
    }
    case TIPOS_ACCION.AUMENTAR_CARRITO:
      return reducer(estado, { type: TIPOS_ACCION.AGREGAR_AL_CARRITO, payload: accion.payload })
    case TIPOS_ACCION.DISMINUIR_CARRITO: {
      const item = estado.cart.find((cartItem) => cartItem.id === accion.payload)
      if (!item) return estado
      return {
        articles: estado.articles.map((article) => article.id === item.id ? actualizarArticulo(article, 1) : article),
        cart: estado.cart.flatMap((cartItem) => cartItem.id !== item.id ? [cartItem] : cartItem.quantity > 1 ? [{ ...cartItem, quantity: cartItem.quantity - 1 }] : []),
      }
    }
    default:
      return estado
  }
}
