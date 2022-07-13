import Item from "../../components/Item/Item";
import { ItemListStyled } from "../../style";

// firebase
import { db } from "../../firestore/firestoreConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

// React
import { useState, useEffect } from "react";

// useParams
import { useParams } from "react-router";

// ROUTER
import { Link } from "react-router-dom";

// Components
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Category = () => {
  const [data, setData] = useState([]);

  const { category } = useParams();

  console.log(category);
  useEffect(() => {
    console.log(category);
    const getP = async () => {
      const q = query(
        collection(db, "lamps"),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setData(docs);
    };
    getP();
  }, [category]);

  return (
    <ItemListStyled>
      {data &&
        data.map((x) => (
          <Link to={`/category/${category}`} className="link-items ">
            <Item prop={x} key={x.id} />
          </Link>
        ))}
    </ItemListStyled>
  );
};

export default Category;
