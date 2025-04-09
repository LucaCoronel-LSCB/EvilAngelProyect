import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Context
import { VapersProvider } from "./context/VapersContext"; // Importar el provider
import { CartProvider } from "./context/CartContext"; 
import { CartContext } from "./context/CartContext";

//CSS
import "./App.css";

// PAGES
import Inicio from "./pages/inicio/Inicio";
import Catalogo from "./pages/catalogo/Catalogo";
import AcercaDe from "./pages/acercaDe/AcercaDe";
import Contacto from "./pages/contacto/Contacto";
import Blog from "./pages/blog/Blog";
import DetailPage from "./pages/DetailPage/DetailPage";
import Carrito from "./pages/carrito/Carrito";
// COMPONENTS
import Footer from "./components/footer/Footer";
import NavBar2 from "./components/navBar2/NavBar2";

function App() {
  return (
      <VapersProvider>
        <CartProvider>
          <Router>
            <NavBar2 />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/acerca" element={<AcercaDe />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/DetailPage/:id" element={<DetailPage />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </VapersProvider>
  );
}

export default App;
