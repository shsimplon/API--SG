/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecetteDetails from "./RecetteDetails"
const RajouterRecette = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("jwt");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
 
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/recettes/userRecette/`,config)
      .then((res) => setData(res.data)
      );


  },
  []);
  console.log(data)


  
  return (
    <div className="profil-page">
      <ul >
      {data.map((recette) => (
      
      < RecetteDetails recette={recette} key={recette.name} />

        ))}
         </ul>
    </div>
  );
};

export default RajouterRecette;
