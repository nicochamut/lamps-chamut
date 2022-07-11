import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
//context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const CartWidget = ({ counterCart }) => {
  const [products, setProducts, clearCart] = useContext(CartContext);
  return (
    <Link to={"/cart"}>
      <CartStyled>
        <FontAwesomeIcon icon={faCartShopping} />
        <p>{counterCart}</p>
        <button
          onClick={() => {
            clearCart();
          }}
        >
          clear
        </button>
      </CartStyled>
    </Link>
  );
};

const CartStyled = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-right: 30px;
  list-style: none;
  text-decoration: none;
  color: black;
  cursor: pointer;
  p {
    color: white;
    font-size: 1.2rem;
    margin: 3px;
    background: #5f5f5f;
    border-radius: 50%;
    width: 1.5rem;
  }
`;

export default CartWidget;
