import React, { Component } from "react";
import "./PageBtn.scss";

export default class PageBtn extends Component {
  render() {
    return (
      <div className="page-btn">
        <button />
        <button className="before" />
        <button className="num">1</button>
        <button className="next" />
        <button />
      </div>
    );
  }
}
