/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import Auth from '../context/Auth';
// import { UidContext } from './AppContext';
import Logout from './Log/Logout';
 

const Navbar = () => {
     const {isAuthenticated} =useContext(Auth);
  
  
  return (
    <nav>
        
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/icon.png" alt="icon" />
              <h3>GlutenFree</h3>
            </div>
          </NavLink>
          </div>
          {isAuthenticated ? ( 

    <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>Bienvenue 
                    {/* {userData.pseudo} */}
                    </h5>
              </NavLink>
              <NavLink  to="/account">
                  Mon compte
                </NavLink>

            </li>
            <Logout/> 
          </ul>
       ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <img src="./img/icons/login.svg" alt="login"/>
              </NavLink>

        </li>
    </ul>
      )
      }

</div>
        </nav>
  );
};

export default Navbar;
