import styled from "styled-components";
import Cart from "../../components/Cart/Cart";

// CONTEXT
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const CartView = () => {
  const [cartProducts, clearCart] = useContext(CartContext);

  const [newCart, setnewCart] = useState([]);

  //   useEffect(() => {
  //     console.log(cartProducts);
  //   }, [cartProducts]);
  return (
    <CartStyled>
      {cartProducts.length > 0 ? (
        cartProducts.map((item, idx) => <Cart props={item} key={idx} />)
      ) : (
        <h1>"agrega pr"</h1>
      )}
    </CartStyled>
  );
};

const CartStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  justify-content: center;
  align-items: center;
  margin: 5rem;

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
