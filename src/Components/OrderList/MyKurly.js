import React, { Component } from "react";
import "./MyKurly.scss";

export default class MyKurly extends Component {
  render() {
    const menu = [
      "주문내역",
      "늘 사는 것",
      "상품후기",
      "적립금",
      "쿠폰",
      "개인 정보 수정"
    ];

    return (
      <aside className="my-kurly">
        <h2>마이컬리</h2>
        <ul>
          {menu.map(menu => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="help">
          <span>도움이 필요하신가요?</span>
          <div>1:1 문의하기</div>
        </div>
      </aside>
    );
  }
}
