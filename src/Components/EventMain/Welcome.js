import React, { Component } from "react";
import "./Welcome.scss";

export default class Welcome extends Component {
  render() {
    return (
      <div className="no1">
        <img
          src="https://res.kurly.com/images/event/join/191023/pc/img_benefit1.png"
          alt="혜택1"
        />
        <div className="list-goods">
          <ul>
            <div className="list">{this.props.eventList}</div>
          </ul>
          <div className="list-txt">
            ・ 부정한 방법(중복 가입 또는 중복 참여, 명의 도용 등)으로 신규 가입
            이벤트를 이용할 경우, 주문 완료 후에도 주문이 취소될 수 있습니다.
          </div>
        </div>
      </div>
    );
  }
}
