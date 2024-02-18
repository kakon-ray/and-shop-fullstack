import React, { useEffect, useState } from "react";
import './Product.css';
import ShopCard from "../../component/ShopCard/ShopCard";
import useProducts from "../../../Hooks/useProducts";

const Product = () => {

    const [shopItem, setShopItem] = useProducts();
    const [shop, setShop] = useState([]);

  // hot manu active section
  const [newArrivalActive, setNewArrivalIsActive] = useState(false);
  const [trendingActive, setTrendingActive] = useState(false);
  const [bestSellsActive, setBestSellsActive] = useState(false);
  const [featuredActive, setFeaturedActive] = useState(false);

  useEffect(() => {
    setShop(shopItem.slice(0, 8));
  }, [shopItem]);


  const showMore = () => {
    let shopLength = shop.length + 4;
    setShop(shopItem.slice(0, shopLength));
  };

  // this is hot manue active section
  const btnlist = {
    onsel: "newArrival",
  };
  const newArrival = () => {
    setNewArrivalIsActive(true);
    setTrendingActive(false);
    setBestSellsActive(false);
    setFeaturedActive(false);
    setShop(shopItem[0]?.newArrival);
  };
  const trending = () => {
    setTrendingActive(true);
    setNewArrivalIsActive(false);
    setBestSellsActive(false);
    setFeaturedActive(false);
    setShop(shopItem[0]?.FEATURED);
  };
  const bestSels = () => {
    setBestSellsActive(true);
    setTrendingActive(false);
    setNewArrivalIsActive(false);
    setFeaturedActive(false);
    setShop(shopItem[0]?.SELLERS);
  };

  const featured = () => {
    setFeaturedActive(true);
    setBestSellsActive(false);
    setTrendingActive(false);
    setNewArrivalIsActive(false);
    setShop(shopItem[0]?.newArrival);
  };
  btnlist.onsel = () => {
    console.log("click");
  };
  
  return (
    <div id="hot-products" className="container-fluid mt-5 py-4">
      <div className="mx-auto text-center">
        <h1>Hot Products</h1>
        <p className="pt-0 mt-0">
          See What Everyone Is Shopping from Andshop E-Commerce
        </p>
      </div>
      <div className="d-flex mb-3 justify-content-center">
        <ul className="d-flex list-unstyled flex-wrap justify-content-center">
          <li
            className={`hot-menue ${newArrivalActive ? "active" : "hot-menue"}`}
            value={1}
            onClick={newArrival}
          >
            NEW ARRIVAL
          </li>
          <li
            className={`hot-menue ${trendingActive ? "active" : "hot-menue"}`}
            onClick={trending}
          >
            TRENDING
          </li>
          <li
            className={`hot-menue ${bestSellsActive ? "active" : "hot-menue"}`}
            onClick={bestSels}
          >
            BEST SELLERS
          </li>
          <li
            className={`hot-menue ${featuredActive ? "active" : "hot-menue"}`}
            onClick={featured}
          >
            FEATURED
          </li>
        </ul>
      </div>

      <div className="row g-3">
        {shop.map((item) => (
          <ShopCard
            key={item.id}
            position="Trending"
            title={item.name}
            price={item.price}
            img={item.img}
            img1={item.img2}
            item={item}
          />
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-outline-warning" onClick={showMore}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default Product;
