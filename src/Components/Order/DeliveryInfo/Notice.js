import React, { Component } from "react";
import "./Notice.scss";

export default class Notice extends Component {
  render() {
    return (
      <>
        <div className="notice">
          <div className="notice-title">
            <div className="notice-ic" />
            <span className="red">확인해주세요!</span>
          </div>
          <div className="notice-order">
            <span className="red">
              새벽 출입이 어려운 경우, (비밀번호 오류가 있거나, 새벽 경비가
              부재하는 경우 등) 부득이하게 1층 현관 앞, 경비실 앞에 배송을 드릴
              수 있는 점 참고 부탁드립니다
              <br />
            </span>
            <span>
              - 최대한 출입 방법을 명확하게 기재해주시고, 경비실을 통해
              출입해야하는 경우, 경비부재시에 대응방법을 배송메모에 기입해
              주세요.
              <br />- 고객님 자택 현관 앞까지 안전하게 배송될 수 있도록 최선을
              다하겠습니다.
            </span>
          </div>
        </div>
        <img
          src="https://res.kurly.com/pc/service/order/1908/bnr_order_allpaper.png"
          alt="지구를 위해 모든 포장지를 종이로!"
          className="bnr-order"
        />
      </>
    );
  }
}
