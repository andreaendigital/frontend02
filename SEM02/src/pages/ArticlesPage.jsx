import { Link } from "react-router-dom";
import { useInventory } from "../context/InventoryContext";

function ArticlesPage() {
  const { articles } = useInventory();

  return (
    <section className="mx-auto max-w-[1040px]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-blue-600">
            Control de existencias
          </p>
          <h1 className="mb-3 font-[Manrope] text-3xl font-bold tracking-tight">
            Artículos en inventario
          </h1>
          <p className="max-w-xl text-[15px] leading-7 text-slate-500">
            Consulta todos los artículos registrados y su disponibilidad actual.
          </p>
        </div>
        <Link
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white no-underline hover:bg-blue-700"
          to="/articulos/nuevo"
        >
          + Agregar artículo
        </Link>
      </div>
      <div className="mt-4 overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="w-full min-w-[650px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Artículo</th>
              <th className="px-4 py-3">Marca</th>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr
                className="border-t border-slate-100 hover:bg-slate-50"
                key={article.id}
              >
                <td className="px-4 py-3">
                  <span className="mr-2">{article.icon}</span>
                  <strong>{article.name}</strong>
                </td>
                <td className="px-4 py-3">{article.brand}</td>
                <td className="px-4 py-3">{article.type}</td>
                <td className="px-4 py-3">
                  {article.stock} {article.unit}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${article.status === "Disponible" ? "bg-green-100 text-green-700" : article.status === "Stock bajo" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}
                  >
                    {article.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ArticlesPage;
