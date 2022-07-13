//Style
import styled from "styled-components";

//Context
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import CounterItem from "../CounterItem/CounterItem";

//COMPONENTS

const Cart = ({ props }) => {
  const [productsCart, setProductsCart, clearCart, deleteItem] =
    useContext(CartContext);
  const [stateCart, setStateCart] = useState([]);

  return (
    <CartContainer>
      <CartStyled>
        <div className="each-card">
          <div>
            <img src={props.imageUrl} />
          </div>
          <div className="features">
            <h2>{props.title}</h2>
          </div>
          <div>
            {" "}
            <CounterItem props={props} />
          </div>
          <div>
            {" "}
            <h3 className="quantity">{`total: $${
              props.quantity * props.price
            }`}</h3>
          </div>

          <button
            className="delete"
            onClick={() => {
              deleteItem(props.id);
            }}
          >
            {" "}
            x
          </button>
        </div>
      </CartStyled>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const CartStyled = styled.div`
  display: flex;
  width: 50rem;
  .each-card {
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50rem;
    height: 8rem;
    margin-top: 10px;
    .delete {
      font-size: 1.5rem;
      border: none;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
    .features {
      margin: 1rem;
      width: 10rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 9rem;

      .quantity {
        top: 1.3rem;
        right: 1.3rem;
        background: red;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      button {
        width: 4rem;
      }
    }
    img {
      height: 6rem;
      width: 6rem;
      object-fit: cover;
    }
  }
`;

export default Cart;
