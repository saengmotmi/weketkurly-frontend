import React, { Component } from "react";

export default class CartBtn extends Component {
  render() {
    const { save, handleOnClickSave, togglePopUpCart } = this.props;
    return (
      <div className="btn">
        <div className="cart-btn">
          <button className="alarm-off">재입고 알림</button>
          <button
            className={save ? "save-item-clicked" : "save-item"}
            onClick={handleOnClickSave}
          >
            늘 사는것
          </button>
          <button className="go-to-cart" onClick={togglePopUpCart}>
            장바구니 담기
          </button>
        </div>
      </div>
    );
  }
}
