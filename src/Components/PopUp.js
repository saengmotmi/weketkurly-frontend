import React, { Component } from "react";

export default class PopUp extends Component {
  render() {
    return (
      <div className="PopUp">
        <div className="msg">
          <div className="msg-box">
            <h3>알림메세지</h3>
            <div className="close" onClick={this.props.close} />
          </div>
          <div className="contents">{this.props.txt}</div>
          <div className="btn">
            <button onClick={this.props.close}>확인</button>
          </div>
        </div>
      </div>
    );
  }
}
