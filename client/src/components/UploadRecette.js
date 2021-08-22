// /* eslint-disable no-dupe-keys */
// /* eslint-disable no-unused-expressions */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-restricted-globals */
// /* eslint-disable no-undef */
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import api from "../services/AuthApi";
// import { useForm } from "react-hook-form";

// const UploadRecette = (props) => {
//   //   const [data, setData] = useState([]);
//   const [avatar, setAvatar] = useState("");
//   const [name, setName] = useState();
//   const [ingredients, setIngredients] = useState();
//   const [preparations, setPreparations] = useState();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => async (event, recette) => {
//     event.preventDefault();
//     const token = localStorage.getItem("jwt");

//     const imgData = new FormData();
//     imgData.append("name", name);
//     imgData.append("avatar", avatar);
//     imgData.append("ingredients", ingredients);
//     imgData.append("preparations", preparations);
//     const response = await api.post(`/api/recettes/upload`, imgData);
//     props.setData([...props.data, response.data]);
//   };

//   return (
//     <div>
//       <form
//         action="/uploadfile"
//         enctype="multipart/form-data"
//         className="update-container"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <div className="update-recette form-recette">
//           <textarea
//             {...register("name", { required: true })}
//             className="textarea-form"
//             name="name"
//             type="text"
//             rows="2"
//             placeholder="Nom de la recette"
//             onChange={(event) => {
//               const { value } = event.target;
//               setName(value);
//             }}
//           />
//           {errors.name && <p>Last name is required.</p>}
//           <br />
//           <textarea
//             {...register("ingredients", { required: true })}
//             className="textarea-form"
//             name="ingredients"
//             type="text"
//             placeholder="Ingredients"
//             rows="15"
//             onChange={(event) => {
//               const { value } = event.target;
//               setIngredients(value);
//             }}
//           />
//           {errors.name && <p>Last ingredients is required.</p>}
//           <br />
//           <textarea
//             className="textarea-form"
//             {...register("preparations", { required: true })}
//             name="preparations"
//             type="text"
//             placeholder="Preparations"
//             rows="15"
//             onChange={(event) => {
//               const { value } = event.target;
//               setPreparations(value);
//             }}
//           />
//           {errors.name && <p>Last preparations is required.</p>}
//           <br />
//           <input type="submit" value="+ Ajouter recette" />
//           {/* <button onClick={onSubmit} type="submit"> */}{" "}
//           {/* + Ajouter recette
//           </button>{" "} */}
//         </div>
//         <div className="profil-page">
//           <div className="left-part">
//             <input
//               //   {...register("file")}
//               type="file"
//               id="file-upload"
//               name="file"
//               accept="image/*"
//               onChange={(e) => setAvatar(e.target.files[0])}
//             />
//             {errors.name && <p>Last name is required.</p>}
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UploadRecette;

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

  const onSubmit = async (event, recette) => {
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
