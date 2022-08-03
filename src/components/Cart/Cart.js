//Style
import styled from "styled-components";

//Context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

//Components
import CounterItem from "../CounterItem/CounterItem";

const Cart = ({ props }) => {
  const { deleteItem } = useContext(CartContext);

  return (
    <CartContainer>
      <CartStyled>
        <div className="each-card">
          <div>
            <img src={props.imageUrl} alt={props.title} />
          </div>
          <div className="features">
            <h2>{props.title}</h2>
          </div>
          <div>
            <CounterItem props={props} />
          </div>
          <div>
            <h3 className="quantity">{`total: $${
              props.quantity * props.price
            }`}</h3>
          </div>

          <button
            className="delete"
            onClick={() => {
              deleteItem(props.id);
            }}
          >
            {" "}
            x
          </button>
        </div>
      </CartStyled>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 700px) {
    height: 10rem;
    width: 100%;
    flex-direction: column;
  }
`;

const CartStyled = styled.div`
  display: flex;
  width: 50rem;

  .each-card {
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50rem;
    height: 8rem;
    margin-top: 10px;
    background: #0c0c0c;
    box-shadow: 5px 5px 5px black;
    .delete {
      font-size: 1.5rem;
      border: none;
      display: flex;
      justify-content: center;
      cursor: pointer;
      background: none;
      color: grey;
    }
    .features {
      width: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;

      flex-direction: column;
      height: 9rem;

      .quantity {
        top: 1.3rem;
        right: 1.3rem;
        background: red;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      button {
        width: 4rem;
      }
    }
    img {
      height: 6rem;
      width: 6rem;
      object-fit: cover;
    }
  }

  @media (max-width: 700px) {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;

    flex-direction: column;
    .each-card {
      position: relative;
      width: 27rem;
      margin: 2rem;
      .delete {
      }
      .features {
        width: 5rem;
        height: 3rem;
      }
      .quantity {
        position: absolute;
        right: 4.3rem;
        top: 2rem;
      }
    }
  }
`;

export default Cart;
