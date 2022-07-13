//style
import styled from "styled-components";

//components
import Cart from "../../components/Cart/Cart";
import Summary from "../../components/Summary/Summary";
//
import { Link } from "react-router-dom";

// CONTEXT
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const CartView = () => {
  const [cartProducts, clearCart] = useContext(CartContext);

  return (
    <CartStyled>
      <div className="items-cart">
        {cartProducts.length > 0 ? (
          cartProducts.map((item, idx) => <Cart props={item} key={idx} />)
        ) : (
          <div className="message">
            <h1>
              {" "}
              You have to put sth here first :) <br></br>{" "}
              <Link to="/" className="link-to-back">
                {" "}
                Back to menu.{" "}
              </Link>{" "}
            </h1>
          </div>
        )}
      </div>
      {cartProducts.length > 0 ? <Summary /> : null}
    </CartStyled>
  );
};

const CartStyled = styled.div`
  margin: 3rem;
  padding: 2rem;
  height: 50rem;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .items-cart {
    height: 40rem;
    overflow-y: scroll;
    width: 52rem;
  }
  .items-cart::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px;
  }
  .items-cart::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 10px;
    border: 2px solid #f1f2f3;
  }
  .message {
    display: flex;
    justify-content: center;
    margin-bottom: 10rem;
    h1 {
      margin: 5rem;
      font-size: 4rem;
      color: black;
    }
    .link-to-back {
      text-decoration: none;
      color: #3b3b3b;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default CartView;
