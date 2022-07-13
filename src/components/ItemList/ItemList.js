import Item from "../Item/Item";
import { ItemListStyled } from "../../style";

//react-router
import { Link } from "react-router-dom";

const ItemList = ({ prop }) => {
  return (
    <ItemListStyled>
      {prop.map((item) => (
        <Link to={`/detail/${item.id}`} key={item.id}>
          <Item prop={item} key={item.id} />
        </Link>
      ))}
    </ItemListStyled>
  );
};

export default ItemList;
