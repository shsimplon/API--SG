/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
// import React, { useContext } from "react";
// import { UidContext } from "../AppContext";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import React, { useState } from "react";

import Accueil from "../../pages/Accueil";
import Patisserie from "../../pages/Patisserie";
import Profil from "../../pages/Profil";
// import RajouterRecette from "../../pages/RajouterRecette";
import Recette from "../../pages/Recette";
import Restaurant from "../../pages/Restaurant";
import LeftNav from "../LeftNav";
import Navbar from "../Navbar";
import { hasAuthenticated } from "../../services/AuthApi";
import Auth from "../../context/Auth";
import AuthenticatedRoute from "../AuthenticatedRoute";
import RajouterRecette from "../RajouterRecette";

const index = () => {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Navbar />
        <LeftNav />

        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/restaurants" exact component={Restaurant} />
          <Route path="/patisseries" exact component={Patisserie} />
          <Route path="/recette" exact component={Recette} />
          <Route path="/rajouter-recette" exact component={Recette} />
          <Route path="/profil" exact component={Profil} />

          <AuthenticatedRoute path="/account" component={RajouterRecette} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </Auth.Provider>
  );
};

export default index;
