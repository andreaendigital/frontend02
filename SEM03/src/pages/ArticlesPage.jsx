import { Link } from 'react-router-dom'
import ListadoArticulos from '../components/ListadoArticulos'

function ArticlesPage() {
  return (
    <section className="mx-auto max-w-[1040px]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-blue-600">Control de existencias</p>
          <h1 className="mb-3 font-[Manrope] text-3xl font-bold tracking-tight">Artículos en inventario</h1>
          <p className="max-w-xl text-[15px] leading-7 text-slate-500">Consulta y filtra todos los artículos registrados por categoría.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-600 no-underline hover:bg-slate-50" to="/articulos/nuevo">+ Agregar artículo</Link>
          <Link className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white no-underline hover:bg-blue-700" to="/carrito">Ver carrito</Link>
        </div>
      </div>
      <ListadoArticulos />
    </section>
  )
}

export default ArticlesPage
