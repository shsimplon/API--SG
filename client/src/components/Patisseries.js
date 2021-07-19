import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailsPatisserie from "./DetailsPatisserie";
const Patisseries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/patisseries/`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="restaurant">
      <ul className="restaurant-list">
        {data.map((patisserie) => (
          <DetailsPatisserie patisserie={patisserie} key={patisserie.name} />
        ))}
      </ul>
    </div>
  );
};

export default Patisseries;
