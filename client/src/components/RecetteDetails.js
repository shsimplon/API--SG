/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { AiFillLike } from "react-icons/ai";

import api from "../services/AuthApi";
import React, { useEffect, useState } from "react";

const RecetteDetails = (props) => {
  const { recette } = props;
  const [data, setData] = useState([]);

  async function deleteRecette(id) {
    await api.delete(`/api/recettes/${id}`).then((res) => setData(res.data));
    window.location.reload();
  }

  return (
    <div>
      <>
        <ul className="update-container">
          <div className="update-recette">
            <li>
              <h3>Nom de la recette:</h3> <br /> {recette.name}
            </li>
            <br />
            <li>
              <h3>Ingredients:</h3> <br /> {recette.ingredients}
            </li>
            <br />
            <li>
              <h3>Preparations:</h3> <br />
              {recette.preparations}
            </li>
          </div>
          <div className="left-part">
            <img
              src={`data:image/jpg;base64,${recette.image}`}
              style={{ width: "100%", height: "100%" }}
              alt="recette"
            />
          </div>
        </ul>
      </>

      <img
        onClick={() => deleteRecette(recette.id)}
        src="./img/icons/trash.svg"
        alt="trash"
        style={{ paddingLeft: "10%" }}
      />
      <span
        style={{
          paddingLeft: "20%",
          color: "rgb(220,52,68)",
          fontSize: 30,
        }}
      >
        <AiFillLike />
        {recette.likes}
      </span>
    </div>
  );
};

export default RecetteDetails;
