import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
//context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { useEffect } from "react";

const CartWidget = () => {
  const { clearCart, cartWCounter, totalProducts } = useContext(CartContext);

  useEffect(() => {}, [totalProducts]);
  return (
    <CartStyled>
      <Link to={"/cart"} className="cart-counter">
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
        <p>{totalProducts()}</p>
      </Link>

      {totalProducts() > 0 ? (
        <button
          onClick={() => {
            clearCart();
          }}
        >
          clear cart
        </button>
      ) : null}
    </CartStyled>
  );
};

const CartStyled = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-right: 10px;
  list-style: none;
  text-decoration: none;

  color: black;
  .cart-counter {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  cursor: pointer;
  p {
    color: white;
    font-size: 1.2rem;
    margin: 3px;
    background: #333333;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
  }
  button {
    width: 6rem;
    border-radius: 0.7rem;
    margin: 0.1rem;
    text-decoration: none;
    list-style: none;
    border: 1px solid black;
    height: 2.2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: absolute;
    right: 7rem;

    &:hover {
      color: white;
      background: red;
    }
  }
  .icon {
    height: 2rem;
    align-self: center;
    transition: all 0.3s ease-out;
    color: white;
    &:hover {
      height: 2.4rem;
    }
  }
`;

export default CartWidget;
