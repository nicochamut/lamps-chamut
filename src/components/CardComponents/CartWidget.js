import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CartWidget = ({ counterCart }) => {
  return (
    <CartStyled>
      <FontAwesomeIcon icon={faCartShopping} />
      <p>{counterCart}</p>
    </CartStyled>
  );
};

const CartStyled = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-right: 30px;
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
