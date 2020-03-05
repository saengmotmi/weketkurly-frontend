import React, { Component } from "react";
import "./MyKurly.scss";

export default class MyPage extends Component {
  render() {
    return (
      <aside className="my-kurly">
        <h2>마이컬리</h2>
        <ul>
          <li>
            <span>주문내역</span>
            <div className="arrow" />
          </li>
          <li>
            <span>늘 사는 것</span>
            <div className="arrow" />
          </li>
          <li>
            <span>상품후기</span>
            <div className="arrow" />
          </li>
          <li>
            <span>적립금</span>
            <div className="arrow" />
          </li>
          <li>
            <span>쿠폰</span>
            <div className="arrow" />
          </li>
          <li>
            <span>개인정보수정</span>
            <div className="arrow" />
          </li>
        </ul>
        <div className="help">
          <span>도움이 필요하신가요?</span>
          <div>1:1 문의하기</div>
        </div>
      </aside>
    );
  }
}
