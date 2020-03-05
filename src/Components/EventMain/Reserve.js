import React, { Component } from "react";
import "./Reserve.scss";

export default class Reserve extends Component {
  render() {
    return (
      <div className="no3">
        <div className="img">
          <span
            className={this.props.scrollValue ? "discount-move" : "discount"}
          >
            5%
          </span>
        </div>
      </div>
    );
  }
}
