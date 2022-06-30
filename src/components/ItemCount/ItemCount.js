import styled from "styled-components";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [cartCounter, setCounterCart] = useState(1);
  const initial = 1;
  const addCounter = () => {
    if (cartCounter < stock) setCounterCart(cartCounter + 1);
  };

  const removeCounter = () => {
    if (cartCounter >= initial) {
      setCounterCart(cartCounter - 1);
    } else {
    }
  };

  return (
    <CountStyled>
      <Counter>
        <button onClick={() => removeCounter()}>-</button>
        <p>{cartCounter}</p>
        <button onClick={() => addCounter()}>+</button>
      </Counter>
      <button onClick={() => {onAdd()}}>Agregar al carrito</button>
    </CountStyled>
  );
};

const CountStyled = styled.div`
  background: #232323;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 5rem;
  width: 15rem;
  padding: 1.8rem;
  border-radius: 5px;
  border: 1px solid #4e4e4e;
  button {
    margin: 3px;
    margin-top: 5px;
    height: 20px;
    width: 10rem;
    background: #343434;
    padding: 4px;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
      background: #616161;
    }
  }
  div {
  }
`;

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7rem;
  height: 1.6rem;
  border-radius: 5px;
  text-align: center;
  border: 1px solid white;

  button {
    width: 2rem;
    background: none;
    border: none;
    color: white;
  }
`;

export default ItemCount;
