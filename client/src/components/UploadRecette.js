/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import api from "../services/AuthApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const UploadRecette = (props) => {
  //   const [data, setData] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState();
  const [ingredients, setIngredients] = useState();
  const [preparations, setPreparations] = useState();

  const onSubmit = async (event, recette) => {
    event.preventDefault();
    const token = localStorage.getItem("jwt");
    if (!ingredients || !preparations || !name) {
      toast.error("Veuillez valider tous les champs", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    const imgData = new FormData();
    imgData.append("name", name);
    imgData.append("avatar", avatar);
    imgData.append("ingredients", ingredients);
    imgData.append("preparations", preparations);
    try {
      const response = await api.post(`/api/recettes/upload`, imgData);
      props.setData([...props.data, response.data]);
    } catch (error) {
      console.log("ccc", error.response.data.message);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <form
        action="/uploadfile"
        enctype="multipart/form-data"
        className="update-container"
      >
        <div className="update-recette form-recette">
          <textarea
            className="textarea-form"
            name="name"
            type="text"
            rows="2"
            placeholder="Nom de la recette"
            onChange={(event) => {
              const { value } = event.target;
              setName(value);
            }}
          />
          <br />
          <textarea
            className="textarea-form"
            name="ingredients"
            type="text"
            placeholder="Ingredients"
            rows="15"
            onChange={(event) => {
              const { value } = event.target;
              setIngredients(value);
            }}
          />
          <br />
          <textarea
            className="textarea-form"
            name="preparations"
            type="text"
            placeholder="Preparations"
            rows="15"
            onChange={(event) => {
              const { value } = event.target;
              setPreparations(value);
            }}
          />
          <br />
          <button onClick={onSubmit} type="submit">
            {" "}
            + Ajouter recette
          </button>{" "}
        </div>
        <div className="profil-page">
          <div className="left-part">
            <input
              type="file"
              id="file-upload"
              name="file"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadRecette;
