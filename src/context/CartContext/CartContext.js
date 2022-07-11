import { createContext, useState } from "react";

export const CartContext = createContext();

export const CtxProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [productsCart, setProductsCart] = useState([]);

  function isInCart(id) {
    return productsCart.some((item) => item.id === id);
  }

  const addCart = (prod, quantity) => {
    if (quantity === 0) {
      return;
    }

    let exist = isInCart(prod.id);

    if (exist) {
      let itemCart = productsCart.find((item) => item.id === prod.id);
      itemCart.quantity += quantity;
      setProductsCart([...productsCart]);
    } else {
      setProductsCart([...productsCart, { ...prod, quantity }]);
    }
  };

  const clearCart = () => {
    setProductsCart([]);
  };

  const deleteItem = (id) => {
    setProductsCart(productsCart.filter((i) => i.id !== id));
  };

  // const addItem = (item, quantity) => {
  //     let carga = {...item, quantity: quantity}
  //     setCarr(carr.concat(carga))
  // }

  return (
    <CartContext.Provider
      value={[productsCart, addCart, clearCart, deleteItem]}
    >
      {children}
    </CartContext.Provider>
  );
};
