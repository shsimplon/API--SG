/* eslint-disable react/jsx-no-comment-textnodes */
// import { UidContext } from "../components/AppContext"
import Log from "../components/Log";

const Profil = () => {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Log signin={false} signup={true} />
        <div className="img-container">
          <img src="./img/img-connexion.jpg" alt=" ordinateur" />
        </div>
      </div>
    </div>
  );
};

export default Profil;
