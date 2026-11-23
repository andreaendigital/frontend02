import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">✈</span>
          <span className="brand-name">TravelWorld</span>
        </Link>

        <ul className="navbar-links">
          <li>
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/destinations"
              className={`nav-link ${isActive("/destinations") ? "active" : ""}`}
            >
              Destinos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
