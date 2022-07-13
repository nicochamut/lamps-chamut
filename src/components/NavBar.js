//Style
import styled from "styled-components";
//Components
import CartWidget from "../components/CartWidget/CartWidget";
import Categories from "./Categories/Categories";
//Router
import { Link } from "react-router-dom";

//context
import { useContext } from "react";
import { CartContext } from "../context/CartContext/CartContext";

const NavBar = () => {
  const [clearCart, counterCart, setCounterCart] = useContext(CartContext);

  return (
    <NavBarStyled>
      <Link className="brand" to="/">
        <h3>Lumière</h3>
      </Link>
      <Categories />
      <Clickables>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/about">
          About
        </Link>
        <Link className="links" to="/contact">
          Contact
        </Link>
      </Clickables>
      <CartWidget counterCart={counterCart} />
    </NavBarStyled>
  );
};

const NavBarStyled = styled.div`
  height: 3.5rem;

  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  color: black;
  list-style: none;
  text-decoration: none;

  h3 {
    margin-left: 2rem;
    font-size: 2rem;
    font-family: "Noto Serif", serif;
  }
  .brand {
    list-style: none;
    text-decoration: none;
    color: black;
  }
`;

const Clickables = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  .links {
    margin-right: 8rem;
    list-style: none;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    &:hover {
      color: #e58b0d;
    }
  }
`;

export default NavBar;
