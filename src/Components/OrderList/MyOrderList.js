import React, { Component } from "react";
import "./MyOrderList.scss";

export default class MyOrderList extends Component {
  render() {
    return (
      <article>
        <div className="order-list">
          <div className="title-bar">
            <h2>주문내역</h2>
            <span className="sub">
              지난 3년간의 주문 내역 조회가 가능합니다
            </span>
          </div>
          <div>
            <select>
              <option>전체기간</option>
              <option>2020년</option>
              <option>2019년</option>
              <option>2018년</option>
            </select>
          </div>
        </div>
      </article>
    );
  }
}
