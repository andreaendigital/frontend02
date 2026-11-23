import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchDestinationById } from "../api/destinationsApi";
import LoadingSpinner from "../components/LoadingSpinner";
import "../styles/DestinationDetail.css";

export default function DestinationDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchDestinationById(id)
      .then((data) => {
        setDestination(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoadingSpinner message="Cargando información del destino..." />;
  if (error)
    return (
      <div className="error-box">
        ❌ {error}{" "}
        <Link to="/destinations" className="back-link">
          Volver a destinos
        </Link>
      </div>
    );

  const isFlightsActive = location.pathname.includes("/flights");
  const isHotelsActive = location.pathname.includes("/hotels");
  const isRoot =
    !isFlightsActive && !isHotelsActive;

  return (
    <div className="detail-page">
      {/* Hero del destino */}
      <div className="detail-hero" style={{ backgroundImage: `url(${destination.image})` }}>
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <Link to="/destinations" className="back-btn">
            ← Volver a destinos
          </Link>
          <h1 className="detail-title">{destination.name}</h1>
          <p className="detail-country">📍 {destination.country}</p>
          <div className="detail-rating">⭐ {destination.rating} / 5</div>
        </div>
      </div>

      <div className="detail-content">
        {/* Info general */}
        <div className="detail-info-grid">
          <div className="info-card">
            <span className="info-icon">🌤</span>
            <div>
              <span className="info-label">Clima</span>
              <span className="info-value">{destination.climate}</span>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon">💱</span>
            <div>
              <span className="info-label">Moneda</span>
              <span className="info-value">{destination.currency}</span>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon">🗣</span>
            <div>
              <span className="info-label">Idioma</span>
              <span className="info-value">{destination.language}</span>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon">🌍</span>
            <div>
              <span className="info-label">Continente</span>
              <span className="info-value">{destination.continent}</span>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <p className="detail-description">{destination.description}</p>

        {/* Actividades */}
        <div className="activities-section">
          <h2>🎯 Actividades populares</h2>
          <div className="activities-list">
            {destination.activities.map((act) => (
              <span key={act} className="activity-badge">
                {act}
              </span>
            ))}
          </div>
        </div>

        {/* Tabs de navegación */}
        <div className="tabs-nav">
          <Link
            to={`/destinations/${id}`}
            end
            className={`tab-btn ${isRoot ? "active" : ""}`}
          >
            🏠 Resumen
          </Link>
          <Link
            to={`/destinations/${id}/flights`}
            className={`tab-btn ${isFlightsActive ? "active" : ""}`}
          >
            ✈ Vuelos disponibles
          </Link>
          <Link
            to={`/destinations/${id}/hotels`}
            className={`tab-btn ${isHotelsActive ? "active" : ""}`}
          >
            🏨 Hoteles disponibles
          </Link>
        </div>

        {/* Contenido de la pestaña activa (Outlet) */}
        <div className="tab-content">
          {isRoot && (
            <div className="summary-cta">
              <p>Selecciona una pestaña para explorar vuelos u hoteles disponibles para {destination.name}.</p>
              <div className="cta-buttons">
                <Link to={`/destinations/${id}/flights`} className="btn-primary">
                  ✈ Ver vuelos
                </Link>
                <Link to={`/destinations/${id}/hotels`} className="btn-secondary">
                  🏨 Ver hoteles
                </Link>
              </div>
            </div>
          )}
          <Outlet context={{ destinationId: id, destinationName: destination.name }} />
        </div>
      </div>
    </div>
  );
}
