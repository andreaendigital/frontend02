import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInventory } from '../context/InventoryContext'
import { filtrarArticulosPorCategoria, TODAS_LAS_CATEGORIAS } from '../util/filtroArticulos'

function ListadoArticulos() {
  const { articles } = useInventory()
  const navigate = useNavigate()
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(TODAS_LAS_CATEGORIAS)
  const categorias = [...new Set(articles.map((articulo) => articulo.categoria))]
  const articulosVisibles = filtrarArticulosPorCategoria(articles, categoriaSeleccionada)

  const handleCategoriaChange = (event) => setCategoriaSeleccionada(event.target.value)

  return (
    <>
      <div className="mt-6 flex items-center gap-3">
        <label className="text-sm font-medium text-slate-700" htmlFor="category-filter">Filtrar por categoría</label>
        <select className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500" id="category-filter" value={categoriaSeleccionada} onChange={handleCategoriaChange}>
          <option value={TODAS_LAS_CATEGORIAS}>Todas las categorías</option>
          {categorias.map((categoria) => <option key={categoria} value={categoria}>{categoria}</option>)}
        </select>
      </div>
      <div className="mt-4 overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="w-full min-w-[650px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-4 py-3">Artículo</th><th className="px-4 py-3">Marca</th><th className="px-4 py-3">Categoría</th><th className="px-4 py-3">Stock</th><th className="px-4 py-3">Estado</th></tr></thead>
          <tbody>{articulosVisibles.map((articulo) => <tr className="cursor-pointer border-t border-slate-100 hover:bg-slate-50" key={articulo.id} onClick={() => navigate(`/articulos/${articulo.id}`)}><td className="px-4 py-3"><span className="mr-2">{articulo.icon}</span><strong>{articulo.name}</strong></td><td className="px-4 py-3">{articulo.brand}</td><td className="px-4 py-3">{articulo.categoria}</td><td className="px-4 py-3">{articulo.stock} {articulo.unit}</td><td className="px-4 py-3"><span className={`rounded-full px-2 py-1 text-xs font-medium ${articulo.status === 'Disponible' ? 'bg-green-100 text-green-700' : articulo.status === 'Stock bajo' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>{articulo.status}</span></td></tr>)}</tbody>
        </table>
      </div>
      {articulosVisibles.length === 0 && <p className="mt-4 text-sm text-slate-500">No hay artículos en esta categoría.</p>}
    </>
  )
}

export default ListadoArticulos
