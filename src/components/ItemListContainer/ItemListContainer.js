import styled from "styled-components";
import { useState, useEffect } from "react";
// Components
// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../State/asyncMock";
import Categories from "../Categories/Categories";
import { useLocation, useParams } from "react-router-dom";
import Item from "../Item/Item";

const ItemListContainer = () => {
  const [state, setState] = useState([]);
  let { id } = useParams();

  // const onAdd = (items) => {
  //   setCount(items + items);
  //   console.log(count);
  // };

  useEffect(() => {
    getProducts().then((item) => setState(item));

    const deskLamps = state.filter((x) => x.category === "desk lamps");
    const floorLamps = state.filter((x) => x.category === "floor lamps");

    getProductsByCategory("/category/floor-lamps").then((item) =>
      setState(item)
    );
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
