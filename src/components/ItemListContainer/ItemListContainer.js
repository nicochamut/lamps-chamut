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
    <div>
      <TitleCategory>
        <h1> All our lamps</h1>
      </TitleCategory>
      <ItemListStyled>
        {state.length > 0 ? (
          state.map((item) => (
            <Link
              to={`/detail/${item.id}`}
              key={item.id}
              className="link-items"
            >
              <Item prop={item} />
            </Link>
          ))
        ) : (
          <h2>cargando..</h2>
        )}
      </ItemListStyled>
    </div>
  );
};

const TitleCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 5rem;
  margin-top: 2rem;
`;

export default ItemListContainer;
