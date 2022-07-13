import Item from "../Item/Item";
import { ItemListStyled } from "../../style";

//style
import styled from "styled-components";

//react-router
import { Link } from "react-router-dom";

const ItemList = ({ prop }) => {
  return (
    <ItemListStyled>
      {prop.map((item) => (
        <Link to={`/detail/${item.id}`} key={item.id} className="link-items">
          <Item prop={item} key={item.id} />
        </Link>
      ))}
    </ItemListStyled>
  );
};

export default ItemList;
