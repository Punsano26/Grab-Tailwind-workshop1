
import React from "react";
import { NameAndSearch, Search, Shop} from "../Components";
import { useState, useEffect } from "react";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filtedRestaurants, setFilterRestaurants] = useState([]);
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
        setFilterRestaurants(response);
      })
      // เปลี่ยนเป็น messsage
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="container">
        
        <NameAndSearch />
        <Search
          restaurants={restaurants}
          setFilterRestaurants={setFilterRestaurants}
        />
        <Shop restaurants={filtedRestaurants} />
      </div>
    </>
  );
};

export default Home;
