import React from "react";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SlideImagePatisserie from "./SlideImagePatisserie";
const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};
const SlidePatisserie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/patisseries/`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        {data.map((patisserie) => (
          <SlideImagePatisserie patisserie={patisserie} key={patisserie.name} />
        ))}
      </Slide>
    </div>
  );
};

export default SlidePatisserie;
