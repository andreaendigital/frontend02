import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import inventoryData from '../data/inventory.json'

const InventoryContext = createContext(null)

export function InventoryProvider({ children }) {
  const [articles, setArticles] = useState(() => {
    const savedArticles = localStorage.getItem('sem02-inventory')
    return savedArticles ? JSON.parse(savedArticles) : inventoryData
  })

  useEffect(() => {
    localStorage.setItem('sem02-inventory', JSON.stringify(articles))
  }, [articles])

  const addArticle = (article) => {
    const stock = Number(article.stock)
    setArticles((currentArticles) => [
      ...currentArticles,
      {
        ...article,
        id: Date.now(),
        stock,
        unit: 'unidades',
        status: stock === 0 ? 'Agotado' : stock < 20 ? 'Stock bajo' : 'Disponible',
        icon: '📦',
      },
    ])
  }

  const value = useMemo(() => ({ articles, addArticle }), [articles])

  return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>
}

export function useInventory() {
  const context = useContext(InventoryContext)
  if (!context) throw new Error('useInventory debe utilizarse dentro de InventoryProvider')
  return context
}
