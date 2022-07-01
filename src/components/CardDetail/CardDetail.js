import { useState, useEffect } from "react";
import { getProductById } from "../State/asyncMock";
import { useParams } from "react-router-dom";

//style
import styled from "styled-components";

// Components
import ItemCount from "../ItemCount/ItemCount";
import PurchaseButton from "../PurchaseButton/PurchaseButton";

const CardDetail = ({addToCounter, counterCart, setCounterCart}) => {
  const [card, setCard] = useState([]);
  const [itemVisibility, setItemVisibility] = useState(true)

  let { id } = useParams();

  const onAdd = (num) => {
    if(num === 0){
      return
    } else {   
      setCounterCart(counterCart + num)
       setItemVisibility(false)}

   
  }
  console.log(counterCart)
 

  useEffect(() => {
    getProductById(id).then((res) => setCard(res));
  },[]);
  return (
    <Card>
      <h1>{card.title}</h1>
       <img src={card.imageUrl} alt={card.title}></img> 
      <Features>
        <h3>{card.features}</h3>
      </Features>
      { itemVisibility ? <ItemCount stock={card.stock} onAdd={onAdd} setCounterCart={setCounterCart} counterCart={counterCart} /> : <PurchaseButton />}
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    margin: 2rem;
    border-bottom: 1px solid white;
    width: 15rem;
    text-align: center;
    padding: 2px;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  margin: 3rem;
`;

export default CardDetail;
