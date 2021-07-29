import React, { useState } from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie' ;
import { withRouter } from 'react-router';
const cookies=new Cookies();

const SignIn = (props) => {
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
     localStorage.setItem('jwt', res.data.token);
      localStorage.setItem('userId', res.data.user.id);
           console.log(res.data)
    // window.location = "/";
     props.history.push('/');


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

export default withRouter ( SignIn);
