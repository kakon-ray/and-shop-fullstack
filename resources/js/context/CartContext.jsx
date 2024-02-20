import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartListProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch("shop.json")
      .then((response) => response.json())
      .then((data) => setCartList(data.slice(24, 28)));
  }, []);

  return (
    <CartContext.Provider value={[cartList, setCartList]}>
      {props.children}
    </CartContext.Provider>
  );
};
