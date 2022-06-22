import styled from "styled-components";
import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ title, img, paragraph, stock }) => {
  // const initial = 1;
  // const [count, setCount] = useState(0);

  // const onAdd = (items) => {
  //   setCount(items + items);
  //   console.log(count);
  // };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <ListStyled>
      <CartStyled>
        <ItemList data={users} />

        {/* {
          <ItemCount
            count={count}
            initial={initial}
            stock={stock}
            // onAdd={onAdd}
          />
        } */}
      </CartStyled>
    </ListStyled>
  );
};

const ListStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  padding: 5px;
  border-radius: 5px;
  backdrop-filter: blur(5px);
  background: #42424224;
  width: 20rem;
  color: #c9c5ea;
  img {
    height: 23rem;
    object-fit: cover;
  }
`;

const CartStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      text-align: center;
      border-bottom: 1px solid #acacac;
      margin-top: 5px;
      width: 80%;
    }
    h5 {
      margin: 10px;
    }
  }
`;

export default ItemListContainer;
