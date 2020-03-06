import React from "react";
import "./Count.scss";

export default class Count extends React.Component {
  render() {
    return (
      <div className="option">
        <button className="leftBtn" onClick={this.props.handleOnClickMinus}>
          -
        </button>
        <div>{this.props.number}</div>
        <button className="rightBtn" onClick={this.props.handleOnClickPlus}>
          +
        </button>
      </div>
    );
  }
}
