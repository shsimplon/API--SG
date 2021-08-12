/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slideshow from "../components/Slide";
import SlidePatisserie from "../components/SlidePatisserie";
import image from "../assets/img/children-5626030__480.jpg";
import Footer from "../components/Footer/Footer";

const Accueil = () => {
  return (
    <div>
      <Slideshow />
      <br />
      <h3 style={{ marginLeft: 50, marginTop: 50 }}>
        Plus qu'un simple gateau , retrouvez des endroits conviviables
        <br /> où vous pouvez savourez des petits gateaux ...{" "}
      </h3>
      <SlidePatisserie />
      <br />
      <div className="recette-acceuil">
        <h3>Livret de recettes sans gluten</h3>
        <p></p>
        <br />
        Pour des recettes de base faciles et rapides. Voici quelques recettes
        pour devenir un « chef sans gluten ».
        <a href="/recette">
          <button> Publication en ligne</button>
        </a>
        <br />
        <h3>Cuisiner sans gluten</h3>
        <img src={image} style={{ marginLeft: 50 }} />
        <p>
          Imaginer des recettes variées, simples à réaliser, qui plaisent à tous
          et sans gluten ne nécessite pas forcément d’être un cuisinier
          professionnel.
        </p>
        <br />
        <a href="/account">
          <button>Se connecter</button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
