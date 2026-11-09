import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <nav className="flex min-h-[58px] w-full items-center justify-center gap-1 border-b border-slate-200 bg-white px-1 sm:gap-8 sm:px-3" aria-label="Navegación principal">
      <NavLink to="/" end className={({ isActive }) => `flex flex-1 items-center justify-center gap-1 text-center text-[10px] font-semibold no-underline sm:flex-row sm:gap-2 sm:text-[11px] ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
        <span className="text-[17px] sm:text-[19px]">⌂</span>
        <span>Inventario</span>
      </NavLink>
      <NavLink to="/tiendas" className={({ isActive }) => `flex flex-1 items-center justify-center gap-1 text-center text-[10px] font-semibold no-underline sm:flex-row sm:gap-2 sm:text-[11px] ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
        <span className="text-[17px] sm:text-[19px]">▣</span>
        <span>Nuestras tiendas</span>
      </NavLink>
      <NavLink to="/preguntas-frecuentes" className={({ isActive }) => `flex flex-1 items-center justify-center gap-1 text-center text-[10px] font-semibold no-underline sm:flex-row sm:gap-2 sm:text-[11px] ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
        <span className="text-[17px] sm:text-[19px]">?</span>
        <span>Preguntas frecuentes</span>
      </NavLink>
      <NavLink to="/articulos/nuevo" className={({ isActive }) => `flex flex-1 items-center justify-center gap-1 text-center text-[10px] font-semibold no-underline sm:flex-row sm:gap-2 sm:text-[11px] ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
        <span className="text-[17px] sm:text-[19px]">＋</span>
        <span>Agregar artículo</span>
      </NavLink>
      <NavLink to="/articulos" className={({ isActive }) => `flex flex-1 items-center justify-center gap-1 text-center text-[10px] font-semibold no-underline sm:flex-row sm:gap-2 sm:text-[11px] ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
        <span className="text-[17px] sm:text-[19px]">▤</span>
        <span>Inventario completo</span>
      </NavLink>
    </nav>
  )
}

export default Footer
