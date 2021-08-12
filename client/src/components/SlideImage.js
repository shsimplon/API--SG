import React from "react";

const SlideImage = (props) => {
  const { restaurant } = props;

  return (
    <>
      <div className="etablissement">
        <img src={`data:image;base64,${restaurant.image}`} alt="restaurant" />
        <div>
          <p>
            Rien à se mettre sous la dent ici… Découvrez de bons restaurants....
          </p>
          <br />
          <a href={"/restaurants"}>
            <button> Voir plus </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default SlideImage;
