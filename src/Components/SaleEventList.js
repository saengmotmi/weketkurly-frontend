import React, { Component } from "react";

export default class SaleEventList extends Component {
  render() {
    const { img, alt, scrollArrow, scrollSale } = this.props;
    return (
      <li>
        <img src={img} alt={alt} />
        <div className={scrollArrow ? "arrow-move" : "arrow"} />
        <div className={scrollSale ? "price-move" : "price"} />
      </li>
    );
  }
}
