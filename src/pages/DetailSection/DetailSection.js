import CardDetail from "../../components/CardDetail/CardDetail";

// REACT
import { useState, useEffect } from "react";

// ID ROUTE
import { useParams } from "react-router";

// FIREBASE
import { db } from "../../firestore/firestoreConfig";
import {
  collection,
  query,
  getDocs,
  documentId,
  where,
} from "firebase/firestore";

// CONTEXT
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

// STYLED COMPONENTS
import styled from "styled-components";

// COMPONENTS
import ItemCount from "../../components/ItemCount/ItemCount";
import PurchaseButton from "../../components/PurchaseButton/PurchaseButton";

const DetailSection = () => {
  const [card, setCard] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getP = async () => {
      const q = query(collection(db, "lamps"), where(documentId(), "==", id));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setCard(...docs);
      console.log(card);
    };
    getP();
  }, []);
  return (
    <div>
      {" "}
      <CardDetail props={card} />{" "}
    </div>
  );
};

export default DetailSection;
