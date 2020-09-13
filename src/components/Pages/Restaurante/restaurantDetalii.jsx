import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";

import "./restaurante.css";
class RestaurantDetalii extends Component {
  state = {};
  render() {
    const restaurant = this.props.lista.map((restaurant) =>
      restaurant.name === this.props.match.params.name ? (
        <RestaurantDetalii
          key={restaurant.id}
          background={restaurant.background}
        />
      ) : null
    );
    const filtru = restaurant.filter(function (el) {
      return el != null;
    });
    return (
      <div>
        <picture>
          <div
            className="city-picture b-lazy b-loaded b-loaded background"
            style={{
              backgroundImage: filtru[0].props.background,
            }}
          ></div>
        </picture>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>{this.props.match.params.name}</h1>
        </div>
        <div className="menu__blocks-wrapper">
          <section>
            <div className="vendor-info-main-details-cuisines-container summary">
              <div className="badge m-2 badge-pill badge-success">
                <span>OPEN</span>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="orange"
                  isHalf={true}
                  value="4"
                />
              </div>
              <ul
                className="vendor-info-main-details-cuisines"
                style={{ color: "grey" }}
              >
                <li>
                  <span className="budget-symbol--filled">$</span>
                  <span className="budget-symbol--filled">$</span>
                  <span>$</span>
                </li>
                <li data-id="">Pizza</li>
                <li data-id="">Ciorbe &amp; Carne</li>
              </ul>
            </div>
            <div className="menu__items">
              <div className="dish-category-section">
                <div
                  className="dish-category-section__inner-wrapper"
                  id="menu__category-id-140892"
                >
                  <h2 className="dish-category-title">Ciorbe</h2>

                  <ul className="dish-list">
                    <li className="dish-card h-product hrecipe menu__item ">
                      <span className="item-react-root">
                        <div className="dish-info-container ">
                          <div className="dish-info">
                            <h3 className="dish-name fn p-name">
                              <span>Borș de pește</span>
                            </h3>
                            <p className="dish-description e-description ingredients">
                              Pește crap, cartofi, ceapă, morcov, ardei gras,
                              țelină, roșii, ou, orez - 260/100g
                            </p>
                          </div>
                        </div>
                        <section className="action-bar">
                          <div className="action-bar-content">
                            <div className="price-tags-container">
                              <span className="price p-price">
                                {" "}
                                17,00&nbsp;RON
                              </span>
                              <div className="tags-container"></div>
                            </div>
                          </div>
                        </section>
                      </span>
                    </li>
                    <li className="dish-card h-product hrecipe menu__item ">
                      <span className="item-react-root">
                        <div className="dish-info-container ">
                          <div className="dish-info">
                            <h3 className="dish-name fn p-name">
                              <span>Ciorba de vacuta</span>
                            </h3>
                            <p className="dish-description e-description ingredients">
                              Pulpă de vită, morcov, ceapă, țelină, cartofi,
                              ardei gras, fasole verde, mazăre, dovlecei, roșii
                              - 260/40g
                            </p>
                          </div>
                        </div>
                        <section className="action-bar">
                          <div className="action-bar-content">
                            <div className="price-tags-container">
                              <span className="price p-price">
                                {" "}
                                12,00&nbsp;RON
                              </span>
                              <div className="tags-container"></div>
                            </div>
                          </div>
                        </section>
                      </span>
                    </li>
                    <li className="dish-card h-product hrecipe menu__item ">
                      <span className="item-react-root">
                        <div className="dish-info-container ">
                          <div className="dish-info">
                            <h3 className="dish-name fn p-name">
                              <span>Ciorba de legume</span>
                            </h3>
                            <p className="dish-description e-description ingredients">
                              Cartofi, roșii, morcovi, ceapă, țelină, dovlecei,
                              fasole verde, mazăre, ulei, verdeață - 300g
                            </p>
                          </div>
                        </div>
                        <section className="action-bar">
                          <div className="action-bar-content">
                            <div className="price-tags-container">
                              <span className="price p-price">
                                {" "}
                                17,00&nbsp;RON
                              </span>
                              <div className="tags-container"></div>
                            </div>
                          </div>
                        </section>
                      </span>
                    </li>
                    <li className="dish-card h-product hrecipe menu__item ">
                      <span className="item-react-root">
                        <div className="dish-info-container ">
                          <div className="dish-info">
                            <h3 className="dish-name fn p-name">
                              <span>Supă cremă de legume</span>
                            </h3>
                            <p className="dish-description e-description ingredients">
                              Țelină, ardei gras, dovlecel, morcovi, cartofi,
                              ceapă, ulei de măsline, crutoane - 260ml
                            </p>
                          </div>
                        </div>
                        <section className="action-bar">
                          <div className="action-bar-content">
                            <div className="price-tags-container">
                              <span className="price p-price">
                                {" "}
                                12,00&nbsp;RON
                              </span>
                              <div className="tags-container"></div>
                            </div>
                          </div>
                        </section>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="dish-category-section">
                <div className="dish-category-section__inner-wrapper">
                  <h2 className="dish-category-title">Carne</h2>

                  <ul className="dish-list">
                    <li className="dish-card h-product hrecipe menu__item ">
                      <span className="item-react-root">
                        <div className="dish-info-container ">
                          <div className="dish-info">
                            <h3 className="dish-name fn p-name">
                              <span>Supă de pui cu tăieței</span>
                            </h3>
                            <p className="dish-description e-description ingredients">
                              Pui, morcov, țelină, ceapă, tăieței, roșii - 300g
                            </p>
                          </div>
                        </div>
                        <section className="action-bar">
                          <div className="action-bar-content">
                            <div className="price-tags-container">
                              <span className="price p-price">
                                {" "}
                                13,00&nbsp;RON
                              </span>
                              <div className="tags-container"></div>
                            </div>
                          </div>
                        </section>
                      </span>
                    </li>
                    <li className="dish-card h-product hrecipe menu__item ">
                      <span className="item-react-root">
                        <div className="dish-info-container ">
                          <div className="dish-info">
                            <h3 className="dish-name fn p-name">
                              <span>Coaste de porc în sos bbq și cartofi</span>
                            </h3>
                            <p className="dish-description e-description ingredients">
                              Coaste de porc, sos bbq, cartofi prăjiți -
                              400/150g
                            </p>
                          </div>
                        </div>
                        <section className="action-bar">
                          <div className="action-bar-content">
                            <div className="price-tags-container">
                              <span className="price p-price">
                                {" "}
                                49,00&nbsp;RON
                              </span>
                              <div className="tags-container"></div>
                            </div>
                          </div>
                        </section>
                      </span>
                    </li>
                    <li className="dish-card h-product hrecipe menu__item ">
                      <span className="item-react-root">
                        <div className="dish-info-container ">
                          <div className="dish-info">
                            <h3 className="dish-name fn p-name">
                              <span>
                                Crispy fingers, cartofi prăjiți și sos calypso
                              </span>
                            </h3>
                            <p className="dish-description e-description ingredients">
                              Piept de pui, ou, făină, fulgi de porumb, mix de
                              semințe, cartofi, sos calypso - 200/150/50g
                            </p>
                          </div>
                        </div>
                        <section className="action-bar">
                          <div className="action-bar-content">
                            <div className="price-tags-container">
                              <span className="price p-price">
                                {" "}
                                29,00&nbsp;RON
                              </span>
                              <div className="tags-container"></div>
                            </div>
                          </div>
                        </section>
                      </span>
                    </li>
                    <li className="dish-card h-product hrecipe menu__item ">
                      <span className="item-react-root">
                        <div className="dish-info-container ">
                          <div className="dish-info">
                            <h3 className="dish-name fn p-name">
                              <span>Cotlet de porc la gratar</span>
                            </h3>
                            <p className="dish-description e-description ingredients">
                              200g
                            </p>
                          </div>
                        </div>
                        <section className="action-bar">
                          <div className="action-bar-content">
                            <div className="price-tags-container">
                              <span className="price p-price">
                                {" "}
                                14,00&nbsp;RON
                              </span>
                              <div className="tags-container"></div>
                            </div>
                          </div>
                        </section>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default RestaurantDetalii;
