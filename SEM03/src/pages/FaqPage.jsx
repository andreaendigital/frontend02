function FaqPage() {
  const questions = [
    ['¿Cómo actualizo el stock de un producto?', 'Selecciona el producto desde Inventario, abre sus opciones y registra la nueva cantidad disponible.'],
    ['¿Puedo administrar más de una tienda?', 'Sí. Usa el selector de tienda ubicado en la parte superior para consultar el inventario de cada local.'],
    ['¿Con qué frecuencia se actualiza la información?', 'Los cambios se reflejan en tiempo real para que todo el equipo trabaje con información confiable.'],
    ['¿Qué hago si un producto está agotado?', 'Revisa el estado del producto y coordina una reposición con el área de abastecimiento.'],
  ]

  return (
    <section className="mx-auto max-w-[760px]">
      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-blue-600">Centro de ayuda</p>
      <h1 className="mb-3 font-[Manrope] text-3xl font-bold tracking-tight">Preguntas frecuentes</h1>
      <p className="max-w-xl text-[15px] leading-7 text-slate-500">Resuelve tus dudas sobre el uso de la plataforma de gestión de inventario.</p>
      <div className="mt-8 grid gap-3">
        {questions.map(([question, answer]) => <details className="rounded-xl border border-slate-200 px-4" key={question}><summary className="flex cursor-pointer list-none justify-between py-4 text-sm font-semibold"><span>{question}</span><span className="text-xl font-normal text-blue-600">+</span></summary><p className="border-t border-slate-200 py-4 text-[13px] leading-relaxed text-slate-500">{answer}</p></details>)}
      </div>
    </section>
  )
}

export default FaqPage
