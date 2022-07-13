//style
import styled from "styled-components";
import { ItemListStyled } from "../../style";

//react
import { useState, useEffect } from "react";

// REACT ROUTER
import { Link } from "react-router-dom";

// Components
import Item from "../Item/Item";

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
    <ItemListStyled>
      {state.length > 0 ? (
        state.map((item) => (
          <Link to={`/detail/${item.id}`} key={item.id} className="link-items">
            <Item prop={item} key={item.id} />
          </Link>
        ))
      ) : (
        <h2>cargando..</h2>
      )}
    </ItemListStyled>
  );
};

export default ItemListContainer;
