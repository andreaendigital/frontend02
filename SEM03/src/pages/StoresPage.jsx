function StoresPage() {
  const stores = [
    { name: 'Local Ñuñoa', address: 'Av. Irarrázaval 2450', hours: '08:00 - 22:00', active: true },
    { name: 'Local Providencia', address: 'Av. Pedro de Valdivia 120', hours: '08:30 - 21:30' },
    { name: 'Local La Florida', address: 'Vicuña Mackenna 8650', hours: '09:00 - 21:00' },
  ]

  return (
    <section className="mx-auto max-w-[820px]">
      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-blue-600">Nuestra presencia</p>
      <h1 className="mb-3 font-[Manrope] text-3xl font-bold tracking-tight">Encuentra nuestras tiendas</h1>
      <p className="max-w-xl text-[15px] leading-7 text-slate-500">Cada local cuenta con un equipo preparado para ayudarte y productos frescos todos los días.</p>
      <div className="mt-8 grid gap-3">
        {stores.map((store) => (
          <article className="grid grid-cols-[42px_1fr] items-center gap-4 rounded-xl border border-slate-200 p-5 sm:grid-cols-[42px_1fr_auto]" key={store.name}>
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-2xl text-blue-600">⌖</div>
            <div><div className="flex items-center gap-2"><h2 className="m-0 font-[Manrope] text-[15px]">{store.name}</h2>{store.active && <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600">Abierto</span>}</div><p className="mt-1.5 text-xs text-slate-500">{store.address}</p><p className="mt-1.5 text-[11px] text-slate-500">◷ {store.hours}</p></div>
            <button className="col-start-2 justify-self-start rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] text-blue-600 hover:bg-slate-50 sm:col-auto" type="button">Ver mapa</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StoresPage
