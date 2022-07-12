
//style
import styled from "styled-components";

//components
import Cart from "../../components/Cart/Cart";

//
import { Link } from "react-router-dom";

// CONTEXT
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const CartView = () => {
  const [cartProducts, clearCart] = useContext(CartContext);



  return (
    <CartStyled style={{ display: cartProducts.length > 0 ? "grid" : "flex"}}>
      {cartProducts.length > 0 ? (
        cartProducts.map((item, idx) => <Cart props={item} key={idx} />)
      ) : ( <h1> You have to put sth here first :) <br></br> <Link to="/" className="link-to-back"> Back to menu. </Link> </h1>)
      }
    </CartStyled>
  );
};

const CartStyled = styled.div`
  /* display: grid; */
  grid-template-columns: repeat(3, 33.3%);

  justify-content: center;
  align-items: center;
  margin: 3rem;
.link-to-back{
 text-decoration: none;
 color: #3b3b3b;
 display: flex;
 justify-content: center;
 align-items: center;
}
  padding: 2rem;
  height: 50rem;
  border: 1px solid black;
  h1 {
    margin: 5rem;
    font-size: 5rem;
    color: black;
  }
`;
export default CartView;
