
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './styling/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="nAvSt">
        <h1>Menu </h1><nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/viewall">ViewAll</Link>
        </li>
      </ul>
    </nav>
      </div>
    )
  }
}

export default NavBar