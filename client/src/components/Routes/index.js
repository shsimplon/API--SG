
import React from 'react';
import { BrowserRouter as Router , Redirect,  Switch , Route } from "react-router-dom";
import Accueil from '../../pages/Accueil';
import Patisserie from '../../pages/Patisserie';
import Profil from '../../pages/Profil';
import RajouterRecette from '../../pages/RajouterRecette';
import Recette from '../../pages/Recette';
import Restaurant from '../../pages/Restaurant';
import LeftNav from '../LeftNav';
import Navbar from '../Navbar';




const index = () => {
    return (
       
       <Router>
         
         <Navbar/> 
         <LeftNav />

<Switch>
<Route path="/" exact component={Accueil}/>
<Route path="/restaurants" exact component={Restaurant}/>
<Route path="/patisseries"  component={Patisserie}/>
<Route path="/recette"  component={Recette}/>
<Route path="/profil"  component={Profil}/>
<Route path="/rajouter-recette" exact component={RajouterRecette}/>

<Redirect to='/'/>
</Switch>
       </Router>
    );
};

export default index;