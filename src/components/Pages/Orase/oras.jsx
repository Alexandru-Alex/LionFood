import React, { Component } from "react";
import "./orase.css";

class Oras extends Component {
  render() {
    return (
      <li key={this.props.oras.id}>
        <a className="city-tile" href={"/oras/" + this.props.oras.name}>
          <figure>
            <picture>
              <div
                className="city-picture b-lazy b-loaded b-loaded"
                style={{
                  backgroundImage: this.props.oras.background,
                }}
              ></div>
            </picture>
            <figcaption className="city-info">
              <span className="city-name">{this.props.oras.name}</span>
            </figcaption>
          </figure>
        </a>
      </li>
    );
  }
}
export default Oras;
/* <li key={oras.id}>
      <a className="city-tile" href={"/" + oras.name + "/restaurante"}>
        <figure>
          <picture>
            <div
              className="city-picture b-lazy b-loaded b-loaded"
              style={{
                backgroundImage: oras.background,
              }}
            ></div>
          </picture>
          <figcaption className="city-info">
            <span className="city-name">{oras.name}</span>
          </figcaption>
        </figure>
      </a>
    </li>



    href={"/" + this.props.oras.name + "/restaurante"}
*/
