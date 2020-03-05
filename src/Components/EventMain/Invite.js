import React, { Component } from "react";
import "./Invite.scss";

export default class Invite extends Component {
  render() {
    return (
      <div className="no4">
        <div className="img">
          <span
            className={this.props.scrollEvent ? "contents-move" : "contents"}
          >
            적립금 5천원!
          </span>
        </div>
      </div>
    );
  }
}
