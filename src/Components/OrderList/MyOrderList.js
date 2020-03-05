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
        {/* 상품 컴포넌트 */}
        <div className="product">
          <div className="date">2020.02.08(19시 34분)</div>
          <div className="table">
            <ul>
              <li>
                <div className="name">[네떼] 파프리카샐러드 65g 외 5건</div>
                <div className="product-info">
                  <div className="info">
                    <div className="thumb" />
                    <div>
                      <dl>
                        <dt>주문번호</dt>
                        <dd>1581158003681</dd>
                      </dl>
                      <dl>
                        <dt>걸제금액</dt>
                        <dd>31,880원</dd>
                      </dl>
                      <dl>
                        <dt>주문선택</dt>
                        <dd>배송완료</dd>
                      </dl>
                    </div>
                  </div>
                  <div className="button">
                    <button className="write">후기쓰기</button>
                    <button className="question">1:1 문의</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
    );
  }
}
