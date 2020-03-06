import React, { Component } from "react";
import "./Tab.scss";

export default class Tab extends Component {
  render() {
    const {
      info,
      tabInfo,
      tabImg,
      tabDetail,
      tabReview,
      tabQA,
      MoveToProduct,
      MoveToImg,
      MoveToInfo,
      MoveToReview,
      MoveToQA
    } = this.props;
    return (
      <div className="tab">
        <ul>
          <li className={tabInfo ? "tabOn" : "tabOff"} onClick={MoveToProduct}>
            상품설명
          </li>
          <li className={tabImg ? "tabOn" : "tabOff"} onClick={MoveToImg}>
            상품이미지
          </li>
          <li className={tabDetail ? "tabOn" : "tabOff"} onClick={MoveToInfo}>
            상세정보
          </li>
          <li className={tabReview ? "tabOn" : "tabOff"} onClick={MoveToReview}>
            고객후기({info.review_count})
          </li>
          <li className={tabQA ? "tabOn" : "tabOff"} onClick={MoveToQA}>
            상품문의(3)
          </li>
          <div className="line" />
        </ul>
      </div>
    );
  }
}
