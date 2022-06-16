import styled from "styled-components";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [cartNumber, setNumberCart] = useState(initial);

  const addCounter = () => {
    if (cartNumber >= initial && cartNumber <= stock) {
      setNumberCart(cartNumber + 1);
    }
  };

  const removeCounter = () => {
    if (cartNumber <= initial) {
      return;
    } else {
      setNumberCart(cartNumber - 1);
    }
    setNumberCart(cartNumber - 1);
  };


  return (
    <CountStyled>
      <Counter>
        <button className="button-add" onClick={() => removeCounter()}>-</button>
        <p>{cartNumber}</p>
        <button className="button-remove" onClick={() => addCounter()}>+</button>
      </Counter>
      <button
        onClick={() => {
          onAdd(cartNumber);
        }}
      >
        Agregar al carrito
      </button>
    </CountStyled>
  );
};

const CountStyled = styled.div`
  background: #232323;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 2rem;
  width: 15rem;
  padding: 1.8rem;
  border-radius: 5px;
  border: 1px solid #4e4e4e;
  button {
    margin: 3px;
    height: 20px;
    width: 7rem;
    background: #343434;
    padding: 4px;
    color: white;
    border: none;
    border-radius: 2px;
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
