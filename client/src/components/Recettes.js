import React, { useState, useEffect } from "react";
import axios from "axios";

import DetailsRecettes from "./DetailsRecettes";

const Recettes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/recettes/`)
      .then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <>
      <div className="profil-page">
        <ul>
          {data
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((recette) => (
              <DetailsRecettes recette={recette} key={recette.name} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default Recettes;
