import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from './Header'
import Code from "../img/code1.jpg";
import Super from "../img/super.jpg";


import $ from 'jquery'
import {findDOMNode} from 'react-dom'

class Options extends Component {

handleToggle = () => {
  const el = findDOMNode(this.refs.toggle)
  $(el).slideToggle();


}

// handleHover = () => {
//   const hv = findDOMNode(this.refs.hover)

  
// $(hv).dimmer({
//   on: "hover",
// });


// }
  


  render() {
    return (
      <>
        <Header />
        <div class="ui inverted vertical masthead center aligned segment">
          <div className="ui text container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div ref="hover" class="ui special cards">
              <div class="card">
                <div class="blurring dimmable image">
                  <div class="ui dimmer">
                    <div class="content">
                      <div class="center">
                        <div class="ui inverted button">Add Friend</div>
                      </div>
                    </div>
                  </div>
                  <img
                    onMouseOver={this.handleHover}
                    style={{ height: "190px" }}
                    src={Super}
                  />
                </div>
                <div class="content">
                  <Link to="/main/study/comics" class="header">
                    Comics
                  </Link>
                  <div class="meta">
                    <span class="date">From Spiderman to Spawn</span>
                  </div>
                </div>
                <div class="extra content">
                  <i class="newspaper icon"></i>20 card set
                </div>
              </div>
              <div class="card">
                <div class="blurring dimmable image">
                  <div class="ui inverted dimmer">
                    <div class="content">
                      <div class="center">
                        <div class="ui primary button">Add Friend</div>
                      </div>
                    </div>
                  </div>
                  <img onMouseOver={this.handleHover} src={Code} />
                </div>
                <div class="content">
                  <Link to="/main/study/code" class="header">
                    Software Development
                  </Link>
                  <div class="meta">
                    <span class="date">Dream in code</span>
                  </div>
                </div>
                <div class="extra content">
                  <a>
                    <i class="newspaper icon"></i>30 card set
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 ref="toggle">hey im not hidden</h3>
        <button onClick={this.handleToggle}>hide me</button>
      </>
    );
  }
}

export default Options
