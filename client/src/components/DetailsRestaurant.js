import React from "react";

const DetailsRestaurant = (props) => {
  const { restaurant } = props;
  return (
    <div className="etablissement-lien">
      <li className="DetailsEtablissement">
        <img src={`data:image;base64,${restaurant.image}`} alt="restaurant" />

        <div className="data-container ">
          <ul>
            <li style={{ fontSize: "1.4rem" }}>{restaurant.name}</li>
            <li>{restaurant.place}</li>

            <li style={{ fontSize: "1rem" }}> {restaurant.description}</li>
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
