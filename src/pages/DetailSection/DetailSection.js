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

const DetailSection = () => {
  const [card, setCard] = useState([]);

  const {
    productsCart,
    addCart,
    clearCart,
    deleteItem,
    orderTotal,
    counterCart,
    setCounterCart,
    cartWCounter,
    setCartWCounter,
  } = useContext(CartContext);

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
