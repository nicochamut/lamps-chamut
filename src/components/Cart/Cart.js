//Style
import styled from "styled-components";

//Context
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const Cart = ({ props }) => {
  const [productsCart, setProductsCart, clearCart, deleteItem] =
    useContext(CartContext);
  const [stateCart, setStateCart] = useState([]);

  return (
    <CartContainer>
      {/* <button
        onClick={() => {
          clear();
        }}
      >
        delete items
      </button> */}
      <CartStyled>
        <div className="each-card">
          <div>
            <img src={props.imageUrl} />
          </div>
          <div className="features">
            <h2>{props.title}</h2>
            <p>{props.features}</p>
          </div>
          <div>
            <button
              onClick={() => {
                deleteItem(props.id);
              }}
            >
              {" "}
              delete item
            </button>
          </div>
        </div>
      </CartStyled>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
`;

const CartStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .each-card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border: 1px solid black;
    width: 30rem;
    height: 19rem;
    .features {
      margin: 1rem;
      width: 20rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 15rem;
      button {
        width: 4rem;
      }
    }
    img {
      height: 15rem;
    }
  }
`;

export default Cart;
