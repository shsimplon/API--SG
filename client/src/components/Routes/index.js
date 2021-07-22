/* eslint-disable react-hooks/rules-of-hooks */
// import React, { useContext } from "react";
// import { UidContext } from "../AppContext";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Accueil from "../../pages/Accueil";
import Patisserie from "../../pages/Patisserie";
import Profil from "../../pages/Profil";
import RajouterRecette from "../../pages/RajouterRecette";
import Recette from "../../pages/Recette";
import Restaurant from "../../pages/Restaurant";
import LeftNav from "../LeftNav";
import Navbar from "../Navbar";

const index = () => {
  // const uid = useContext(UidContext);

  return (
    <Router>
      <Navbar />
      <LeftNav />

      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/restaurants" exact component={Restaurant} />
        <Route path="/patisseries" exact component={Patisserie} />
        <Route path="/recette" exact component={Recette} />
{/* 
        {uid ? ( */}
          <Route path="/rajouter-recette" exact component={RajouterRecette} />
        // ) : (
          <Route path="/profil" exact component={Profil} />
          // )}
        <Redirect to="/" />
       
      </Switch>
    </Router>
  );
};

export default index;
