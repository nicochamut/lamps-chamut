//style
import styled from "styled-components";
import { TitleCategory } from "../../style";

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
import Spinner from "../Spinner/Spinner";

//framer motion
import { motion } from "framer-motion";
import { lineAnim } from "../../animations/Animations";

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
    <motion.div>
      <TitleCategory>
        <h1> All our lamps</h1>
        <motion.div variants={lineAnim}></motion.div>
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
          <div className="spinner">
            <Spinner />
          </div>
        )}
      </ItemListStyled>
    </motion.div>
  );
};

export default ItemListContainer;
