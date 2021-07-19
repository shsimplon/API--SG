import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailsRestaurant from "./DetailsRestaurant";
const Restaurants = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/restaurants/`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="restaurant">
      <ul className="restaurant-list">
        {data.map((restaurant) => (
          <DetailsRestaurant restaurant={restaurant} key={restaurant.name} />
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
