//firebase
import { db } from "../../firestore/firestoreConfig";
import { collection, query, getDocs } from "firebase/firestore";

//Context
import { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [prodState, setProdState] = useState();

  const getP = async (seter) => {
    const q = query(collection(db, "lamps"));
    const querySnapshot = await getDocs(q);
    const docs = [];

    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    setProdState(docs);
  };

  return (
    <ProductsContext.Provider value={[getP, prodState]}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
