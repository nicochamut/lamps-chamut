import { createContext, useState } from "react";

export const CartContext = createContext();

export const CtxProvider = ({ children }) => {
  const [counterCart, setCounterCart] = useState(0);
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

    setCounterCart(0);
  };

  const deleteItem = (id) => {
    setProductsCart(productsCart.filter((i) => i.id !== id));
  };

  const orderTotal = () => {
    return productsCart.reduce(
      (acum, item) => acum + item.quantity * item.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={[
        productsCart,
        addCart,
        clearCart,
        deleteItem,
        orderTotal,
        counterCart,
        setCounterCart,
      ]}
    >
      {children}
    </CartContext.Provider>
  );
};
