import { createContext, useState } from "react";

export const CartContext = createContext();

export const CtxProvider = ({ children }) => {
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
  };

  const itemQuantity = (id, addorrest) => {
    const item = productsCart.find((i) => i.id === id);

    if (addorrest === "rest" && item.quantity > 1) {
      item.quantity--;
    } else if (addorrest === "add" && item.quantity <= item.stock - 1) {
      item.quantity++;
    }

    const newCart = [];

    productsCart.map((i) => {
      if (i.id === item.id) {
        i = item;
      }
      newCart.push(i);
    });
    setProductsCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        productsCart,
        setProductsCart,
        addCart,
        clearCart,
        isInCart,
        deleteItem,
        orderTotal,
        totalProducts,
        itemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
