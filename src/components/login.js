import React from 'react'
import  '../styles/style.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

import GoogleAuth from './GoogleAuth'

const Login = () => {
  return (
    <>
      <div className="over"></div>
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            {/* <img src="assets/images/logo.png" className="image" /> */}
            <i class="paperclip icon"></i>
            <div className="content">
              <i class="angle double right icon"></i> Log-in here to study
              <i class="angle double left icon"></i>
            </div>
          </h2>

          <form className="ui large form" >
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  {/* <input type="text" name="email" placeholder="E-mail address"/> */}
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  {/* <input type="password" name="password" placeholder="Password"/> */}
                </div>
              </div>
              <GoogleAuth />
            
              {/* <button type="submit" className="ui fluid large teal submit button">Login</button> */}
            </div>

            <div className="ui error message"></div>
          </form>

          <div className="ui message">
            New to us?{" "}
            <a target="_blank" href="https://plus.google.com/">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login
