import React from "react";
import ShopCard from "../../component/ShopCard/ShopCard";


const SlickCollectionItem = ({ todayDell }) => {
  return (
    <div className="row">
      {todayDell?.map((todayItem) => (
        <ShopCard
          key={todayItem.id}
          position="Trending"
          title={todayItem.name}
          price={todayItem.price}
          img={todayItem.img}
          img1={todayItem.img2}
          item={todayItem}
        />
      ))}
    </div>
  );
};

export default SlickCollectionItem;