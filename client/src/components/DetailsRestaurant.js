
import React from "react";

const DetailsRestaurant = (props) => {
  const { restaurant } = props;
  return (
    <li className="DetailsEtablissement">
            <img src={`data:image;base64,${restaurant.image}`} alt ='restaurant'/>

      <div className="data-container">
      <ul>
        <li>{restaurant.name}</li> <br/>
        <li>{restaurant.place}</li><br/>
        <li>{restaurant.description}</li>
      </ul>
      </div>
    </li>
     
  );
};

export default DetailsRestaurant;
