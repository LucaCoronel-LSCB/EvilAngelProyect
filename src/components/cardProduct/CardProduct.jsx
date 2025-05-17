import React from 'react';
import styled from 'styled-components';

const CardProduct = ({ vapersData }) => {
  return (
    <StyledWrapper>
      <div className={`card ${vapersData.stock === 0 ? 'sin-stock' : 'con-stock'}`}>
        <img className="img" src={vapersData.img} alt={vapersData.marca} />
        <div className="textBox">
          <p className="text head">{vapersData.marca} {vapersData.modelo}</p>
          <span>{vapersData.puff} Puffs</span>
          <p className="text price">${vapersData.precio}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 200px;
    height: 300px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center; /* centra vertical */
    align-items: center;     /* centra horizontal */
    color: white;
    transition: 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  /* Cuando no hay stock */
  .sin-stock {
    background: #555;
    filter: grayscale(100%);
    cursor: not-allowed;
  }

  /* Cuando hay stock */
  .con-stock {
    background: #1a1a1a;
  }

  .img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    transition: 0.3s ease-in-out;
    z-index: 1;
  }

  .textBox {
    width: 100%;
    padding: 10px;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: 0.3s ease-in-out;
    position: absolute;
    bottom: 0;
    z-index: 2;
  }

  .textBox > .text {
    font-weight: bold;
  }

  .textBox > .head {
    font-size: 18px;
  }

  .textBox > .price {
    font-size: 16px;
    color: #E977F5;
  }

  .textBox > span {
    font-size: 12px;
    color: lightgray;
  }

  /* Efecto Hover solo cuando hay stock */
  .con-stock:hover > .img {
    transform: scale(1.1);
  }

  .con-stock:hover {
    transform: scale(1.05) rotate(-2deg);
  }
`;

export default CardProduct;
