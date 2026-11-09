function StoresPage() {
  const stores = [
    { name: 'Local Ñuñoa', address: 'Av. Irarrázaval 2450', hours: '08:00 - 22:00', active: true },
    { name: 'Local Providencia', address: 'Av. Pedro de Valdivia 120', hours: '08:30 - 21:30' },
    { name: 'Local La Florida', address: 'Vicuña Mackenna 8650', hours: '09:00 - 21:00' },
  ]

  return (
    <section className="info-page">
      <p className="eyebrow">Nuestra presencia</p>
      <h1>Encuentra nuestras tiendas</h1>
      <p className="lead">Cada local cuenta con un equipo preparado para ayudarte y productos frescos todos los días.</p>
      <div className="store-list">
        {stores.map((store) => (
          <article className="store-card" key={store.name}>
            <div className="store-symbol">⌖</div>
            <div><div className="store-title"><h2>{store.name}</h2>{store.active && <span className="open-label">Abierto</span>}</div><p>{store.address}</p><p className="hours">◷ {store.hours}</p></div>
            <button className="outline-button" type="button">Ver mapa</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StoresPage
