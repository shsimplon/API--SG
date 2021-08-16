/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecetteDetails from "./RecetteDetails";
import UploadRecette from "./UploadRecette";

const RajouterRecette = (props) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("jwt");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/recettes/userRecette/`, config)
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <div className="profil-page">
        <UploadRecette data={data} setData={setData} />
        <ul>
          {data
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((recette, i) => {
              return <RecetteDetails recette={recette} key={i} />;
            })}
        </ul>
      </div>
    </>
  );
};

export default RajouterRecette;
