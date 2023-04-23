import React from "react";
import "./Loginpage.css"

function LoginPage() {
  return (
    <div className="Login">
      <div className="facebook">
        <div className="facebooktext">facebook</div>
      <div className="title">
      Facebook helps you connect and share <br /> with the people in your life.
      </div>
      </div>
      <div className="logincontainer">
        <div className="logindata">
          <input type="email" placeholder="Email address or phonenumber" />
          <br />
          <input type="password" placeholder="password" />
          <br />
          <button className="btn">Login</button>

        <div className="forgott">
          <a href="forgott" className="forgott">Forgotten password?</a>
          <br />
        </div>
        </div>
        <div className="create">
          <button className="btns">Create new Account</button>
        </div>
        <p></p>
        <br />
        <div className="page">
          <a href="createpage">create a page </a>  for a celebrity, brand or business. 
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
