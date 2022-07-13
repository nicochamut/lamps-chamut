//style
import styled from "styled-components";

//react
import { useState, useEffect } from "react";

// Components

import ItemList from "../ItemList/ItemList";
import { getProducts } from "../State/asyncMock";

//firebase
import { db } from "../../firestore/firestoreConfig";
import { collection, query, getDocs } from "firebase/firestore";

//context
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsContext";

const ItemListContainer = () => {
  const [state, setState] = useState([]);

  const getP = async (seter) => {
    const q = query(collection(db, "lamps"));
    const querySnapshot = await getDocs(q);
    const docs = [];

    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    setState(docs);
  };

  useEffect(() => {
    getP();
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
