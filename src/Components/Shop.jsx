import { useState, useEffect } from "react";
import { Card } from "./Card";

// import { restaurants } from "../data/dataRestaurant";

const Shop = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then(
        // convert เป็น jason
        (res) => {
          return res.json();
        }
      )
      // เรียกใช้ State
      .then((response) => {
        setRestaurants(response);
      })
      // เปลี่ยนเป็น messsage
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-7">
        {restaurants &&
          restaurants.map((restaurant) => {
            return (
              <Card
                key={restaurant.id}
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
