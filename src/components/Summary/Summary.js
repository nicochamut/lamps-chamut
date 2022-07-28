import styled from "styled-components";

//React
import { useState } from "react";

// react router
import { Link } from "react-router-dom";

//context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const Summary = () => {
  const { productsCart, orderTotal } = useContext(CartContext);

  if (productsCart.length > 0) {
  }
  return (
    <SummaryStyled>
      <h1>Summary</h1>
      <div className="grid">
        <h3>Order total</h3>
        <h3>${orderTotal()}</h3>

        <h3>Shipping</h3>

        <h3>$25</h3>
        <hr></hr>
        <hr></hr>
        <h3>Subtotal</h3>
        <h3>${orderTotal() + 25}</h3>
      </div>

      <div className="checkout-button">
        <Link to="/cart/checkout">
          {" "}
          <button>checkout</button>
        </Link>
      </div>
    </SummaryStyled>
  );
};

const SummaryStyled = styled.div`
  height: 39rem;
  color: white;
  width: 55rem;
  font-size: 1.5rem;
  border-left: 1px solid grey;
  padding-left: 7rem;
  padding-top: 2.3rem;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 40%);
    margin-top: 4rem;
    h3 {
      margin-top: 2rem;
      color: #aeaeae;
    }
    hr {
      margin-top: 10px;
    }
  }

  .checkout-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16rem;
    width: 22rem;

    button {
      width: 10rem;
      height: 3rem;
      background: #a83d3d;
      border: none;
      color: white;
      border-radius: 10px;
      transition: all 0.5s ease-in;
      font-size: 1rem;
      &:hover {
        background: #812222;
      }
    }
  }

  @media (max-width: 700px) {
    width: 30rem;
    border-top: 1px solid white;
    .grid {
      h3 {
        margin-top: 1rem;
      }
    }
  }
`;

export default Summary;
