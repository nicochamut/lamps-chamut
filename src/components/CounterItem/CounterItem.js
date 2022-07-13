///STYLE
import styled from "styled-components";

//context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const CounterItem = ({ props }) => {
  const [
    productsCart,
    addCart,
    clearCart,
    deleteItem,
    orderTotal,
    counterCart,
    setCounterCart,
  ] = useContext(CartContext);

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
  border: 1px solid black;
  border-radius: 6px;

  button {
    width: 2rem;
    font-size: 1.2rem;
    border: none;
  }
`;
export default CounterItem;
