/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadRecette = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [name, setName] = useState();
  const [ingredients, setIngredients] = useState();
  const [preparations, setPreparations] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(file);
    const token = localStorage.getItem("jwt");
    const upload = new FormData();
    upload.append("file", file);
    console.log("ccccccccccc", upload);
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/recettes/upload`,
      headers: { Authorization: "Bearer " + token },

      data: {
        name,
        ingredients,
        preparations,
      },
      upload,
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <form className="update-container">
        <div className="update-recette">
          <input
            name="name"
            type="text"
            placeholder="Nom de la recette"
            onChange={(event) => {
              const { value } = event.target;
              setName(value);
            }}
          />
          <br />
          <input
            type="file"
            id="file"
            name="file"
            onChange={(event) => {
              const file = event.target.files[0];
              setFile(file);
            }}
          />

          <br />
          <input
            name="ingredients"
            type="text"
            placeholder="Nom de la recette"
            onChange={(event) => {
              const { value } = event.target;
              setIngredients(value);
            }}
          />
          <br />

          <input
            name="preparations"
            type="text"
            placeholder="Nom de la recette"
            onChange={(event) => {
              const { value } = event.target;
              setPreparations(value);
            }}
          />
          <br />
          <button onClick={onSubmit} type="submit">
            {" "}
            + Ajouter recette
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadRecette;
// import React, { Component } from "react";

// export default class UploadRecette extends Component {
//   state = {
//     name: "",
//     ingedients: "",
//     preparations: "",
//     image: "",
//     file: "",
//   };

//   async componentDidMount() {}

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//   //   onInputChange = (e) => {
//   //     this.setState(e.target.files);
//   //   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const recette = { ...this.state };

//     try {
//       const token = localStorage.getItem("jwt");

//       axios({
//         method: "post",
//         url: `${process.env.REACT_APP_API_URL}api/recettes/upload`,
//         headers: { Authorization: "Bearer " + token },
//         data: {
//           name: recette.name,
//           ingredients: recette.ingredients,
//           preparations: recette.preparations,

//           image: recette.uploadedFile,
//         },
//       }).then((res) => this.setState());
//     } catch (e) {
//       console.log(e);
//     }

//     //rest : vider le formulaire
//     Object.keys(recette).forEach((item) => {
//       recette[item] = "";
//     });

//     this.setState({ ...recette });
//   };

//   render() {
//     return (
//       <div>
//         <form className="update-container" onSubmit={this.handleSubmit}>
//           <div className="update-recette">
//             <input
//               value={this.state.name}
//               onChange={this.handleChange}
//               name="name"
//               type="text"
//               placeholder="Nom de la recette"
//             />
//             <br />
//             <input
//               type="file"
//               name="uploadedFile"
//               //   onChange={this.onInputChange}
//               accept=""
//             />

//             <br />
//             <textarea
//               value={this.state.ingredients}
//               onChange={this.handleChange}
//               name="ingredients"
//               placeholder="Ingredients "
//               rows="10"
//             ></textarea>
//             <br />

//             <textarea
//               value={this.state.preparations}
//               onChange={this.handleChange}
//               name="preparations"
//               placeholder="Preparations "
//               rows="15"
//             ></textarea>
//             <br />
//             <button type="submit"> + Ajouter recette</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
