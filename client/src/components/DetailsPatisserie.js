import React from "react";

const DetailsPatisserie = (props) => {
  const { patisserie } = props;
  return (
    <li className="DetailsEtablissement">
            <img src={`data:image;base64,${patisserie.image}`} alt ='patisserie'/>

      <div className="data-container">
      <ul>
        <li>{patisserie.name}</li><br/>
        <li>{patisserie.place}</li><br/>
        <li>{patisserie.description}</li>
      </ul>
      </div>
    </li>
     
  );
};

export default DetailsPatisserie;
