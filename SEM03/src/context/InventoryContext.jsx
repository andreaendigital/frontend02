import { createContext, useContext } from 'react'

export const InventoryContext = createContext(null)

export function useInventory() {
  const context = useContext(InventoryContext)
  if (!context) throw new Error('useInventory debe utilizarse dentro de InventoryProvider')
  return context
}
