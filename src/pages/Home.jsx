import React from "react";
import { NameAndSearch, Search, Shop } from "../Components";
import { useState, useEffect } from "react";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filtedRestaurants, setFilterRestaurants] = useState([]);
  useEffect(() => {
    const getAllRestaurant = async () => {
      try {
        const response = await RestaurantService.getAllRestaurant();

        if (response.status === 200) {
          setRestaurants(response.data);
          setFilterRestaurants(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Restaurant error",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };

    getAllRestaurant();
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
}

export default Home;
