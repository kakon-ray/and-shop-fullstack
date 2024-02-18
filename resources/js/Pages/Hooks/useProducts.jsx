import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [shopItem, setShopItem] = useState([]);

  useEffect(() => {
    fetch("shop.json")
      .then((response) => response.json())
      .then((data) => setShopItem(data));
  }, []);

  return [shopItem, setShopItem];
};

export default useProducts;
