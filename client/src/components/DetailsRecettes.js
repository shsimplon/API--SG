/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import api from "../services/AuthApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const DetailsRecettes = (props) => {
  const { recette } = props;
  //   const [data, setData] = useState([]);
  //   const [likes, setLikes] = useState([]);

  const likeRecette = async (id, i) => {
    try {
      await api.post("api/likes", {
        userId: localStorage.getItem("user"),

        recetteId: id,
      });
      window.location.reload();
    } catch (error) {
      toast.error(error.response.data.description, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <ul className="update-container">
        <div className="update-recette">
          <li>
            {" "}
            <h3>Nom de la recette:</h3> <br /> {recette.name}
          </li>
          <br />
          <li>
            {" "}
            <h3>Ingredients:</h3> <br /> {recette.ingredients}
          </li>
          <br />
          <li>
            {" "}
            <h3>Preparations:</h3> <br />
            {recette.preparations}
          </li>
        </div>
        <div className="left-part ">
          <img
            src={`data:image;base64,${recette.image}`}
            style={{ width: "100%", height: "100%" }}
            alt="recette"
          />
        </div>
        <span
          id="likeButton"
          onClick={() => {
            likeRecette(recette.id);
          }}
        >
          <AiFillLike />
          {recette.likes}
        </span>
      </ul>
    </div>
  );
};

export default DetailsRecettes;
