import React, { Component } from "react";

export default class DetailSlide extends Component {
  render() {
    const { name, price, img } = this.props; //destructuring
    return (
      <li className="each-slide">
        <div
          className="relatedImg"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="relatedInfo">
          <div className="name">{name}</div>
          <div className="price">{price}</div>
        </div>
      </li>
    );
  }
}
