import React, { Component } from "react";
import "./Mainbar.css";
import { Link } from "react-router-dom";
import { Rate } from "../Rate/Rate";
import { FavBtn } from "../FavBtn/FavBtn";
import Products from "../../assets/products.json";

export class Mainbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTyping: ""
    };
  }

  OnClickDetails = id => {
    this.props.details(id);
  };

  OnSearch(event) {
    this.setState({ searchTyping: event.target.value.toLowerCase() });
  }

  OnClickFavAdd(prod) {
    this.props.favAdd(prod);
  }

  OnClickFavRmv(prod) {
    this.props.favRmv(prod);
  }

  render() {
    return (
      <div id="mainbar-div">
        <div id="search-div">
          <input
            id="search-input"
            type="text"
            placeholder="Search..."
            onChange={event => this.OnSearch(event)}
          />
        </div>
        <div className="product-list">
          {Products.filter(prod => {
            return (
              prod.name.toLowerCase().indexOf(this.state.searchTyping) !== -1
            );
          }).map((Product, index) => {
            return (
              <div class="product">
                <div id="img-div">
                  <img
                    id="img"
                    src={require("../../assets/img/" + Product.picture).default}
                    alt={Product.name}
                  />
                </div>
                <div id="second-col">
                  <h2 id="product-header">
                    <Link
                      onClick={() => this.OnClickDetails(Product.id)}
                      to={"details/" + Product.id}
                    >
                      {Product.name}
                    </Link>
                  </h2>
                  <p id="product-price">
                    <b>{Product.price}din</b>
                  </p>
                  <FavBtn
                    obj={Product}
                    status={Product.flag}
                    key={"key ${index}"}
                    favAdd={this.OnClickFavAdd.bind(this)}
                    favRmv={this.OnClickFavRmv.bind(this)}
                    id="product-fav"
                  />
                </div>
                <p id="product-description">{Product.description}</p>
                <Rate rates={Product.reviews} id="product-reviews" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Mainbar;
