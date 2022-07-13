import { useState, useEffect } from "react";

//STATE
import { getProductById } from "../State/asyncMock";

//ID ROUTE
import { useParams } from "react-router-dom";

// firebase
import { db } from "../../firestore/firestoreConfig";
import {
  collection,
  query,
  getDocs,
  documentId,
  where,
} from "firebase/firestore";

//CONTEXT
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

//style
import styled from "styled-components";

// Components
import ItemCount from "../ItemCount/ItemCount";
import PurchaseButton from "../PurchaseButton/PurchaseButton";

const CardDetail = ({ props }) => {
  const [itemVisibility, setItemVisibility] = useState(true);

  console.log(props);
  //CONTEXT
  const [
    productsCart,
    addCart,
    clearCart,
    deleteItem,
    orderTotal,
    counterCart,
    setCounterCart,
  ] = useContext(CartContext);

  let { id } = useParams();

  const onAdd = (num) => {
    if (num === 0) {
      return;
    } else {
      setCounterCart(counterCart + num);
      setItemVisibility(false);
      addCart({ ...props }, num);
    }
  };

  // useEffect(() => {
  //   const getP = async () => {
  //     const q = query(collection(db, "lamps"), where(documentId(), "==", id));
  //     const querySnapshot = await getDocs(q);
  //     const docs = [];
  //     querySnapshot.forEach((doc) => {
  //       docs.push({ ...doc.data(), id: doc.id });
  //       console.log(docs[0]);
  //     });

  //     setCard(docs);
  //   };
  //   getP();
  // }, []);

  return (
    <DetailStyle>
      {props.category ? (
        <Card>
          <img src={props.imageUrl} />
          <Features>
            <div className="title">
              <h1>{props.title}</h1>
            </div>
            <div> </div>
            <div className="feat">
              <h3>{props.features}</h3>
            </div>
            {itemVisibility ? (
              <ItemCount stock={props.stock} onAdd={onAdd} />
            ) : (
              <PurchaseButton />
            )}
          </Features>
        </Card>
      ) : (
        <h1>cargando...</h1>
      )}
    </DetailStyle>
  );
};
const DetailStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border: 1px solid black;
  padding: 1rem;
  height: 50rem;
  padding: 2rem;
  img {
    height: 45rem;
    margin-right: 2rem;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 49rem;
  width: 35rem;
  font-size: 1.5rem;

  .title {
    width: 30rem;
    margin: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #585853;
    color: white;
    background: linear-gradient(to right, #333333, #666666);
  }

  .feat {
    height: 20rem;
    width: 40rem;
    display: flex;
    justify-content: center;
    padding: 3rem;
    text-align: center;
    padding-bottom: 12rem;
    margin: 2rem;
  }

  h1 {
    font-size: 3rem;
    margin: 2rem;
    border-bottom: 1px solid white;
    width: 15rem;
    text-align: center;
    padding: 2px;
  }
`;

export default CardDetail;
