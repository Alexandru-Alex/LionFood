import React, { Component } from "react";
import "./home.css";
class home extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundColor: "#333a41",
          height: 500,
        }}
      >
        <p> Aceasta este o aplicatie pentru portofoliu</p>
        <p> Momentan este doar partea de front-end</p>
        <p> Pentru realizarea ei am folosit ReactJS/ Bootstrap</p>
      </div>
    );
  }
}

export default home;
/*
 <p>Aceasta este o aplicatie pentru portofoliu</p>
        <p>Pentru dezvoltarea acestei aplicati am folost ReactJS</p>
        <p>Aplicatia inca este in dezvoltare</p>
        <p>Momentan este doar partea de Front-End</p>
*/
