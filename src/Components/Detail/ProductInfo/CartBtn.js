import React, { Component } from "react";
import "./CartBtn.scss";

export default class CartBtn extends Component {
  render() {
    const { save, handleOnClickSave, onChangeCart } = this.props;
    return (
      <div className="btn">
        <div className="cart-btn">
          <button className="alarm-off">재입고 알림</button>
          <button
            className={save ? "save-item clicked" : "save-item"}
            onClick={handleOnClickSave}
          >
            늘 사는것
          </button>
          <button className="go-to-cart" onClick={onChangeCart}>
            장바구니 담기
          </button>
        </div>
      </div>
    );
  }
}
