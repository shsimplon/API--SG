// /* eslint-disable react/require-render-return */
// /* eslint-disable no-unused-vars */
// import React, { Component } from "react";
// import RecetteService from "../../services/updateRecette";
// import RecetteDetails from "../RecetteDetails";

// export default class DeleteRecette extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       //   id: null,
//       //   name: null,
//       //   ingredients: null,
//       //   preparations: null,
//       //   avatar: null,

//       Recettes: [],
//       error: null,
//     };
//   }
//   async componentDidMount() {
//     try {
//       const response = await RecetteService.getuserRecette();
//       this.setState({ Recettes: response });
//     } catch (error) {
//       this.setState({ error: error.response });
//     }
//   }

//   removeItem = async (e) => {
//     const recetteId = e.target.getAttribute("index");

//     try {
//       const index = e.target.getAttribute("data-index");

//       const Recettes = this.state.Recettes.filter(
//         (item, i) => i !== parseInt(index)
//       );

//       this.setState({ Recettes });
//       const response = await RecetteService.deleteRecette(recetteId);
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     const list = this.state.Recettes;

//     return (
//       <>
//         {list &&
//           list.map((key, i) => (
//             <div key={i}>
//               {/* <RecetteDetails recette={recette} key={recette.name} /> */}
//               <img
//                 data-index={i}
//                 index={key.recetteId}
//                 onClick={this.removeItem}
//                 src="./img/icons/trash.svg"
//                 alt="trash"
//                 style={{ paddingLeft: "10%" }}
//               />
//             </div>
//           ))}
//       </>
//     );
//   }
// }
