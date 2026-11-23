import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchDestinations } from "../api/destinationsApi";
import LoadingSpinner from "../components/LoadingSpinner";
import "../styles/DestinationList.css";

export default function DestinationList() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filterContinent, setFilterContinent] = useState("Todos");

  useEffect(() => {
    setLoading(true);
    fetchDestinations()
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const continents = ["Todos", ...new Set(destinations.map((d) => d.continent))];

  const filtered = destinations.filter((d) => {
    const matchSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.country.toLowerCase().includes(search.toLowerCase());
    const matchContinent =
      filterContinent === "Todos" || d.continent === filterContinent;
    return matchSearch && matchContinent;
  });

  if (loading) return <LoadingSpinner message="Cargando destinos desde la API REST..." />;
  if (error) return <div className="error-box">❌ Error: {error}</div>;

  return (
    <div className="destinations-page">
      <div className="destinations-header">
        <h1>🌍 Destinos disponibles</h1>
        <p>Selecciona un destino para ver vuelos y hoteles disponibles</p>
      </div>

      {/* Filtros */}
      <div className="filters-bar">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar destino o país..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="continent-filters">
          {continents.map((c) => (
            <button
              key={c}
              className={`filter-btn ${filterContinent === c ? "active" : ""}`}
              onClick={() => setFilterContinent(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Resultados */}
      {filtered.length === 0 ? (
        <p className="no-results">No se encontraron destinos para tu búsqueda.</p>
      ) : (
        <div className="destinations-grid">
          {filtered.map((dest) => (
            <Link
              to={`/destinations/${dest.id}`}
              key={dest.id}
              className="destination-card"
            >
              <div className="card-image-wrapper">
                <img src={dest.image} alt={dest.name} className="card-image" />
                <span className="card-continent">{dest.continent}</span>
                <div className="card-rating">⭐ {dest.rating}</div>
              </div>
              <div className="card-body">
                <h2 className="card-title">{dest.name}</h2>
                <p className="card-country">📍 {dest.country}</p>
                <p className="card-climate">🌤 {dest.climate}</p>
                <div className="card-activities">
                  {dest.activities.slice(0, 3).map((act) => (
                    <span key={act} className="activity-tag">
                      {act}
                    </span>
                  ))}
                </div>
                <div className="card-footer">
                  <span className="card-currency">{dest.currency}</span>
                  <span className="card-cta">Ver opciones →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
