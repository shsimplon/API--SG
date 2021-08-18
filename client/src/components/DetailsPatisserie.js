import React from "react";

const DetailsPatisserie = (props) => {
  const { patisserie } = props;
  return (
    <div className="etablissement-lien">
      <li className="DetailsEtablissement">
        <img src={`data:image;base64,${patisserie.image}`} alt="patisserie" />

        <div className="data-container">
          <ul>
            <li>{patisserie.name}</li>

            <li>{patisserie.place}</li>

            <li>{patisserie.description}</li>
          </ul>
        </div>
      </li>
      <a href={"" + patisserie.lien} target="_blank" rel="noreferrer">
        <button>DÉCOUVRIR</button>
      </a>
    </div>
  );
};

export default DetailsPatisserie;
