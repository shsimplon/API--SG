import React, { useState } from 'react';
import axios from 'axios'
import cookieParser from 'cookie-parser';
import Cookies from 'universal-cookie' ;
const cookies=new Cookies();

const SignIn = () => {
    const [email, setemail]=useState('');
    const [password, setPassword]=useState('');

const handleLogin=(e)=>{
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

e.preventDefault();
axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}api/users/login`,
    
    data: {
      email,
      password,
    },
})
.then((res) => {
    console.log(res);
    if (res.data.errors) {
      emailError.innerHTML = res.data.errors.email;
      passwordError.innerHTML = res.data.errors.password;
    } else {
      cookies.set ('jwt', res.data.token, {path:'/'})
      window.location = "/rajouter-recette";
    }
  })
  .catch((err) => {
    console.log(err);
  });
};

    return (
       
    <form action="" onSubmit={handleLogin} id="sign-up-form">
         <label htmlFor="email">Email</label>
      <br />

      <input type="text" name="email" id="email"
        onChange={(e) => setemail(e.target.value)}
        value={email}
      />

      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input type="password" name="password" id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <br />

      <input type="submit" value="Se connecter" />

    </form>
    );
};

export default SignIn;