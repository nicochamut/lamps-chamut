import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = ({ prop }) => {
  return (
    <StyledItem>
      <h1>{prop.title}</h1>
      <Link to={`/detail/:${prop.id}`}>
        <div>
          <img src={prop.imageUrl} alt={prop.title} />
        </div>
      </Link>
      <p>{prop.features}</p>
      <h3>${prop.price}</h3>
      <Link to={`/detail/:${prop.id}`}>
        <button>see more</button>{" "}
      </Link>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  text-align: center;
  padding: 10px;
  margin: 5rem;
  width: 24rem;
  height: 42rem;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 1px 2px 5px #3333338d;
  color: #333333;
  font-size: 1.4rem;
  button {
    width: 8rem;
    height: 2rem;
    margin-bottom: 10px;
  }
  div {
    background: #ebebeb;
    width: 22rem;
    height: 27rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }
  h1 {
    border-bottom: 1px solid white;
    width: 24rem;
    font-family: "Montserrat", sans-serif;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    padding: 1rem;
  }
  h3 {
    color: #232323;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    margin-bottom: 5px;
  }

  img {
    width: 20rem;
    height: 25rem;
  }
`;
export default Item;
