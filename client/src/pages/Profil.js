/* eslint-disable react/jsx-no-comment-textnodes */
 import React, { useContext ,useEffect} from 'react';
// import { UidContext } from "../components/AppContext"
import Log from '../components/Log';
import SignIn from '../components/Log/SignIn';
import RajouterRecette from '../components/RajouterRecette';
import Auth from '../context/Auth';



const Profil = () => {

    return (

        <div className="profil-page">
            
            <div className="log-container">
            <Log signin={false} signup={true}/>
              <div className="img-container">
    
                   <img src="./img/img-connexion.jpg" alt=" ordinateur" />
               </div>
            </div>
          
        </div>
    );
};

export default Profil;