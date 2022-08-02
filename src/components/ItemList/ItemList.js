import Item from "../Item/Item";

//style
import { ItemListStyled } from "../../style";

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
