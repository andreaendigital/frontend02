import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInventory } from '../context/InventoryContext'

function InventoryPage() {
  const [query, setQuery] = useState('')
  const { articles } = useInventory()
  const products = articles
  const availableCount = articles.filter((article) => article.status === 'Disponible').length
  const lowStockCount = articles.filter((article) => article.status === 'Stock bajo').length
  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.categoria}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <section>
      <div className="mb-9 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-blue-600">Resumen del día · 09 nov 2026</p>
          <h1 className="mb-2 font-[Manrope] text-3xl font-bold tracking-tight">Hola, equipo 👋</h1>
          <p className="m-0 text-[13px] text-slate-500">Revisa el estado de tus productos y mantén tu tienda al día.</p>
        </div>
        <Link className="w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white no-underline shadow-lg shadow-blue-600/20 hover:bg-blue-700 sm:w-auto" to="/articulos/nuevo">+ Agregar producto</Link>
      </div>

      <div className="mb-10 grid gap-3 sm:grid-cols-3">
        <article className="flex items-center gap-3 rounded-xl border border-slate-200 p-5"><span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-lg font-bold text-blue-600">▦</span><div><span className="block text-[11px] text-slate-500">Productos registrados</span><strong className="block font-[Manrope] text-2xl">126</strong></div><span className="ml-auto self-start text-[11px] font-bold text-emerald-500">+8%</span></article>
        <article className="flex items-center gap-3 rounded-xl border border-slate-200 p-5"><span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-50 text-lg font-bold text-emerald-500">✓</span><div><span className="block text-[11px] text-slate-500">Disponibles</span><strong className="block font-[Manrope] text-2xl">{availableCount}</strong></div><span className="ml-auto self-start text-[11px] font-bold text-emerald-500">Actualizado</span></article>
        <article className="flex items-center gap-3 rounded-xl border border-slate-200 p-5"><span className="grid h-10 w-10 place-items-center rounded-lg bg-amber-50 text-lg font-bold text-amber-500">!</span><div><span className="block text-[11px] text-slate-500">Stock bajo</span><strong className="block font-[Manrope] text-2xl">{lowStockCount}</strong></div><span className="ml-auto self-start text-[11px] font-bold text-amber-500">Revisar</span></article>
      </div>

      <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div><h2 className="m-0 font-[Manrope] text-lg">Inventario actual</h2><p className="mt-1 text-[11px] text-slate-500">Última actualización hace 5 minutos</p></div>
        <label className="flex w-full items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-slate-400 sm:w-[220px]"><span>⌕</span><input className="w-full border-0 text-xs text-slate-700 outline-none" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar producto..." /></label>
      </div>

      <div className="border-t border-slate-200">
        {filteredProducts.map((product) => (
          <article className="grid grid-cols-[42px_1fr_auto_24px] items-center gap-3 border-b border-slate-200 px-1 py-4" key={product.name}>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-50 text-xl">{product.icon}</span>
            <div><strong className="block text-[13px]">{product.name}</strong><span className="mt-1 block text-[11px] text-slate-500">{product.categoria}</span></div>
            <div className="text-right"><strong className="block text-[13px]">{product.stock} <small className="text-[10px] font-normal text-slate-500">{product.unit}</small></strong><span className={`mt-1 block w-max rounded-full px-2 py-1 text-[10px] ${product.status === 'Disponible' ? 'bg-emerald-50 text-emerald-600' : product.status === 'Stock bajo' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'}`}>{product.status}</span></div>
            <button className="border-0 bg-transparent text-slate-400" type="button" aria-label={`Opciones para ${product.name}`}>•••</button>
          </article>
        ))}
        {filteredProducts.length === 0 && <p className="px-1 py-6 text-slate-500">No encontramos productos con ese nombre.</p>}
      </div>
    </section>
  )
}

export default InventoryPage
