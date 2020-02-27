import React, { Component } from "react";

export default class SaleEventList extends Component {
  render() {
    const { img, alt } = this.props;
    return (
      <li>
        <img src={img} alt={alt} />
        <div className="arrow"></div>
        <div clssName="price">100원</div>
      </li>
    );
  }
}
