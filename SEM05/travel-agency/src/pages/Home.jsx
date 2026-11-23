import { Link } from "react-router-dom";
import "../styles/Home.css";

const FEATURED = [
  { emoji: "🗼", label: "Europa" },
  { emoji: "🌸", label: "Asia" },
  { emoji: "🌴", label: "Caribe" },
  { emoji: "🗽", label: "América" },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-subtitle">Tu próxima aventura te espera</p>
          <h1 className="hero-title">
            Descubre el mundo <br />
            <span className="hero-highlight">con TravelWorld</span>
          </h1>
          <p className="hero-desc">
            Encuentra vuelos, hoteles y experiencias únicas en los destinos más
            increíbles del planeta. Todo en un solo lugar.
          </p>
          <Link to="/destinations" className="btn-hero">
            Explorar Destinos ✈
          </Link>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="features">
        <div className="section-container">
          <h2 className="section-title">¿Por qué viajar con nosotros?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🔍</span>
              <h3>Búsqueda inteligente</h3>
              <p>Compara vuelos y hoteles en segundos con nuestra tecnología de búsqueda avanzada.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💰</span>
              <h3>Mejores precios</h3>
              <p>Garantizamos las tarifas más competitivas del mercado para cada destino.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🛡️</span>
              <h3>Viaje seguro</h3>
              <p>Reserva con total confianza. Atención al cliente 24/7 durante todo tu viaje.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌍</span>
              <h3>Destinos globales</h3>
              <p>Más de 100 destinos en los 5 continentes para satisfacer cada tipo de viajero.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="categories">
        <div className="section-container">
          <h2 className="section-title">Explora por región</h2>
          <div className="categories-grid">
            {FEATURED.map((cat) => (
              <Link to="/destinations" key={cat.label} className="category-card">
                <span className="category-emoji">{cat.emoji}</span>
                <span className="category-label">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para tu próximo viaje?</h2>
          <p>Explora nuestros destinos y empieza a planificar hoy mismo.</p>
          <Link to="/destinations" className="btn-cta">
            Ver todos los destinos
          </Link>
        </div>
      </section>
    </div>
  );
}
