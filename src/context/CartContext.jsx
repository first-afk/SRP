import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItems = prevItems.find((item) => item.id === product.id);
      if (existingItems) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const decrementQuantity = (product) => {
    setCartItems((prevItems) => {
      const existingItems = prevItems.find((item) => item.id === product.id);
      if (existingItems) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        );
      }
    });
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, clearCart, removeItem, decrementQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
