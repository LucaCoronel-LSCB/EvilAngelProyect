import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa los estilos específicos del navbar

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Evil Angel</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/catalogo">Catálogo</Link>
        </li>
        <li>
          <Link to="/acerca">Acerca de Nosotros</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
