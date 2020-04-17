import React from 'react'
// import "../styles/style.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

import Stone from "../img/stone.jpg";
import Learn from "../img/learn.jpg";
import Dream from "../img/dream.jpg";
import Book from "../img/book.jpg";


const main = () => {
  return (
    <>
      <div className="ui large top fixed hidden menu">
        <div className="ui container">
          <a className="toc item">
            <i className="sidebar icon"></i>
          </a>
          <a className=" item">Home</a>
          <a className="item">
            <i className="pencil alternate icon"></i>Test
          </a>
          <Link to="/main/study" className="item">
            <i className="book icon"></i>Study
          </Link>
          <a className="item">
            <i className="user circle icon"></i>Profile
          </a>
          <a className="item">
            <i className="users icon"></i>Group
          </a>
          <a className="item">
            <i className="info icon"></i>About Us
          </a>
          <div className="right item">
            <Link className="ui inverted button">
              {/* <i className="power off icon"></i> */}
              <GoogleAuth />
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- Sidebar Menu --> */}
      <div className="ui vertical inverted sidebar menu">
        <a className="toc item">
          <i className="sidebar icon"></i>
        </a>
        <a className=" item">Home</a>
        <a className="item">
          <i className="pencil alternate icon"></i>Test
        </a>
        <Link to="/main/study" className="item">
          <i className="book icon"></i>Study
        </Link>
        <a className="item">
          <i className="user circle icon"></i>Profile
        </a>
        <a className="item">
          <i className="users icon"></i>Group
        </a>
        <a className="item">
          <i className="info icon"></i>About Us
        </a>
        {/* <div className="right item"> */}
        <Link className="ui inverted button">
          {/* <i className="power off icon"></i> */}
          <GoogleAuth />
        </Link>
        {/* </div> */}
      </div>

      {/* <!-- Page Contents --> */}
      <div className="pusher">
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
              <a className="toc item">
                <i className="sidebar icon"></i>
              </a>
              <a className=" item">Home</a>
              <a className="item">
                <i className="pencil alternate icon"></i>Test
              </a>
              <Link to="/main/study" className="item">
                <i className="book icon"></i>Study
              </Link>
              <a className="item">
                <i className="user circle icon"></i>Profile
              </a>
              <a className="item">
                <i className="users icon"></i>Group
              </a>
              <a className="item">
                <i className="info icon"></i>About Us
              </a>
              <div className="right item">
                <Link className="ui inverted button">
                  {/* <i className="power off icon"></i> */}
                  <GoogleAuth />
                </Link>
              </div>
            </div>
          </div>

          <div className="ui text container">
            <h1 className="ui inverted header">Flash Card</h1>
            <h2>Study|Test|Learn</h2>
            <div className="ui huge primary button">
              Get Started <i className="right arrow icon"></i>
            </div>
          </div>
        </div>

        <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="eight wide column">
                <h3 className="ui header">Site dedicated to help students</h3>
                <p>
                  We can give students superpowers to do things that they never
                  thought possible. Let us empower your class...through
                  knowledge.
                </p>
                <h3 className="ui header">We make dreams into reality.</h3>
                <br></br>{" "}
                {/* <p>Yes that's right, we make people dream in code.</p> */}
              </div>
              <div className="six wide right floated column">
                <img src={Book} className="ui large bordered rounded image" />
              </div>
            </div>
            <div className="row">
              <div className="center aligned column">
                {/* <img src={Stone} alt="" /> */}
                <br></br>
                <br></br>
                <div className="ui card">
                  <div className="ui slide masked reveal image">
                    <img src={Dream} alt="wht" className="visible content" />
                    <img src={Learn} alt="dfuq" className="hidden content" />
                  </div>
                  <div className="content">
                    <a className="header">Learn &amp; Succeed</a>
                    <div className="meta">
                      <span className="date">Example card layout</span>
                    </div>
                  </div>
                  <div className="extra content">
                    <a target="_blank" href="https://reactjs.org/">
                      <i className="react  icon"></i>React site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui inverted vertical footer segment">
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="six wide column">
                <h4 className="ui inverted header">Links</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">
                    Home
                  </a>
                  <a href="#" className="item">
                    Study{" "}
                  </a>
                  <a href="#" className="item">
                    Test
                  </a>
                  <a href="#" className="item">
                    Profile
                  </a>
                </div>
              </div>
              {/* <div className="three wide column">
                <h4 className="ui inverted header">Services</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">
                    Banana Pre-Order
                  </a>
                  <a href="#" className="item">
                    DNA FAQ
                  </a>
                  <a href="#" className="item">
                    How To Access
                  </a>
                  <a href="#" className="item">
                    Favorite X-Men
                  </a>
                </div>
              </div> */}
              <div className="seven wide column">
                <h4 className="ui inverted header">App creator</h4>
                <div className="field">
                  <label>
                    {" "}
                    <i className="paint brush icon"></i> Made by Nicholas
                    Nwanochie
                    <br></br>
                    <br></br>
                    <i class="upload icon"></i>
                    <a target="_blank" href="http://nicholasnwanochie.com/">
                      Portfolio
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default main;
