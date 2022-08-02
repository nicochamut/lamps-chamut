import Item from "../../components/Item/Item";
import { ItemListStyled } from "../../style";

// firebase
import { db } from "../../firestore/firestoreConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

//style
import { TitleCategory } from "../../style";

// React
import { useState, useEffect } from "react";

// useParams
import { useParams } from "react-router";

// ROUTER
import { Link } from "react-router-dom";
import { lineAnim } from "../../animations/Animations";

//framer motion
import { motion } from "framer-motion";

const Category = () => {
  const [data, setData] = useState([]);

  const { category } = useParams();

  useEffect(() => {
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
      setData(docs);
    };
    getP();
  }, [category]);

  return (
    <div>
      <TitleCategory>
        {category === "desklamps" ? <h1>Desk lamps</h1> : <h1>Floor lamps</h1>}
        <motion.div
          variants={lineAnim}
          initial="hidden"
          animate="show"
        ></motion.div>
      </TitleCategory>
      <ItemListStyled>
        {data &&
          data.map((x) => (
            <Link to={`/detail/${x.id}`} key={x.id} className="link-items ">
              <Item prop={x} key={x.id} />
            </Link>
          ))}
      </ItemListStyled>
    </div>
  );
};

export default Category;
