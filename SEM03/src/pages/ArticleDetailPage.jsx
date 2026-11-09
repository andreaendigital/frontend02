import { Link, useNavigate, useParams } from 'react-router-dom'
import { useInventory } from '../context/InventoryContext'

function ArticleDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { articles, addToCart } = useInventory()
  const article = articles.find((item) => String(item.id) === id)

  if (!article) {
    return <section className="mx-auto max-w-[820px]"><h1 className="font-[Manrope] text-3xl font-bold">Artículo no encontrado</h1><Link className="mt-4 inline-block text-blue-600" to="/articulos">Volver al inventario</Link></section>
  }

  const handleAddToCart = () => {
    if (addToCart(article.id)) navigate('/carrito')
  }

  return (
    <section className="mx-auto max-w-[820px]">
      <Link className="text-sm text-blue-600 no-underline hover:underline" to="/articulos">← Volver a artículos</Link>
      <article className="mt-6 rounded-xl bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="grid h-32 w-32 shrink-0 place-items-center rounded-2xl bg-slate-50 text-6xl">{article.icon}</div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600">{article.categoria}</p>
            <h1 className="font-[Manrope] text-3xl font-bold">{article.name}</h1>
            <p className="mt-2 text-slate-500">Marca: {article.brand}</p>
            <p className="mt-1 text-slate-500">Disponibles: <strong>{article.stock} {article.unit}</strong></p>
            <button className="mt-5 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300" type="button" disabled={article.stock === 0} onClick={handleAddToCart}>{article.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}</button>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ArticleDetailPage
