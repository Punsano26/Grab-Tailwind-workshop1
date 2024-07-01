import { useState, useEffect } from "react";
import { Card } from "./Card";

// import { restaurants } from "../data/dataRestaurant";

const Shop = ({restaurants}) => {
  

  return (
    <>
      <div className="flex flex-wrap justify-center gap-7">
        {restaurants &&
          restaurants.map((restaurant) => {
            return (
              <Card
                key={restaurant.id}
                id={restaurant.id}
                img={restaurant.img}
                title={restaurant.title}
                type={restaurant.type}
              />
            );
          })}

        {/* <Card img={restaurants[0].img} title={restaurants[0].title} type={restaurants[0].type} /> */}

        {/* <Card img={resto.img} title={resto.title} type={resto.type} />
        <Card img={resto.img} title={resto.title} type={resto.type} />
        <Card img={resto.img} title={resto.title} type={resto.type} />
        <Card img={resto.img} title={resto.title} type={resto.type} />
        <Card img={resto.img} title={resto.title} type={resto.type} /> */}
      </div>
    </>
  );
};

export default Shop;
