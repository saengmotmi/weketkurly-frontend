import React, { Component } from "react";
import "./Free.scss";

export default class Free extends Component {
  render() {
    return (
      <div className="no2">
        <div className="img">
          <span className={this.props.scroll ? "free-move" : "free"}>
            무료배송!
          </span>
        </div>
      </div>
    );
  }
}
