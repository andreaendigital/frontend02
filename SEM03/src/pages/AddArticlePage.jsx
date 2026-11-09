import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useInventory } from '../context/InventoryContext'

const emptyForm = { name: '', brand: '', type: '', stock: '' }

function AddArticlePage() {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const { addArticle } = useInventory()
  const navigate = useNavigate()

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.brand.trim() || !form.type || form.stock === '') {
      setError('Completa todos los campos para agregar el artículo.')
      return
    }
    addArticle(form)
    navigate('/articulos')
  }

  return (
    <section className="mx-auto max-w-[820px]">
      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-blue-600">Gestión de inventario</p>
      <h1 className="mb-3 font-[Manrope] text-3xl font-bold tracking-tight">Agregar nuevo artículo</h1>
      <p className="max-w-xl text-[15px] leading-7 text-slate-500">Registra un producto para que quede disponible en el inventario de la tienda.</p>
      <form className="mt-4 rounded-xl bg-white p-4 shadow-sm" onSubmit={handleSubmit}>
        {error && <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</div>}
        <div className="grid gap-4 md:grid-cols-2">
          <div><label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">Nombre del artículo</label><input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Ej: Café molido 250 g" /></div>
          <div><label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="brand">Marca</label><input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" id="brand" name="brand" value={form.brand} onChange={handleChange} placeholder="Ej: Juan Valdez" /></div>
          <div><label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="type">Tipo de producto</label><select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" id="type" name="type" value={form.type} onChange={handleChange}><option value="">Selecciona un tipo</option><option>Lácteos</option><option>Despensa</option><option>Frutas y verduras</option><option>Panadería</option><option>Bebidas</option><option>Limpieza</option></select></div>
          <div><label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="stock">Cantidad inicial</label><input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" id="stock" name="stock" type="number" min="0" value={form.stock} onChange={handleChange} placeholder="0" /></div>
        </div>
        <div className="mt-4 flex justify-end gap-2"><Link className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-600 no-underline hover:bg-slate-50" to="/articulos">Cancelar</Link><button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700" type="submit">Guardar artículo</button></div>
      </form>
    </section>
  )
}

export default AddArticlePage
