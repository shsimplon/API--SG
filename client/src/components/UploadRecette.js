/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import axios from "axios";
import React, { useState, useEffect } from "react";
import api from "../services/AuthApi";

const UploadRecette = (props) => {
  //   const [data, setData] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState();
  const [ingredients, setIngredients] = useState();
  const [preparations, setPreparations] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("jwt");
    const imgData = new FormData();
    imgData.append("name", name);
    imgData.append("avatar", avatar);
    imgData.append("ingredients", ingredients);
    imgData.append("preparations", preparations);
    const response = await api.post(`/api/recettes/upload`, imgData);
    props.setData([...props.data, response.data]);
  };

  return (
    <div>
      <form
        action="/uploadfile"
        enctype="multipart/form-data"
        className="update-container"
      >
        <div className="update-recette">
          <textarea
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
              accept=""
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadRecette;

///sans photo

// import React, { Component } from "react";
// import UploadImg from "./uploadImg/UploadImg";

// export default class UploadRecette extends Component {
//   state = {
//     name: "",
//     ingedients: "",
//     preparations: "",
//   };

//   async componentDidMount() {}

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//   onInputChange = (e) => {
//     this.setState({
//       image: e.target.files[0],
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const recette = { ...this.state };

//     try {
//       const token = localStorage.getItem("jwt");
//       //   const image = new FormData();

//       //   image.append("image", this.state.image, this.state.image.name);
//       axios({
//         method: "post",
//         url: `${process.env.REACT_APP_API_URL}api/recettes`,

//         headers: {
//           Authorization: "Bearer " + token,
//         },
//         data: {
//           name: recette.name,
//           ingredients: recette.ingredients,
//           preparations: recette.preparations,
//           //   image,
//         },
//       }).then((res) => console.log(res));
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
//             {/* <br />
//             <input type="file" onChange={this.onInputChange} accept="" /> */}

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

//           <div className="profil-page">
//             <div className="left-part">
//               <input type="file" accept="" />
//               <button type="submit"> + Telecharger une photo</button>
//               <div className="profil-page">{/* <UploadImg /> */}</div>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
