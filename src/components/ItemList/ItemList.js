import Item from "../Item/Item";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const ItemList = ({ prop }) => {
  return (
    <ItemListStyled>
      {prop.map((item) => (
        <Item prop={item} key={item.id} />
      ))}
    </ItemListStyled>
  );
};

const ItemListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

export default ItemList;
