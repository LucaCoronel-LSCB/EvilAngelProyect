import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar2.css";

const NavBar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Evil Angel</h1>
      </div>
      {/* Menú en pantallas grandes */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <button className="glow-button">Inicio</button>
        </Link>
        <Link to="/catalogo" onClick={() => setMenuOpen(false)}>
          <button className="glow-button">Catálogo</button>
        </Link>
        <Link to="/acerca" onClick={() => setMenuOpen(false)}>
          <button className="glow-button">Acerca de Nosotros</button>
        </Link>
        <Link to="/contacto" onClick={() => setMenuOpen(false)}>
          <button className="glow-button">Contacto</button>
        </Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>
          <button className="glow-button">Blog</button>
        </Link>
        <Link to="/carrito" onClick={() => setMenuOpen(false)}>
          <button className="glow-button">Carrito</button>
        </Link>
      </div>

      {/* Botón Hamburguesa en móviles */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default NavBar2;
