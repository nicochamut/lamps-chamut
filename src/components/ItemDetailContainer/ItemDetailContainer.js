import { useEffect, useState } from "react";
import { getProductById } from "../State/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import styled from "styled-components";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = 2;

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setItem(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("item:", item);

  return (
    <DetailContainer>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <ItemDetail
          img={item.imageUrl}
          name={item.title}
          description={item.features}
          stock={item.stock}
        />
      )}
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default ItemDetailContainer;
