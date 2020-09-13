import React, { Component } from "react";
import { Picture } from "react-responsive-picture";
import Restaurant from "./restaurant.jsx";
import background from "../../imagini/restaurant-background.jpg";
import "./restaurante.css";
class restaurant extends Component {
  state = {};

  render() {
    const restaurantelist = this.props.lista.map((restaurant) => (
      <Restaurant
        src={background}
        key={restaurant.id}
        restaurant={restaurant}
      />
    ));
    return (
      <div>
        <div>
          <Picture className="background" src={background} />
        </div>

        <section className="home-cities">
          <h2 className="section-headline full-container">
            Restaurante
            <span className="headline-subtitle">Restaurantele noastre</span>
          </h2>

          <div className="city-list-wrapper">
            <ul className="city-list">{restaurantelist}</ul>
          </div>
        </section>

        <div
          class="col-lg-10 col-lg-offset-1 footersection"
          style={{ textAlign: "left" }}
        >
          <div
            class="row"
            style={{ justifyContent: "center", marginBottom: 20 }}
          >
            <div class="col-lg-9 col-md-9 col-sm-8">
              <p align="justify">&nbsp;</p>
              <h4>
                <strong>
                  Restaurantele Lion acum mai aproape decat ti-ai putea
                  imagina：
                </strong>
              </h4>
              <ul>
                <span>✓ </span>Ai peste 10 de restaurante și branduri exclusive
                pentru a-ti potoli foamea.
                <br />
                <span>✓</span> Livratori pregatiti pentru a-ti livra mancarea
                proaspata in cel mai scurt timp posibil.
                <br />
                <span>✓</span> Serviciu de relatii cu clientii prietenos pentru
                a te ajuta in orice situatie.
                <br />
              </ul>
              <h4>
                <strong>
                  Cum sa comanzi mancare online de la cele mai apreciate
                  restaurante din zona ta：
                </strong>
              </h4>
              <span>1</span> Introdu adresa unde doresti sa iti livram mancarea,
              fie ca esti acasa sau la birou
              <br />
              <span>2</span> Selecteaza "Arata restaurante"
              <br />
              <span>3</span> Alege restaurantul dorit
              <br />
              <span>4</span> Selecteaza preparatele tale si adauga produsele in
              cosul tau
              <br />
              <span>5</span> Selecteaza "Continua la Checkout"
              <br />
              <span>6</span> Confirma comanda si introdu detaliile adresei unde
              doresti livrarea
              <br />
              <span>7</span> Plateste si asteapta sa ajunga mancarea
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default restaurant;
