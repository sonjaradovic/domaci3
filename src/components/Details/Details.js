import React, { Component } from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import { Rate } from "../Rate/Rate";
import { FavBtn } from "../FavBtn/FavBtn";
import useHook from "../Details/useHook";


export class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choosed: this.props.obj
    };
  }

  OnClickFavAdd(prod) {
    this.props.favAdd(prod);
  }

  OnClickFavRmv(prod) {
    this.props.favRmv(prod);
  }

  render() {
    return (
      <div class="content">
        <div class="content-header">
          <Link to="/" id="back-link">
            Back
          </Link>
          <h1>{this.state.choosed.name}</h1>
          <div id="info-div">
            <h3 id="product-price">{this.state.choosed.price}din</h3>
            <FavBtn
              obj={this.state.choosed}
              status={this.state.choosed.flag}
              key={"key ${index}"}
              favAdd={this.OnClickFavAdd.bind(this)}
              favRmv={this.OnClickFavRmv.bind(this)}
              id="product-fav"
            />
          </div>
        </div>
        <div class="main-content">
          <div class="img-div">
            <img
              id="img"
              src={require("../../assets/img/" + this.state.choosed.picture).default}
              alt={this.state.choosed.name}
            />
          </div>
          <p>{this.state.choosed.description}</p>
        </div>
        <Rate rates={this.state.choosed.reviews} id="product-reviews" />
        <br />
        <br />
        <div>
          <h2>Reviews</h2>
          <div class="reviews-div">
            {this.state.choosed.reviews.map(Review => {
              return (
                <p class="comment-div">
                {Review.rate == 5 && <div class="comm-rate-btns" id="rate-div5">5</div>}
                {Review.rate == 4 && <div class="comm-rate-btns" id="rate-div4">4</div>}
                {Review.rate == 3 && <div class="comm-rate-btns" id="rate-div3">3</div>}
                {Review.rate == 2 && <div class="comm-rate-btns" id="rate-div2">2</div>}
                {Review.rate == 1 && <div class="comm-rate-btns" id="rate-div1">1</div>}
                  <b>
                    {Review.username}&nbsp;
                  </b>
                  {Review.comment}
                  <br />
                </p>
              );
            })}
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
  
}

export default Details;


