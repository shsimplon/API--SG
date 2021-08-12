/* eslint-disable no-unused-vars */
import React from "react";
import { Slide } from "react-slideshow-image";

// import "react-slideshow-image/dist/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SlideImage from "./SlideImage";
const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/restaurants/`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        {data.map((restaurant) => (
          <SlideImage restaurant={restaurant} key={restaurant.name} />
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
