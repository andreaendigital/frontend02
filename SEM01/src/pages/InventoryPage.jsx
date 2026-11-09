import { useState } from 'react'

const products = [
  { name: 'Leche entera 1 L', category: 'Lácteos', stock: 48, unit: 'unidades', status: 'Disponible', icon: '🥛' },
  { name: 'Arroz grano largo 1 kg', category: 'Despensa', stock: 12, unit: 'unidades', status: 'Stock bajo', icon: '🍚' },
  { name: 'Manzanas Fuji', category: 'Frutas y verduras', stock: 86, unit: 'kg', status: 'Disponible', icon: '🍎' },
  { name: 'Pan molde integral', category: 'Panadería', stock: 0, unit: 'unidades', status: 'Agotado', icon: '🍞' },
]

function InventoryPage() {
  const [query, setQuery] = useState('')
  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <section>
      <div className="welcome-row">
        <div>
          <p className="eyebrow">Resumen del día · 09 nov 2026</p>
          <h1>Hola, equipo 👋</h1>
          <p className="muted">Revisa el estado de tus productos y mantén tu tienda al día.</p>
        </div>
        <button className="primary-button" type="button">+ Agregar producto</button>
      </div>

      <div className="stats-grid">
        <article className="stat-card"><span className="stat-icon blue">▦</span><div><span className="stat-label">Productos registrados</span><strong>126</strong></div><span className="trend">+8%</span></article>
        <article className="stat-card"><span className="stat-icon green">✓</span><div><span className="stat-label">Disponibles</span><strong>98</strong></div><span className="trend">+12%</span></article>
        <article className="stat-card"><span className="stat-icon orange">!</span><div><span className="stat-label">Stock bajo</span><strong>16</strong></div><span className="trend warning">Revisar</span></article>
      </div>

      <div className="section-heading">
        <div><h2>Inventario actual</h2><p className="muted">Última actualización hace 5 minutos</p></div>
        <label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar producto..." /></label>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.name}>
            <span className="product-icon">{product.icon}</span>
            <div className="product-info"><strong>{product.name}</strong><span>{product.category}</span></div>
            <div className="stock-info"><strong>{product.stock} <small>{product.unit}</small></strong><span className={`status ${product.status.toLowerCase().replace(' ', '-')}`}>{product.status}</span></div>
            <button className="more-button" type="button" aria-label={`Opciones para ${product.name}`}>•••</button>
          </article>
        ))}
        {filteredProducts.length === 0 && <p className="empty-state">No encontramos productos con ese nombre.</p>}
      </div>
    </section>
  )
}

export default InventoryPage
