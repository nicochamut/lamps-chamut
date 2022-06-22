import Item from "./Item";

const ItemList = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((inf) => (
        <Item items={inf} key={inf.id} />
      ))}
    </div>
  );
};

export default ItemList;
