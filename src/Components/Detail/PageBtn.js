import React, { Component } from "react";

export default class PageBtn extends Component {
  render() {
    return (
      <div className="page-btn">
        <div className="first-page" />
        <div className="before" />
        <button className="num">1</button>
        <button className="num">2</button>
        <button className="num">3</button>
        <button className="num">4</button>
        <button className="num">5</button>
        <button className="num">6</button>
        <button className="num">7</button>
        <button className="num">8</button>
        <button className="num">9</button>
        <button className="num">10</button>
        <div className="next" />
        <div className="last-page" />
      </div>
    );
  }
}
