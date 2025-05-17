import { useContext, useState } from "react";
import { ShoppingCart, Trash2, Send, AlertCircle } from "lucide-react";
import { CartContext } from "../../context/CartContext";

const Carrito = () => {
  const { cart, clearCart, deleteProduct } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  const calculateProductos = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  };

  const generateWhatsAppLink = () => {
    if (cart.length === 0) return "#";
    let message = "Hola, quiero comprar los siguientes productos:%0A";
    cart.forEach(item => {
      message += `El vaper --> ${item.marca}-${item.modelo} x ${item.cantidad} unid , TOTAL : ${item.totalPrice}%0A`;
    });
    message += `%0A Total de la compra : $${calculateTotal()}`;
    return `https://wa.me/3516655470?text=${message}`;
  };

  return (
    <div className="cartContainer">
      <div className="cartContent">
        <div className="cartHeader">
          <h2>
            <ShoppingCart className="icon" />
            Carrito de Compras
          </h2>
          <p>total : {calculateProductos()}</p>
        </div>

        {cart.length === 0 ? (
          <div className="emptyCart">
            <AlertCircle className="largeIcon" />
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="cartItems">
              {cart.map((item) => (
                <div key={item.id} className="cartItem">
                  <div className="itemImage">
                    <img src={item.img || "/placeholder.svg"} alt={item.name} />
                  </div>
                  <div className="itemDetails">
                    <h3>{item.marca}</h3>
                    <p>Cantidad : {item.cantidad}</p>
                    <p>Precio Total : <span className="price">${item.totalPrice}</span></p>
                  </div>
                  <button onClick={() => deleteProduct(item.id)} className="deleteButton">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cartSummary">
              <div className="totalPrice">
                <span>Total:</span>
                <span className="price">${calculateTotal()}</span>
              </div>

              <div className="cartActions">
                <button className="clearButton" onClick={clearCart}>
                  <Trash2 className="icon" />
                  Vaciar carrito
                </button>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buyButton"
                >
                  <Send className="icon" />
                  Finalizar compra por WhatsApp
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .cartContainer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background: #1a1a1a;
          min-height: 100vh;
          color: white;
        }

        .cartContent {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 20px;
          padding: 2rem;
        }

        .cartHeader {
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(233, 119, 245, 0.2);
          padding-bottom: 1rem;
          display: flex;
          justify-content: space-between;
          padding: 20px;
        }

        .cartHeader h2 {
          color: #e977f5;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0;
        }

        .cartHeader p {
          color: #e977f5;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .emptyCart {
          text-align: center;
          color: #888;
        }

        .largeIcon {
          width: 48px;
          height: 48px;
        }

        .cartItems {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .cartItem {
          display: flex;
          gap: 1rem;
          background: rgba(0, 0, 0, 0.2);
          padding: 1rem;
          border-radius: 15px;
          align-items: center;
          flex-wrap: wrap;
        }

        .itemImage img {
          width: 100px;
          height: auto;
          border-radius: 10px;
        }

        .itemDetails {
          flex: 1;
        }

        .itemDetails h3 {
          margin: 0 0 0.5rem 0;
          color: white;
        }

        .price {
          color: #e977f5;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .quantityControl {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .quantityControl button {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          padding: 5px;
          cursor: pointer;
        }

        .deleteButton {
          background: rgba(255, 0, 0, 0.2);
          border: none;
          color: white;
          padding: 5px;
          cursor: pointer;
        }

        .cartSummary {
          background: rgba(0, 0, 0, 0.2);
          padding: 1.5rem;
          border-radius: 15px;
        }

        .totalPrice {
          display: flex;
          justify-content: space-between;
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
        }

        .cartActions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .clearButton,
        .buyButton {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 160px;
          flex: 1 1 200px;
          max-width: 100%;
        }

        .clearButton {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .buyButton {
          background: #e977f5;
          color: white;
          text-decoration: none;
          text-align: center;
        }

        .buyButton:hover {
          transform: translateY(-2px);
        }

        .icon {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 600px) {
          .cartHeader {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Carrito;
