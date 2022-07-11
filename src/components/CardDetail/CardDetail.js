import { useState, useEffect } from "react";

//STATE
import { getProductById } from "../State/asyncMock";

//ID ROUTE
import { useParams } from "react-router-dom";

//CONTEXT
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

//style
import styled from "styled-components";

// Components
import ItemCount from "../ItemCount/ItemCount";
import PurchaseButton from "../PurchaseButton/PurchaseButton";

const CardDetail = ({ counterCart, setCounterCart }) => {
  const [card, setCard] = useState([]);
  const [itemVisibility, setItemVisibility] = useState(true);

  //CONTEXT
  const [productsCart, addCart] = useContext(CartContext);

  let { id } = useParams();

  const onAdd = (num) => {
    if (num === 0) {
      return;
    } else {
      setCounterCart(counterCart + num);
      setItemVisibility(false);
      console.log(card);
      addCart({ ...card }, num);
    }
  };

  useEffect(() => {
    console.log(productsCart);
  }, [productsCart]);

  useEffect(() => {
    getProductById(id).then((res) => setCard(res));
  }, [id]);

  return (
    <DetailStyle>
      <Card>
        <img src={card.imageUrl} alt={card.title}></img>
        <Features>
          <div className="title">
            <h1>{card.title}</h1>
          </div>
          <div className="feat">
            <h3>{card.features}</h3>
          </div>
          {itemVisibility ? (
            <ItemCount
              stock={card.stock}
              onAdd={onAdd}
              setCounterCart={setCounterCart}
              counterCart={counterCart}
            />
          ) : (
            <PurchaseButton />
          )}
        </Features>
      </Card>
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
  img {
    height: 45rem;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  height: 45rem;
  .title {
    border-bottom: 1px solid black;
    border-left: 1px solid black;
  }
  .feat {
    height: 10rem;
    width: 20rem;
    display: flex;
    justify-content: center;
    padding: 3rem;
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
