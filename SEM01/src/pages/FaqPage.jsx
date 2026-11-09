function FaqPage() {
  const questions = [
    ['¿Cómo actualizo el stock de un producto?', 'Selecciona el producto desde Inventario, abre sus opciones y registra la nueva cantidad disponible.'],
    ['¿Puedo administrar más de una tienda?', 'Sí. Usa el selector de tienda ubicado en la parte superior para consultar el inventario de cada local.'],
    ['¿Con qué frecuencia se actualiza la información?', 'Los cambios se reflejan en tiempo real para que todo el equipo trabaje con información confiable.'],
    ['¿Qué hago si un producto está agotado?', 'Revisa el estado del producto y coordina una reposición con el área de abastecimiento.'],
  ]

  return (
    <section className="info-page faq-page">
      <p className="eyebrow">Centro de ayuda</p>
      <h1>Preguntas frecuentes</h1>
      <p className="lead">Resuelve tus dudas sobre el uso de la plataforma de gestión de inventario.</p>
      <div className="faq-list">
        {questions.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
      </div>
    </section>
  )
}

export default FaqPage
