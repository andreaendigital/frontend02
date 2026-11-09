import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">⌂</span>
        <span>Inventario</span>
      </NavLink>
      <NavLink to="/tiendas" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">▣</span>
        <span>Nuestras tiendas</span>
      </NavLink>
      <NavLink to="/preguntas-frecuentes" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">?</span>
        <span>Preguntas frecuentes</span>
      </NavLink>
    </nav>
  )
}

export default Footer
