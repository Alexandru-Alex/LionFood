import React, { Component } from "react";
import { Picture } from "react-responsive-picture";

import background from "../../imagini/background-city.jpg";
import "./orase.css";
import Oras from "./oras";

class orase extends Component {
  render() {
    const oraselist = this.props.lista.map((oras) => (
      <Oras src={background} key={oras.id} oras={oras} />
    ));
    return (
      <div>
        <div>
          <Picture className="background" src={background} />
        </div>

        <section className="home-cities">
          <h2 className="section-headline full-container">
            Orase
            <span className="headline-subtitle">Orasele unde suntem</span>
          </h2>

          <div className="city-list-wrapper">
            <ul className="city-list">{oraselist}</ul>
          </div>
        </section>
      </div>
    );
  }
}

export default orase;
