import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import SiderDrawer from "./components/SideDrawer/SiderDrawer";
import Footer from "./components/Footer/Footer";
import Backdrop from "./components/BackDrop/Backdrop";
import Restaurante from "./components/Pages/Restaurante/restaurante";
import Orase from "./components/Pages/Orase/orase";
import Home from "./components/Pages/home";
import Detalii from "./components/Pages/Restaurante/restaurantDetalii";
import OrasRestaurant from "./components/Pages/Orase/orasrestaurant";
import Login from "./components/Pages/autentificare";
import restaurant1 from "./components/imagini/restaurant1.jpg";
import restaurant2 from "./components/imagini/restaurant2.jpg";
import restaurant3 from "./components/imagini/restaurant3.jpg";
import restaurant4 from "./components/imagini/restaurant4.jpg";
import restaurant5 from "./components/imagini/restaurant5.png";
import restaurant6 from "./components/imagini/restaurant6.jpg";
import restaurant7 from "./components/imagini/restaurant7.jpg";
import restaurant8 from "./components/imagini/restaurant8.jpg";
import restaurant9 from "./components/imagini/restaurant9.jpg";
import constanta from "./components/imagini/Constanta.jpg";
import bucuresti from "./components/imagini/Bucuresti.jpg";
import tulcea from "./components/imagini/Tulcea.jpg";
import braila from "./components/imagini/Braila.jpg";
import timisoara from "./components/imagini/Timisoara.jpg";
import cluj from "./components/imagini/Cluj.jpg";
import fetesti from "./components/imagini/Fetesti.jpg";
class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <React.Fragment>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SiderDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Route
          exact
          path="/restaurante"
          render={() => <Restaurante lista={restaurante} />}
        />
        <Route exact path="/orase" render={() => <Orase lista={orase} />} />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/oras/:name"
          render={(props) => <OrasRestaurant {...props} lista={restaurante} />}
        />
        <Route
          exact
          path="/oras/:name/:name"
          render={(props) => <Detalii {...props} lista={restaurante} />}
        />
        <Route exact path="/login" component={Login} />
        <Footer />
      </React.Fragment>
    );
  }
}
const restaurante = [
  {
    id: 1,
    name: "Chopstix",
    oras: "Constanta",
    background: "url(" + restaurant1 + ")",
  },
  {
    id: 2,
    name: "King Potato",
    oras: "Bucuresti",
    background: "url(" + restaurant2 + ")",
  },
  {
    id: 3,
    name: "Pizza Evo",
    oras: "Bucuresti",
    background: "url(" + restaurant3 + ")",
  },
  {
    id: 4,
    name: "Salad Box",
    oras: "Tulcea",
    background: "url(" + restaurant4 + ")",
  },
  {
    id: 5,
    name: "Soupizza",
    oras: "Cluj-Napoca",
    background: "url(" + restaurant5 + ")",
  },
  {
    id: 6,
    name: "Hermes",
    oras: "Braila",
    background: "url(" + restaurant6 + ")",
  },

  {
    id: 7,
    name: "Bonaccia",
    oras: "Timisoara",
    background: "url(" + restaurant7 + ")",
  },
  {
    id: 8,
    name: "Frapperia",
    oras: "Fetesti",
    background: "url(" + restaurant8 + ")",
  },
  {
    id: 9,
    name: "Dabo Doner",
    oras: "Constanta",
    background: "url(" + restaurant9 + ")",
  },
];
const orase = [
  {
    id: 1,
    name: "Constanta",
    background: "url(" + constanta + ")",
  },
  {
    id: 2,
    name: "Bucuresti",
    background: "url(" + bucuresti + ")",
  },
  {
    id: 3,
    name: "Tulcea",
    background: "url(" + tulcea + ")",
  },
  {
    id: 4,
    name: "Cluj-Napoca",
    background: "url(" + cluj + ")",
  },
  {
    id: 5,
    name: "Braila",
    background: "url(" + braila + ")",
  },
  {
    id: 6,
    name: "Timisoara",
    background: "url(" + timisoara + ")",
  },
  {
    id: 7,
    name: "Fetesti",
    background: "url(" + fetesti + ")",
  },
];
export default App;
