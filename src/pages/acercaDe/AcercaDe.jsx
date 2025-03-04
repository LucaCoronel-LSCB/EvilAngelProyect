import React from "react";
import "./AcercaDe.css";

const AcercaDe = () => {
  return (
    <div className="acerca-container">
      {/* Encabezado */}
      <h1 className="title">Bienvenidos a Evil Angel</h1>
      <p className="intro">
        En <span>Evil Angel</span>, somos más que una tienda de dispositivos. Somos una comunidad apasionada por ofrecerte productos que no solo se destacan por su calidad, sino que también se alinean con tu estilo de vida único.
      </p>
      <p className="intro">
        Fundada con la visión de conectar tecnología, sabor y estilo, en <span>Evil Angel</span> entendemos lo que buscas: un producto confiable que se ajuste a tus gustos, con una experiencia de compra que sea tan extraordinaria como el producto mismo.
      </p>

      {/* Sección: ¿Por qué elegirnos? */}
      <h2 className="section-title">¿Por qué elegirnos?</h2>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Productos premium seleccionados</h3>
          <p>
            Trabajamos con las marcas más destacadas del mercado, asegurándonos de que cada dispositivo esté diseñado para ofrecer calidad y durabilidad.
          </p>
        </div>
        <div className="grid-item">
          <h3>Variedad y personalización</h3>
          <p>
            Desde sabores atrevidos hasta clásicos favoritos, nuestro catálogo está pensado para que encuentres exactamente lo que buscas.
          </p>
        </div>
        <div className="grid-item">
          <h3>Atención personalizada</h3>
          <p>
            En cada interacción, nuestro objetivo es que te sientas comprendido y valorado. Queremos responder todas tus dudas, orientarte en cada elección y asegurarnos de que tengas una experiencia sin igual.
          </p>
        </div>
        <div className="grid-item">
          <h3>Innovación y tendencia</h3>
          <p>
            Estamos siempre al tanto de las últimas novedades para traerte productos innovadores que encajen con tus necesidades y estilo.
          </p>
        </div>
      </div>

      {/* Misión */}
      <div className="bot">
        <h2 className="section-title">Nuestra misión</h2>
        <p className="mission">
          Ofrecer una experiencia única, donde cada compra sea más que un simple intercambio: sea la puerta a una comunidad que comparte tu estilo y que apuesta por un enfoque moderno y sofisticado.
        </p>
      </div>
      
    </div>
  );
};

export default AcercaDe;
