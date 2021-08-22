import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import Auth from "../context/Auth";

const LeftNav = () => {
  const { isAuthenticated } = useContext(Auth);
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to="/" exact activeClassName="active-left-nav">
            <img
              src="./img/icons/home.svg"
              alt="home "
              style={{ width: 45, height: 45 }}
            />
          </NavLink>
          <br />
          <NavLink to="/restaurants" exact activeClassName="active-left-nav">
            <img
              src="./img/icons/restaurant.png"
              style={{ width: 45, height: 45 }}
              alt="aller voir les restaurants"
            />
          </NavLink>
          <br />
          <NavLink to="/patisseries" exact activeClassName="active-left-nav">
            <img
              src="./img/icons/patisserie.png"
              alt="aller voir les patisserie"
              style={{ width: 45, height: 45 }}
            />
          </NavLink>
          <br />
          <NavLink to="/recette" exact activeClassName="active-left-nav">
            <img
              src="./img/icons/ajouterRecette.png"
              alt="aller voir les recettes"
              style={{ width: 45, height: 45 }}
            />
          </NavLink>
          <br />

          {isAuthenticated ? (
            <NavLink to="/account" exact activeClassName="active-left-nav">
              <img
                src="./img/icons/recette.png"
                alt="recette"
                style={{ width: 45, height: 45 }}
              />
            </NavLink>
          ) : (
            <NavLink to="/profil" exact activeClassName="active-left-nav">
              <img
                src="./img/icons/user.svg"
                alt="profil"
                style={{ width: 45, height: 45 }}
              />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
