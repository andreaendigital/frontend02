function Navigation() {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">S</span>
        <div>
          <strong>SuperMercado</strong>
          <span>Gestión de inventario</span>
        </div>
      </div>
      <div className="store-badge" aria-label="Tienda seleccionada">
        <span className="online-dot" />
        <span>Local Ñuñoa</span>
      </div>
    </header>
  )
}

export default Navigation
