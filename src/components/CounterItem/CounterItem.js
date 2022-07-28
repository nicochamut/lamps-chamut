///STYLE
import styled from "styled-components";

//context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const CounterItem = ({ props }) => {
  // const [
  //   productsCart,
  //   addCart,
  //   clearCart,
  //   deleteItem,
  //   orderTotal,
  //   counterCart,
  //   setCounterCart,
  // ] = useContext(CartContext);

  return (
    <CounterI>
      <button
        onClick={() => {
          console.log(props.quantity--);
        }}
      >
        -
      </button>
      <p>{props.quantity}</p>
      <button onClick={() => {}}>+</button>
    </CounterI>
  );
};

const CounterI = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid grey;
  border-radius: 6px;
  background: none;

  button {
    width: 2rem;
    font-size: 1.2rem;
    border: none;
    background: none;
    color: white;
  }
  @media (max-width: 700px) {
    width: 6rem;
    position: absolute;
    bottom: 2rem;
    right: 4rem;
  }
`;
export default CounterItem;
