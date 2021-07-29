/* eslint-disable no-undef */
// import {UidContext} from "./components/AppContext"
import axios from "axios";
import React, { useEffect, useState } from 'react';

import Routes from './components/Routes'

function App () {
  //stocker le user sur notre app
  // const [uid, setUid] = useState (null);
  // useEffect(() => {
  //   const fetchToken = async () => {

  //   await axios({
  //     method: "get",
  //     url: `${process.env.REACT_APP_API_URL}jwtid`,
  //     withCredentials: true,
  //   })
  //     .then((res) => {
  //       console.log(res)
  //       setUid(res.data);
  //     })
  //     .catch((err) => console.log("No token"));

  //   }
  //   fetchToken();
  // }, []);

  return (
    <div>
  
      <Routes/>
   </div>
  );
};

export default App;
