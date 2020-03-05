import React, { Component } from "react";
import "./Tab.scss";

export default class Tab extends Component {
  render() {
    return (
      <div className="tab">
        <ul>
          <li className="tabOn" onClick={this.MoveToProduct}>
            상품설명
          </li>
          <li className="tabOff" onClick={this.MoveToImg}>
            상품이미지
          </li>
          <li className="tabOff" onClick={this.MoveToInfo}>
            상세정보
          </li>
          <li className="tabOff" onClick={this.MoveToReview}>
            고객후기({this.props.info.review_count})
          </li>
          <li className="tabLast" onClick={this.MoveToQA}>
            상품문의(2)
          </li>
          <div className="line" />
        </ul>
      </div>
    );
  }
}
