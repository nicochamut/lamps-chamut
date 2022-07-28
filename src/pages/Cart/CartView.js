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
import { useEffect } from "react";

const CartView = () => {
  const {
    productsCart,
    addCart,
    clearCart,
    deleteItem,
    orderTotal,
    counterCart,
    setCounterCart,
    cartWCounter,
    setCartWCounter,
    consoleFunc,
  } = useContext(CartContext);

  const quantityCart = productsCart.map((item) => item.quantity);
  const rCart = quantityCart.reduce((acum, num) => acum + num, 0);

  useEffect(() => {
    consoleFunc(rCart);
  }, [productsCart]);

  return (
    <CartStyled>
      <div className="items-cart">
        {productsCart.length > 0 ? (
          productsCart.map((item, idx) => <Cart props={item} key={idx} />)
        ) : (
          <div className="message">
            <h1>
              You have to put sth here first :) <br></br>{" "}
              <Link to="/" className="link-to-back">
                Back to menu
              </Link>
            </h1>
          </div>
        )}
      </div>
      {productsCart.length > 0 ? <Summary /> : null}
    </CartStyled>
  );
};

const CartStyled = styled.div`
  margin: 3rem;
  padding: 2rem;
  height: 50rem;
  border: 1px solid white;
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
    width: 5px;
  }
  .items-cart::-webkit-scrollbar-thumb {
    background-color: #828282;
    border-radius: 5px;
  }
  .message {
    display: flex;
    justify-content: center;
    margin-bottom: 10rem;
    text-align: center;
    h1 {
      margin: 5rem;
      font-size: 4rem;
      color: #8f8f8f;
    }
    .link-to-back {
      text-decoration: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    width: 30rem;

    margin: 0rem;
    margin-top: 5rem;

    .items-cart {
      width: 30rem;
      margin-bottom: 5rem;
      height: 50rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default CartView;
