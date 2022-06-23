import styled from "styled-components";
import { useState, useEffect } from "react";
// Components
// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../State/asyncMock";

const ItemListContainer = () => {
  const [state, setState] = useState([]);

  // const onAdd = (items) => {
  //   setCount(items + items);
  //   console.log(count);
  // };

  useEffect(() => {
    getProducts().then((item) => setState(item));
  }, []);

  console.log(state);
  return (
    <ListStyled>
      <CartStyled>
        {state.length > 0 ? <ItemList prop={state} /> : <h2>cargando...</h2>}
      </CartStyled>
    </ListStyled>
  );
};

const ListStyled = styled.div`
  img {
    height: 23rem;
    object-fit: cover;
  }
`;

const CartStyled = styled.div``;

export default ItemListContainer;
