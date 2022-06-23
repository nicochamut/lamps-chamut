import Item from "../Item/Item";
import styled from "styled-components";

const ItemList = ({ prop }) => {
  return (
    <ItemListStyled>
      {prop.map((item) => (
        <Item prop={item} key={item.id} />
      ))}
    </ItemListStyled>
  );
};

const ItemListStyled = styled.div`
  display: flex;
`;

export default ItemList;
