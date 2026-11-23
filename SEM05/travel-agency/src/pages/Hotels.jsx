import { useQuery } from "@apollo/client";
import { useOutletContext } from "react-router-dom";
import { GET_HOTELS } from "../graphql/queries";
import LoadingSpinner from "../components/LoadingSpinner";
import StarRating from "../components/StarRating";
import "../styles/Hotels.css";

export default function Hotels() {
  const { destinationId, destinationName } = useOutletContext();
  const { data, loading, error } = useQuery(GET_HOTELS, {
    variables: { destinationId },
  });

  if (loading)
    return <LoadingSpinner message="Consultando hoteles vía GraphQL..." />;

  if (error)
    return (
      <div className="error-box">
        ❌ Error al cargar hoteles: {error.message}
      </div>
    );

  const hotels = data?.hotels ?? [];

  const available = hotels.filter((h) => h.available);
  const unavailable = hotels.filter((h) => !h.available);
  const sorted = [...available, ...unavailable];

  return (
    <div className="hotels-section">
      <div className="hotels-header">
        <h2>🏨 Hoteles disponibles en {destinationName}</h2>
        <span className="hotels-count">
          {available.length} de {hotels.length} disponibles
        </span>
      </div>

      <div className="api-badge">
        <span>🔗 Datos obtenidos vía <strong>GraphQL</strong> (Apollo Client MockLink)</span>
      </div>

      {hotels.length === 0 ? (
        <p className="no-results">No hay hoteles disponibles para este destino.</p>
      ) : (
        <div className="hotels-grid">
          {sorted.map((hotel) => (
            <div
              key={hotel.id}
              className={`hotel-card ${!hotel.available ? "hotel-unavailable" : ""}`}
            >
              {!hotel.available && (
                <div className="unavailable-overlay">
                  <span>Sin disponibilidad</span>
                </div>
              )}

              <div className="hotel-image-wrapper">
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                <div className="hotel-stars-overlay">
                  <StarRating stars={hotel.stars} />
                </div>
              </div>

              <div className="hotel-body">
                <div className="hotel-top">
                  <h3 className="hotel-name">{hotel.name}</h3>
                  <div className="hotel-reviews">⭐ {hotel.reviews.toFixed(1)}</div>
                </div>

                <p className="hotel-address">📍 {hotel.address}</p>

                <div className="hotel-dates">
                  <span>📅 Check-in: {hotel.checkIn}</span>
                  <span>📅 Check-out: {hotel.checkOut}</span>
                </div>

                <div className="hotel-amenities">
                  {hotel.amenities.map((am) => (
                    <span key={am} className="amenity-tag">
                      {am}
                    </span>
                  ))}
                </div>

                <div className="hotel-footer">
                  <div className="hotel-price-box">
                    <span className="price-label">Por noche</span>
                    <span className="hotel-price">
                      USD {hotel.pricePerNight.toLocaleString("es-CL")}
                    </span>
                  </div>
                  <button
                    className={`btn-book ${!hotel.available ? "btn-disabled" : ""}`}
                    disabled={!hotel.available}
                  >
                    {hotel.available ? "Reservar" : "No disponible"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
