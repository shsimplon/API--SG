import React from "react";
// eslint-disable-next-line no-unused-vars
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="main-footer">
      {/* Column1 */}
      <div className="footer-site">
        <div className="col">
          <a href="/acceuil">
            <p> Accueil</p>
          </a>
          <a href="/profil">
            <p>Profil</p>
          </a>
        </div>
        {/* Column2 */}

        <div className="col">
          <a href="/restaurants">
            <p>Restaurants</p>
          </a>
          <a href="/patisseries">
            <p>Patisseries</p>
          </a>
          <a href="/recette">
            <p>Recettes</p>
          </a>
        </div>
        {/* Column3 */}
        <div className="col">
          <h4>Reseaux sociaux</h4>
          <div className="reseaux">
            <a href="https://github.com/shsimplon">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/samira-houacine">
              <AiFillLinkedin />
            </a>
            <a href="https://www.facebook.com">
              <AiFillFacebook />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">&copy;{new Date().getFullYear()} | GlutenFree</p>
      </div>
    </div>
  );
};

export default Footer;
