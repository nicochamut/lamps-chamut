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
    };
    getP();
  }, [id]);
  return (
    <div>
      {" "}
      <CardDetail props={card} />{" "}
    </div>
  );
};

export default DetailSection;
