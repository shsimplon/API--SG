/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// import React, { useState, useEffect } from "react";
import axios from "axios";

// const UploadRecette = () => {
//   const [data, setData] = useState([]);
//   const [file, setFile] = useState();
//   const [name, setName] = useState();
//   const [ingredients, setIngredients] = useState();
//   const [preparations, setPreparations] = useState();

//   const token = localStorage.getItem("jwt");
//   const config = {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   };
//   const handlePicture = (e) => {
//     e.preventDefault();
//   };
// handleChange = (event) => {
//     const { name, value } = event.target;
//     setState({ [name]: value });
//   };
//   useEffect(() => {
//     axios
//       .post(`${process.env.REACT_APP_API_URL}api/recettes`, config)
//       .then((res) => setData(res.data));
//   }, []);
//   console.log(data);

//   return (
//     <div>
//       <ul className="update-container">
//         <div className="update-recette">
//           <li>
//             {" "}
//             <h3>Nom de la recette:</h3>
//             <br />
//             <textarea
//               type="text"
//               onChange={(e) => setName(e.target.value)}
//             ></textarea>{" "}
//           </li>

//           <br />
//           <li>
//             {" "}
//             <h3>Ingredients:</h3> <br />
//             <textarea
//               type="text"
//               onChange={(e) => setIngredients(e.target.value)}
//             ></textarea>
//           </li>
//           <br />
//           <li>
//             {" "}
//             <h3>Preparations:</h3> <br />
//             <textarea
//               type="text"
//               onChange={(e) => setPreparations(e.target.value)}
//             ></textarea>
//           </li>
//         </div>

//         <div className="left-part">
//           <img src="./img/icon.png" alt="icon" />

//           <form action="" onSubmit={handlePicture} className="upload-pic">
//             <label htmlFor="file">Tèlècharger une image</label>
//             <input
//               type="uploadedFile"
//               id="file"
//               name="uploadedFile"
//               accept=".jpg, .jpeg, .png"
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//             <br />
//             <button type="submit" value="Envoyer" />
//           </form>
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default UploadRecette;
import React, { Component } from "react";

export default class UploadRecette extends Component {
  state = {
    name: "",
    ingedients: "",
    preparations: "",
    image: "",
  };

  async componentDidMount() {}

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const recette = { ...this.state };
    try {
      const token = localStorage.getItem("jwt");

      console.log(token);
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/recettes/upload`,
        headers: { Authorization: "Bearer " + token },
        data: {
          name: recette.name,
          ingredients: recette.ingredients,
          preparations: recette.preparations,
          image: recette.image,
        },
      }).then((res) => this.setState());
    } catch (e) {
      console.log(e);
    }

    //rest : vider le formulaire
    Object.keys(recette).forEach((item) => {
      recette[item] = "";
    });

    this.setState({ ...recette });
  };

  render() {
    return (
      <div>
        <form className="update-container" onSubmit={this.handleSubmit}>
          <div className="update-recette">
            <input
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              type="text"
              placeholder="Nom de la recette"
            />
            {/* <input
              value={this.state.image}
              onChange={this.handleChange}
              name="image"
              type="text"
              placeholder="Nom de l'image"
            /> */}
            <label htmlFor="file">Tèlècharger une image</label>
            <input
              value={this.state.image}
              onChange={this.handleChange}
              name="image"
              //name="uploadedFile"
            />
            <textarea
              value={this.state.ingredients}
              onChange={this.handleChange}
              name="ingredients"
              placeholder="Ingredients "
              rows="5"
            ></textarea>
            <textarea
              value={this.state.preparations}
              onChange={this.handleChange}
              name="preparations"
              placeholder="Preparations "
              rows="15"
            ></textarea>
            <button type="submit"> + Ajouter recette</button>
          </div>
        </form>
      </div>
    );
  }
}
//   ajouterRecette = (recette) => {
//     const recettes = { ...this.state.recette };
//     recettes[`recette-${Date.now()}`] = recette;
//     this.setState({ recettes });
//   };
