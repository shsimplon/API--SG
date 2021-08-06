import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadRecette = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState();
  const [name, setName] = useState();
  const [ingredients, setIngredients] = useState();
  const [preparations, setPreparations] = useState();

  const token = localStorage.getItem("jwt");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const handlePicture = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}api/recettes`, config)
      .then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <div>
      <ul className="update-container">
        <div className="update-recette">
          <li>
            {" "}
            <h3>Nom de la recette:</h3>
            <br />
            <textarea
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></textarea>{" "}
          </li>

          <br />
          <li>
            {" "}
            <h3>Ingredients:</h3> <br />
            <textarea
              type="text"
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
          </li>
          <br />
          <li>
            {" "}
            <h3>Preparations:</h3> <br />
            <textarea
              type="text"
              onChange={(e) => setPreparations(e.target.value)}
            ></textarea>
          </li>
        </div>

        <div className="left-part">
          <img src="./img/icon.png" alt="icon" />

          <form action="" onSubmit={handlePicture} className="upload-pic">
            <label htmlFor="file">Tèlècharger une image</label>
            <input
              type="uploadedFile"
              id="file"
              name="uploadedFile"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <br />
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </ul>
    </div>
  );
};

export default UploadRecette;
