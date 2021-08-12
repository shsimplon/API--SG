import React from "react";

const SlideImagePatisserie = (props) => {
  const { patisserie } = props;
  return (
    <div className="etablissement">
      <img src={`data:image;base64,${patisserie.image}`} alt="patisserie" />
      <div>
        <p>
          Rien à se mettre sous la dent ici… Découvrez de bonnes patisseries....
        </p>
        <br />
        <a href={"/patisseries"}>
          <button> Voir plus </button>
        </a>
      </div>
    </div>
  );
};

export default SlideImagePatisserie;
