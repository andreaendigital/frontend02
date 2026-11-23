import { Link } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <span className="notfound-emoji">✈️</span>
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Parece que esta ruta no existe. ¿Te perdiste en el camino?</p>
        <Link to="/" className="btn-home">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
