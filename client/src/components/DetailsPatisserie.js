import React from "react";

const DetailsPatisserie = (props) => {
  const { patisserie } = props;
  return (
    <div className="etablissement-lien">
      <li className="DetailsEtablissement">
        <img src={`data:image;base64,${patisserie.image}`} alt="patisserie" />

        <div className="data-container">
          <ul>
            <li style={{ fontSize: "1.4rem" }}>{patisserie.name}</li>
            <br />
            <li>{patisserie.place}</li>
            <br />
            <li style={{ fontSize: "1rem" }}>{patisserie.description}</li>
          </ul>
        </div>
      </li>
      <a href={"" + patisserie.lien}>
        <button>DÉCOUVRIR</button>
      </a>
    </div>
  );
};

export default DetailsPatisserie;
