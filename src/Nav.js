import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div class="dropdown">
        <button class="dropbtn">Menu</button>
        <div class="dropdown-content">
          <Link to="/">
            <a href="#">Digital Content & Devices</a>
          </Link>
          <Link to="/">
            <a href="#">Shop By Department</a>
          </Link>
          <Link to="/">
            <a href="#">Programs & Features</a>
          </Link>
          <Link to="/help">
            <a href="#">Help & Settings</a>
          </Link>
        </div>
      </div>
      <span className="message">
        Today's Amazon best sellers! 🚀🚀🚀 &ensp; Enjoy your shopping!
      </span>
    </div>
  );
}

export default Nav;
