// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
  return (
    <nav className="navbar navbar-dark px-3" style={{ backgroundColor: '#1a1a1a' }}>
      <span className="navbar-brand">🦇 BatTweet</span>
      <div>
        {user ? (
          <>
            <Link to="/" className="btn btn-dark me-2">Inicio</Link>
            <Link to="/profile" className="btn btn-dark me-2">Perfil</Link>
            <button className="btn btn-danger" onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary">Iniciar sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
