import styled from "styled-components";
import { useState, useEffect } from "react";
// Components

import ItemList from "../ItemList/ItemList";
import { getProducts } from "../State/asyncMock";



const ItemListContainer = () => {
  const [state, setState] = useState([]);


  useEffect(() => {
    getProducts().then((item) => setState(item));

  }, []);

  return (
    <ListStyled>
      {state.length > 0 ? <ItemList prop={state} /> : <h2>cargando...</h2>}
    </ListStyled>
  );
};

const ListStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 23rem;
    object-fit: cover;
  }
`;

export default ItemListContainer;
