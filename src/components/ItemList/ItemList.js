import Item from "../Item/Item";
import { ItemListStyled } from "../../style";

const ItemList = ({ prop }) => {
  return (
    <ItemListStyled>
      {prop.map((item) => (
        <Item prop={item} key={item.id} />
      ))}
    </ItemListStyled>
  );
};



export default ItemList;
