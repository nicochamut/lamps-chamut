import styled from "styled-components";
import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ title, img, paragraph, stock }) => {
  const initial = 1;
  const [count, setCount] = useState(0);

  return (
    <ListStyled>
      <CartStyled>
        <img src={img} alt="img" />
        <div className="details">
          <h2>{title}</h2>
          <h5>{paragraph}</h5>
          <p>stock available: {stock + 1}</p>
        </div>
        <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
      </CartStyled>
    </ListStyled>
  );
};

const ListStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  padding: 5px;
  border-radius: 5px;
  backdrop-filter: blur(5px);
  background: #42424224;
  width: 20rem;
  color: #c9c5ea;
  img {
    height: 23rem;
    object-fit: cover;
  }
`;

const CartStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    h2 {
      text-align: center;
      border-bottom: 1px solid #acacac;
      margin-top: 5px;
      width: 80%;
    }
    h5 {
      margin: 10px;
    }
  }
`;

export default ItemListContainer;
