import React, { Component } from "react";

import logo from "../imagini/lion.png";
import "./Toolbar.css";
import { BrowserRouter as Router } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark  ">
          <img className="navbar-logo" src={logo} alt="logo" />
          <a className=" bg-color-brand" href="/">
            Restaurant Lion
          </a>
          <button
            className="navbar-toggler mb-0 "
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.props.drawerClickHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center  "
            id="navbarNav"
          >
            <ul className="navbar-nav  ">
              <li className="nav-item ">
                <a className="nav-link " href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/restaurante">
                  Restaurante
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/orase">
                  Orase
                </a>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav collapse navbar-collapse   ">
            <li className="nav-item">
              <a className="nav-link " href="/login">
                Autentificare
              </a>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}

export default Toolbar;
