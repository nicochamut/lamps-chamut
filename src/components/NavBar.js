//Style
import styled from "styled-components";
//Components
import CartWidget from "../components/CartWidget/CartWidget";
import Categories from "./Categories/Categories";
//Router
import { Link } from "react-router-dom";

const NavBar = ({ counterCart }) => {
  return (
    <NavBarStyled>
      <Link className="brand" to="/">
        <h3>Lumière</h3>
      </Link>
      <Categories />

      <Clickables>
        <Link className="links" to="/category">
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
  height: 3rem;
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 2px 5px #1b1b1b;
  .brand {
    list-style: none;
    text-decoration: none;
    color: white;
  }
  h3 {
    margin-left: 2rem;
    font-size: 2rem;
    font-family: "Noto Serif", serif;
  }
`;

const Clickables = styled.ul`
  display: flex;
  justify-content: space-around;

  .links {
    margin-right: 8rem;
    list-style: none;
    text-decoration: none;
    color: white;
    &:hover {
      color: #19bfbf;
    }
  }
`;

export default NavBar;
