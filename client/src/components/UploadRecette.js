import React, { useState } from "react";
import api from "../services/AuthApi";

const UploadRecette = (props) => {
  //   const [data, setData] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState();
  const [ingredients, setIngredients] = useState();
  const [preparations, setPreparations] = useState();
  const [message, setMessage] = useState();

  const onSubmit = async (event, recette) => {
    event.preventDefault();
    const token = localStorage.getItem("jwt");

    if (name == null || name == "") {
      setMessage(" le name est obligatoire");
    } else if (ingredients == null || ingredients == "") {
      setMessage(" les ingrédients sont obligatoires");
    } else if (preparations == null || preparations == "") {
      setMessage(" les préparations sont obligatoires");
    }
    if (!message) {
      const imgData = new FormData();
      imgData.append("name", name);
      imgData.append("avatar", avatar);
      imgData.append("ingredients", ingredients);
      imgData.append("preparations", preparations);

      const response = await api.post(`/api/recettes/upload`, imgData);
      props.setData([...props.data, response.data]);
    }
  };

  return (
    <div>
      {message && (
        <p style={{ color: " rgb(220,52,68)", paddingLeft: "40px" }}>
          {message}
        </p>
      )}

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
