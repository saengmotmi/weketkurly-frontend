import React, { Component } from "react";
import "./PageBtn.scss";

export default class PageBtn extends Component {
  render() {
    return (
      <div className="page-btn">
        <div className="first-page" />
        <div className="before" />
        <button className="num">1</button>
        <button className="num">2</button>
        <button className="num">3</button>
        <div className="next" />
        <div className="last-page" />
      </div>
    );
  }
}
