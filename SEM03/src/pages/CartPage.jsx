import { Link } from 'react-router-dom'
import { useInventory } from '../context/InventoryContext'

function CartPage() {
  const { articles, cart, increaseCartItem, decreaseCartItem } = useInventory()
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <section className="mx-auto max-w-[820px]">
      <div className="flex items-start justify-between gap-3">
        <div><p className="mb-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-blue-600">Compra</p><h1 className="font-[Manrope] text-3xl font-bold tracking-tight">Carrito de compras</h1><p className="mt-2 text-[15px] text-slate-500">{totalItems} artículo(s) seleccionado(s)</p></div>
        <Link className="text-sm text-blue-600 no-underline hover:underline" to="/articulos">← Seguir comprando</Link>
      </div>
      {cart.length === 0 ? <div className="mt-8 rounded-xl bg-white p-8 text-center shadow-sm"><p className="text-slate-500">Tu carrito está vacío.</p><Link className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white no-underline" to="/articulos">Ver inventario</Link></div> : <div className="mt-6 grid gap-3">{cart.map((item) => { const currentArticle = articles.find((article) => article.id === item.id); return <article className="flex items-center gap-4 rounded-xl border border-slate-200 p-4" key={item.id}><span className="grid h-12 w-12 place-items-center rounded-lg bg-slate-50 text-2xl">{item.icon}</span><div className="min-w-0 flex-1"><strong className="block truncate">{item.name}</strong><span className="text-xs text-slate-500">{item.brand} · {item.categoria}</span></div><div className="flex items-center gap-3"><button className="grid h-8 w-8 place-items-center rounded-lg border border-slate-300 text-lg" type="button" onClick={() => decreaseCartItem(item.id)} aria-label={`Disminuir ${item.name}`}>−</button><strong>{item.quantity}</strong><button className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-lg text-white disabled:bg-slate-300" type="button" disabled={!currentArticle || currentArticle.stock === 0} onClick={() => increaseCartItem(item.id)} aria-label={`Aumentar ${item.name}`}>+</button></div></article> })}</div>}
    </section>
  )
}

export default CartPage
