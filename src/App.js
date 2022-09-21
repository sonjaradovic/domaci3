import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Mainbar } from "./components/Mainbar/Mainbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Details } from "./components/Details/Details";
import Products from "./assets/products.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productObj: 0,
      favProducts: Products.filter(prod => {
        return prod.flag === true;
      })
    };
  }

  ShowDetails(id) {
    let product = Products.find(prod => {
      return prod.id === id;
    });
    this.setState({ productObj: product });
  };

  FavProductsAdd = list => {
    this.setState({ favProducts: [...this.state.favProducts, list] });
    console.log(this.state.favProducts);
  };

  FavProductsRmv = rmvProd => {
    let list = this.state.favProducts.filter(prod => {
      return prod.id !== rmvProd.id;
    });
    this.setState({ favProducts: list });
    console.log(this.state.favProducts);
  };

  render() {
    return (
      <Router>
        <div id="site">
          <Header />
          <main id="main-site">
            <div class="router-main">
              <Route
                exact
                path="/"
                render={props => (
                  <Mainbar
                    {...props}
                    details={this.ShowDetails.bind(this)}
                    favAdd={this.FavProductsAdd.bind(this)}
                    favRmv={this.FavProductsRmv.bind(this)}
                  />
                )}
              />
              <Route
                path="/details/:id"
                render={props => (
                  <Details
                    {...props}
                    obj={this.state.productObj}
                    favAdd={this.FavProductsAdd.bind(this)}
                    favRmv={this.FavProductsRmv.bind(this)}
                  />
                )}
              />
            </div>
            <Sidebar
              key={"key ${index}"}
              favorites={this.state.favProducts}
              class="sidebar"
            />
          </main>
          <footer>Made by Sonja Radovic</footer>
        </div>
      </Router>
    );
  }
}

export default App;

