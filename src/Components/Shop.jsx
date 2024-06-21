import React from "react";
import { Card } from "./Card";

import { restaurants } from "../data/dataRestaurant";
const Shop = () => {
  
  return (
    <>
      <div className="flex flex-wrap justify-center gap-7">
        {restaurants.map((restaurants) => {
          return(<Card
            img={restaurants.img}
            title={restaurants.title}
            type={restaurants.type}
          />);
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
