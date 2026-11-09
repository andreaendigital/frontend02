import { useEffect, useMemo, useReducer } from 'react'
import inventoryData from '../data/inventory.json'
import { InventoryContext } from './InventoryContext'
import { reducer, TIPOS_ACCION } from './InventoryReducer'

const initialState = { articles: inventoryData, cart: [] }

function loadInitialState() {
  const savedArticles = localStorage.getItem('sem03-inventory')
  const savedCart = localStorage.getItem('sem03-cart')
  const articles = savedArticles ? JSON.parse(savedArticles) : initialState.articles
  return {
    articles: articles.map((article) => ({ ...article, categoria: article.categoria || article.type })),
    cart: savedCart ? JSON.parse(savedCart) : initialState.cart,
  }
}

export function InventoryProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitialState)

  useEffect(() => {
    localStorage.setItem('sem03-inventory', JSON.stringify(state.articles))
    localStorage.setItem('sem03-cart', JSON.stringify(state.cart))
  }, [state])

  const addArticle = (article) => {
    const stock = Number(article.stock)
    dispatch({ type: TIPOS_ACCION.AGREGAR_ARTICULO, payload: { ...article, categoria: article.categoria || article.type, id: Date.now(), stock, unit: 'unidades', status: stock === 0 ? 'Agotado' : stock < 20 ? 'Stock bajo' : 'Disponible', icon: '📦' } })
  }

  const value = useMemo(() => ({
    articles: state.articles,
    cart: state.cart,
    addArticle,
    addToCart: (articleId) => {
      const article = state.articles.find((item) => item.id === articleId)
      if (!article || article.stock < 1) return false
      dispatch({ type: TIPOS_ACCION.AGREGAR_AL_CARRITO, payload: articleId })
      return true
    },
    increaseCartItem: (articleId) => dispatch({ type: TIPOS_ACCION.AUMENTAR_CARRITO, payload: articleId }),
    decreaseCartItem: (articleId) => dispatch({ type: TIPOS_ACCION.DISMINUIR_CARRITO, payload: articleId }),
  }), [state])

  return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>
}
