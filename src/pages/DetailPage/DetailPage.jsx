import { useState } from "react"
import { ArrowLeft, Battery, DollarSign, Info, Plus, Minus } from "lucide-react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
//USECONTEXT
import { useContext } from "react";
import { VapersContext } from "../../context/VapersContext";
import { CartContext } from ".././../context/CartContext";

const DetailPage = () => {
  // Estado para manejar la cantidad 
  const [cantidad, setCantidad] = useState(1)
  const { vapersData} = useContext(VapersContext);
  const {id} = useParams()  
  const data = vapersData.filter((vaper) => vaper.id === id)
  const { cart, addToCart } = useContext(CartContext);

  // Funciones para manejar la cantidad
  const incrementQuantity = () => {
    setCantidad((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setCantidad((prev) => (prev > 1 ? prev - 1 : 1))
  }

  // Calcular precio total
  const totalPrice = data[0].precio * cantidad
  //anadir al carrito

  const navigate = useNavigate();
  const handleAddToCart = () => {
    addToCart({
      ...data[0],
      cantidad,
      totalPrice,
    });
    navigate("/catalogo");
  };
  const volver = () => {
    navigate("/catalogo");
  };
  
  console.log(cart)
  return (
    <div className="detail-container">
      <button className="back-button" onClick={volver}>
        <ArrowLeft className="icon" />
        Volver
      </button>

      <div className="detail-content">
        <div className="image-container">
          <img src={data[0].img} alt={`${data.marca} ${data.modelo}`} className="product-image" />
        </div>

        <div className="info-container">
          <h1 className="product-title">
          {data[0].marca} {data[0].modelo}
          </h1>

          <div className="specs">
            <div className="spec-item">
              <Battery className="icon" />
              <span>{data[0].puff} Puffs</span>
            </div>
            <div className="spec-item">
              <DollarSign className="icon" />
              <span className="price">${data[0].precio}</span>
            </div>
          </div>

          <div className="description">
            <h2>
              <Info className="icon" />
              {data[0].descripcion}
            </h2>
            <p>{data.descripcion}</p>
          </div>

          <div className="cantidad-selector">
            <h3>Cantidad</h3>
            <div className="cantidad-controls">
              <button className="cantidad-button" onClick={decrementQuantity} disabled={cantidad <= 1}>
                <Minus className="icon" />
              </button>
              <span className="cantidad-display">{cantidad}</span>
              <button className="cantidad-button" onClick={incrementQuantity}>
                <Plus className="icon" />
              </button>
            </div>
          </div>

          <div className="total-price">
            <span>Precio Total:</span>
            <span className="price">${totalPrice}</span>
          </div>

          <button className="buy-button" onClick={handleAddToCart}>Anadir al carrito</button>
        </div>
      </div>

      <style jsx>{`
        .detail-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background: #1a1a1a;
          min-height: 100vh;
          color: white;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: #E977F5;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem;
          margin-bottom: 2rem;
          transition: 0.3s ease;
        }

        .back-button:hover {
          transform: translateX(-5px);
        }

        .detail-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 20px;
          overflow: hidden;
          padding: 2rem;
        }

        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          aspect-ratio: 3/4;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-container:hover .product-image {
          transform: scale(1.05);
        }

        .info-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .product-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin: 0;
        }

        .specs {
          display: flex;
          gap: 2rem;
          margin-top: 1rem;
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
        }

        .price {
          color: #E977F5;
          font-weight: bold;
        }

        .description {
          background: rgba(0, 0, 0, 0.2);
          padding: 1.5rem;
          border-radius: 15px;
        }

        .description h2 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0;
          color: #E977F5;
        }

        .description p {
          line-height: 1.6;
          margin: 1rem 0 0;
          color: #e0e0e0;
        }

        .cantidad-selector {
          background: rgba(0, 0, 0, 0.2);
          padding: 1.5rem;
          border-radius: 15px;
        }

        .cantidad-selector h3 {
          margin: 0 0 1rem 0;
          color: #E977F5;
        }

        .cantidad-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cantidad-button {
          background: rgba(233, 119, 245, 0.1);
          border: 1px solid #E977F5;
          color: #E977F5;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cantidad-button:hover:not(:disabled) {
          background: #E977F5;
          color: white;
        }

        .cantidad-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cantidad-display {
          font-size: 1.2rem;
          min-width: 40px;
          text-align: center;
        }

        .total-price {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.3rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 15px;
        }

        .buy-button {
          background: #E977F5;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 10px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
          margin-top: auto;
        }

        .buy-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(233, 119, 245, 0.3);
        }

        .icon {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 768px) {
          .detail-content {
            grid-template-columns: 1fr;
          }

          .image-container {
            aspect-ratio: 1;
          }

          .product-title {
            font-size: 2rem;
          }

          .cantidad-controls {
            justify-content: center;
          }

          .total-price {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default DetailPage

