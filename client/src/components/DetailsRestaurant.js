import React from "react";

const DetailsRestaurant = (props) => {
  const { restaurant } = props;
  return (
    <div className="etablissement-lien">
      <li className="DetailsEtablissement">
        <img src={`data:image;base64,${restaurant.image}`} alt="restaurant" />

        <div className="data-container ">
          <ul>
            <li style={{ fontSize: "2rem" }}>{restaurant.name}</li>
            <li>{restaurant.place}</li>

            <li>{restaurant.description}</li>
          </ul>
        </div>
      </li>

      <a href={"" + restaurant.lien}>
        <button>DÉCOUVRIR</button>
      </a>
    </div>
  );
};

export default DetailsRestaurant;
