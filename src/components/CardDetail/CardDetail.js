import { useState } from "react";

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
    consoleFunc,
  } = useContext(CartContext);

  const onAdd = (num) => {
    if (num === 0) {
      return;
    } else {
      setItemVisibility(false);
      addCart({ ...props }, num);
      consoleFunc(num);
    }
  };

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

  @media (max-width: 700px) {
    width: 25rem;
    height: 80vh;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid black;
  padding: 1rem;
  height: 42rem;
  padding: 2rem;
  background: #131313;
  box-shadow: 5px 5px 5px black;
  img {
    height: 30rem;
    margin-right: 2rem;
  }

  @media (max-width: 700px) {
    height: 48rem;
    width: 30rem;

    position: relative;

    img {
      height: 20rem;
      width: 20rem;
      object-fit: cover;
      margin-right: 0rem;
      margin-top: 6rem;
    }
    flex-direction: column;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 40rem;
  width: 35rem;
  font-size: 1rem;

  .title {
    width: 30rem;
    margin: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
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

  @media (max-width: 700px) {
    height: 20rem;
    width: 25rem;
    justify-content: center;

    .title {
      height: 0rem;
      width: 10rem;

      margin: 0rem;
      position: absolute;
      top: 3rem;
      border: none;
    }
    .feat {
      height: 5rem;
      width: 28rem;
      margin: 0rem;
      padding: 0rem;

      margin-top: 5rem;
    }
  }
`;

export default CardDetail;
