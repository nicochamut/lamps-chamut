import styled from "styled-components";
import { useEffect, useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [cartCounter, setCounterCart] = useState(1);
  const initial = 1;

  const addCounter = () => {
    if (cartCounter < stock) {
      setCounterCart(cartCounter + 1);
    }
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
      <button
        onClick={() => {
          onAdd(cartCounter);
        }}
      >
        Agregar al carrito
      </button>
    </CountStyled>
  );
};

const CountStyled = styled.div`
  background: #bababa14;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 4rem;
  width: 15rem;
  padding: 1.8rem;
  border-radius: 5px;
  border: 1px solid #222222;
  margin-bottom: #212121;
  margin-bottom: 2rem;

  button {
    margin: 3px;
    margin-top: 5px;
    height: 25px;
    width: 10rem;
    background: #c3c3c32a;
    padding: 4px;
    color: #000000;
    border: 1px solid black;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    color: white;
    &:hover {
      background: #444444;
      color: white;
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
  height: 1.5rem;
  border-radius: 5px;
  text-align: center;
  border: 1px solid grey;

  button {
    width: 2rem;
    height: 1.4rem;
    background: none;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default ItemCount;
