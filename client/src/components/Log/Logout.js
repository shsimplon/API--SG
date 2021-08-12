import React from "react";
import axios from "axios";
import cookie from "js-cookie";
// import { withRouter } from "react-router-dom";

const Logout = () => {
  //     const removeCookie = (key) => {
  //       // petite sécurité
  //         if (window !== "undefined") {
  //           cookie.remove(key, { expires: 1 });
  //         }
  //       };
  const logout = async () => {
    // await axios({
    //     method: 'get',
    //     url:  `${process.env.REACT_APP_API_URL}api/users/logout/:id`,
    //     withCredentials: true,

    // })
    //   .then (()=> localStorage.removeItem('jwt'))

    //  // .then (()=> removeCookie('jwt'))
    // .catch ((err)=> console.log(err))

    // props.history.push('/');

    //     }
    localStorage.clear();
    window.location = "/";
  };
  return (
    <li onClick={logout}>
      <img src="./img/icons/logout.svg" alt="logout" />
    </li>
  );
};

export default Logout;

//  const removeCookie = (key) => {
//      if (window !== "undefined") {
//       cookie.remove(key, { expires: 1 });
//  }
//  };
// on mit en paramettre le jwt (key) quon veut supprimé
// puis une condition à mettre pour la sécurité : ctd si ya rien dans le window supprime le cookie

//le cookie est retirer en front et on bach avec le package js-cookie car défois reste malgré sa suppréssion en backend
