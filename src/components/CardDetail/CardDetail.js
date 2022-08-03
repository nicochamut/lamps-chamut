import { useState } from "react";

//CONTEXT
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

//style
import styled from "styled-components";

// Components
import ItemCount from "../ItemCount/ItemCount";
import PurchaseButton from "../PurchaseButton/PurchaseButton";
import Spinner from "../Spinner/Spinner";

//framer motion
import { motion } from "framer-motion";
import { fadeOut } from "../../animations/Animations";

const CardDetail = ({ props }) => {
  const [itemVisibility, setItemVisibility] = useState(true);

  const { addCart } = useContext(CartContext);

  const onAdd = (num) => {
    if (num === 0) {
      return;
    } else {
      setItemVisibility(false);
      addCart({ ...props }, num);
    }
  };

  return (
    <DetailStyle
      variants={fadeOut}
      initial="hidden"
      animate="show"
      exit="exit"
      layout
    >
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
              <ItemCount stock={props.stock} props={props} onAdd={onAdd} />
            ) : (
              <PurchaseButton />
            )}
          </Features>
        </Card>
      ) : (
        <Spinner />
      )}
    </DetailStyle>
  );
};

const DetailStyle = styled(motion.div)`
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
  height: 38rem;
  padding: 2rem;
  background: linear-gradient(to left, #0b0b0b, #303030);
  box-shadow: 10px 10px 15px #000000;
  border-radius: 10px;

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
    height: 15rem;
    width: 40rem;
    display: flex;
    justify-content: center;
    padding: 3rem;
    text-align: center;
    padding-bottom: 8rem;
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
