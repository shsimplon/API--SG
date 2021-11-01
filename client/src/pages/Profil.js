/* eslint-disable react/jsx-no-comment-textnodes */
import Log from "../components/Log";
import Footer from "../components/Footer/Footer";

const Profil = () => {
  return (
    <>
      <div className="profil-page">
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="./img/img-connexion.jpg" alt=" ordinateur" />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Profil;
