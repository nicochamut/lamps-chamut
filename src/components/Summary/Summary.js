import styled from "styled-components";

//React
import { useState } from "react";
//context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const Summary = () => {
  const [productsCart, addCart, clearCart, deleteItem, orderTotal] =
    useContext(CartContext);

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
    </SummaryStyled>
  );
};

const SummaryStyled = styled.div`
  height: 39rem;
  color: black;
  width: 55rem;
  font-size: 1.5rem;
  border-left: 1px solid black;
  padding-left: 7rem;
  padding-top: 2.3rem;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 40%);
    margin-top: 4rem;
    h3 {
      margin-top: 2rem;
      color: #555555;
    }
    hr {
      margin-top: 10px;
    }
  }
`;

export default Summary;
