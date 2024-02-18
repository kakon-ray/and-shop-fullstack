import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SlickCollection.css";
import SlickCollectionItem from "./SlickCollectionItem";
import useProducts from "../../../Hooks/useProducts";

const SlickCollection = () => {
  const [shopItem, setShopItem] = useProducts();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const todayDell = shopItem.slice(0, 4);
  const todayDell2 = shopItem.slice(4, 8);
  const todayDell3 = shopItem.slice(8, 12);

  return (
    <div className="container-fluid py-5" id="slick-collection">
      <div className="text-center">
        <h1>TODAY'S DEAL</h1>
        <p>See What Everyone Is Shopping from Andshop E-Commerce Today</p>
      </div>
      <Slider {...settings}>
        <div>
          <SlickCollectionItem todayDell={todayDell} />
        </div>
        <div>
          <SlickCollectionItem todayDell={todayDell2} />
        </div>
        <div>
          <SlickCollectionItem todayDell={todayDell3} />
        </div>
      </Slider>
    </div>
  );
};

export default SlickCollection;
