function Navigation() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-slate-200 px-5 sm:h-[82px] sm:px-12">
      <div className="flex items-center gap-3">
        <span className="grid h-[38px] w-[38px] place-items-center rounded-xl bg-blue-600 font-[Manrope] text-[22px] font-extrabold text-white">S</span>
        <div>
          <strong className="block font-[Manrope] text-base font-bold">SuperMercado</strong>
          <span className="mt-0.5 block text-[11px] text-slate-500">Gestión de inventario</span>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600" aria-label="Tienda seleccionada">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="hidden sm:inline">Local Ñuñoa</span>
      </div>
    </header>
  )
}

export default Navigation
