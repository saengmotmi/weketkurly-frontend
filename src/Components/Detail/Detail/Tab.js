import React, { Component } from "react";
import "./Tab.scss";

export default class Tab extends Component {
  render() {
    const {
      info,
      MoveToProduct,
      MoveToImg,
      MoveToInfo,
      MoveToReview,
      MoveToQA
    } = this.props;
    return (
      <div className="tab">
        <ul>
          <li className="tabOn" onClick={MoveToProduct}>
            상품설명
          </li>
          <li className="tabOff" onClick={MoveToImg}>
            상품이미지
          </li>
          <li className="tabOff" onClick={MoveToInfo}>
            상세정보
          </li>
          <li className="tabOff" onClick={MoveToReview}>
            고객후기({info.review_count})
          </li>
          <li className="tabLast" onClick={MoveToQA}>
            상품문의(2)
          </li>
          <div className="line" />
        </ul>
      </div>
    );
  }
}
