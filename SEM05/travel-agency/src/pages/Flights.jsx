import { useQuery } from "@apollo/client";
import { useOutletContext } from "react-router-dom";
import { GET_FLIGHTS } from "../graphql/queries";
import LoadingSpinner from "../components/LoadingSpinner";
import "../styles/Flights.css";

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString("es-CL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function ClassBadge({ flightClass }) {
  const colors = {
    Económica: "badge-economy",
    Business: "badge-business",
    "Primera clase": "badge-first",
  };
  return (
    <span className={`class-badge ${colors[flightClass] ?? "badge-economy"}`}>
      {flightClass}
    </span>
  );
}

export default function Flights() {
  const { destinationId, destinationName } = useOutletContext();
  const { data, loading, error } = useQuery(GET_FLIGHTS, {
    variables: { destinationId },
  });

  if (loading)
    return (
      <LoadingSpinner message="Consultando vuelos vía GraphQL..." />
    );

  if (error)
    return (
      <div className="error-box">
        ❌ Error al cargar vuelos: {error.message}
      </div>
    );

  const flights = data?.flights ?? [];

  return (
    <div className="flights-section">
      <div className="flights-header">
        <h2>✈ Vuelos disponibles a {destinationName}</h2>
        <span className="flights-count">{flights.length} vuelos encontrados</span>
      </div>

      <div className="api-badge">
        <span>🔗 Datos obtenidos vía <strong>GraphQL</strong> (Apollo Client MockLink)</span>
      </div>

      {flights.length === 0 ? (
        <p className="no-results">No hay vuelos disponibles para este destino.</p>
      ) : (
        <div className="flights-list">
          {flights.map((flight) => (
            <div key={flight.id} className="flight-card">
              <div className="flight-airline">
                <span className="airline-icon">✈</span>
                <div>
                  <span className="airline-name">{flight.airline}</span>
                  <span className="flight-id">ID: {flight.id}</span>
                </div>
                <ClassBadge flightClass={flight.class} />
              </div>

              <div className="flight-route">
                <div className="route-point">
                  <span className="route-time">{formatDate(flight.departure)}</span>
                  <span className="route-place">{flight.origin}</span>
                </div>
                <div className="route-middle">
                  <span className="route-duration">{flight.duration}</span>
                  <div className="route-line">
                    <span className="route-dot" />
                    <div className="route-track" />
                    <span className="route-plane">✈</span>
                    <div className="route-track" />
                    <span className="route-dot" />
                  </div>
                  <span className="route-stops">
                    {flight.stops === 0
                      ? "Vuelo directo"
                      : flight.stops === 1
                      ? "1 escala"
                      : `${flight.stops} escalas`}
                  </span>
                </div>
                <div className="route-point">
                  <span className="route-time">{formatDate(flight.arrival)}</span>
                  <span className="route-place">{flight.destination}</span>
                </div>
              </div>

              <div className="flight-footer">
                <div className="flight-seats">
                  <span
                    className={`seats-badge ${
                      flight.seats <= 3 ? "seats-critical" : "seats-ok"
                    }`}
                  >
                    {flight.seats <= 3
                      ? `⚠ ¡Solo ${flight.seats} asientos!`
                      : `${flight.seats} asientos disponibles`}
                  </span>
                </div>
                <div className="flight-price-box">
                  <span className="price-label">Precio por persona</span>
                  <span className="flight-price">
                    USD {flight.price.toLocaleString("es-CL")}
                  </span>
                  <button className="btn-book">Reservar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
