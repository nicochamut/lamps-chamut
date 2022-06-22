import styled from "styled-components";
import CartWidget from "./CardComponents/CartWidget";

const NavBar = ({ counterCart }) => {
  console.log(counterCart);
  return (
    <NavBarStyled>
      <h3>LAMPS</h3>

      <Clickables>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">About</a>
        </li>
        <li>
          <a href="/#">Gallery</a>
        </li>
        <li>
          <a href="/#">Contact</a>
        </li>
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
  h3 {
    margin-left: 2rem;
    font-size: 2rem;
    font-family: "Noto Serif", serif;
  }
`;

const Clickables = styled.ul`
  display: flex;
  justify-content: space-around;

  li {
    margin-right: 8rem;
    list-style: none;
    a {
      text-decoration: none;
      color: white;
      &:hover {
        color: #19bfbf;
      }
    }
  }
`;

export default NavBar;
