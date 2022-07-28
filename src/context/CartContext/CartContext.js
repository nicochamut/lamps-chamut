import { createContext, useState } from "react";

export const CartContext = createContext();

export const CtxProvider = ({ children }) => {
  const [counterCart, setCounterCart] = useState(0);
  const [productsCart, setProductsCart] = useState([]);
  const [cartWCounter, setCartWCounter] = useState(0);

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

  const totalProducts = () => {
    let total = 0;
    productsCart.forEach((item) => (total += item.quantity));
    return total;
    console.log(total);
  };

  const consoleFunc = (num) => {
    setCartWCounter(cartWCounter + num);
  };
  return (
    <CartContext.Provider
      value={{
        productsCart,
        addCart,
        clearCart,
        deleteItem,
        orderTotal,
        counterCart,
        setCounterCart,
        cartWCounter,
        setCartWCounter,
        consoleFunc,
        totalProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
