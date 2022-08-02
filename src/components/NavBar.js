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
  const { counterCart } = useContext(CartContext);

  return (
    <NavBarStyled>
      <Link className="brand" to="/">
        <h3>Lumière</h3>
      </Link>
      <Categories />
      <Clickables>
        <div>
          <Link className="links" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="links" to="/about">
            About
          </Link>
        </div>
        <div>
          <Link className="links" to="/contact">
            Contact
          </Link>
        </div>
      </Clickables>
      <div className="widget">
        <CartWidget counterCart={counterCart} />
      </div>
    </NavBarStyled>
  );
};

const NavBarStyled = styled.div`
  height: 3.5rem;

  background: #2b2b2b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  color: #fff;
  list-style: none;
  text-decoration: none;

  h3 {
    margin-left: 2rem;
    font-size: 2rem;
    font-family: "Noto Serif", serif;
    color: white;
  }
  .brand {
    list-style: none;
    text-decoration: none;
    color: black;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    overflow-x: hidden;
    height: 8rem;
    .widget {
      position: absolute;
      right: 1rem;
    }
  }
`;

const Clickables = styled.ul`
  margin: 2rem;
  font-size: 1.5rem;

  width: 40rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .links {
    list-style: none;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    color: white;
    &:hover {
      color: #e58b0d;
    }
  }
`;

export default NavBar;
