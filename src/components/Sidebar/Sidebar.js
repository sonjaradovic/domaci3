import React, { Component } from "react";
import "./Sidebar.css";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div class="sidebar">
        <h2 id="header-fav">Favorites</h2>
        {this.props.favorites.map((Product, index) => {
          return (
            <div id="product-div">
              <img
                id="img"
                src={require("../../assets/img/" + Product.picture).default}
                alt={Product.name}
              />
              <div id="product-info">
                <h4>
                  <b>{Product.name}</b>
                </h4>
                <p>{Product.price}din</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
