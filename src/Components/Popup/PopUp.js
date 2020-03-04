import React, { Component } from "react";

export default class PopUp extends Component {
  render() {
    const { close, txt } = this.props;
    return (
      <div className="PopUp">
        <div className="msg">
          <div className="msg-box">
            <h3>알림메세지</h3>
            <div className="close" onClick={close} />
          </div>
          <div className="contents">{txt}</div>
          <div className="btn">
            <button onClick={close}>확인</button>
          </div>
        </div>
      </div>
    );
  }
}
