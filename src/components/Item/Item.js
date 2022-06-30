import styled from "styled-components";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = ({ prop }) => {
  return (
    <StyledItem>
      <h1>{prop.title}</h1>
      <Link to={`/category/:id/item/${prop.id}`}>
        <img src={prop.imageUrl} alt={prop.title} />
      </Link>
      <p>{prop.features}</p>
      <h3>${prop.price}</h3>
    
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #333333;
  text-align: center;
  padding: 2px;
  margin: 5rem;
  width: 22rem;
  height: 39rem;
  border-radius: 5px;
  box-shadow: 1px 5px 10px black;
  h3 {
    color: #aacacd;
  }
  img {
    width: 20rem;
    height: 25rem;
  }
`;
export default Item;
