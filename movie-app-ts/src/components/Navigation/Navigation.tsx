import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🎬 MovieApp
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/search" className="nav-link">Buscar</Link>
          <Link to="/favorites" className="nav-link">Favoritos</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;