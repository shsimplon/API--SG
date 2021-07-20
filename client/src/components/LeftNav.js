import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to="/" exact activeClassName="active-left-nav">
            <img src="./img/icons/home.svg" alt="home" />
          </NavLink>
          <br />
          <NavLink to="/restaurants" exact activeClassName="active-left-nav">
            <img src="./img/icons/restaurant.png" alt="home" />
          </NavLink>
          <br />
          <NavLink to="/patisseries" exact activeClassName="active-left-nav">
            <img src="./img/icons/patisserie.png" alt="home" />
          </NavLink>
          <br />
          <NavLink to="/rajouter-recette" exact activeClassName="active-left-nav">
            <img src="./img/icons/ajouterRecette.png" alt="home" />
          </NavLink>
          <br />
          <NavLink to="/recette" exact activeClassName="active-left-nav">
            <img src="./img/icons/recette.png" alt="home" />
          </NavLink>
          <br />
          <NavLink to="/profil" exact activeClassName="active-left-nav">
            <img src="./img/icons/user.svg" alt="home" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
