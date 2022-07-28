import styled from "styled-components";
import { Link } from "react-router-dom";

const PurchaseButton = () => {
  return (
    <PurchaseStyled>
      <Link to="/" className="link">
        <Button2>Keep buying</Button2>
      </Link>
      <Link className="link" to="/cart">
        {" "}
        <Button> Go to cart</Button>{" "}
      </Link>
    </PurchaseStyled>
  );
};

const PurchaseStyled = styled.div`
  display: flex;
  margin-bottom: 2rem;
  .link {
    list-style: none;
    text-decoration: none;
    color: white;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 10px;
  width: 7rem;
  height: 2.6rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 0.8rem;
  margin: 0.5rem;
  &:hover {
    background: #65011b;
  }
`;

const Button2 = styled(Button)`
  background: green;
`;

export default PurchaseButton;
