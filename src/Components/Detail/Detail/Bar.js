import React, { Component } from "react";
import Count from "../ProductInfo/Count";
import PopUp from "../../PopUp/PopUp";
import CartBtn from "../ProductInfo/CartBtn";
import TotalPrice from "../ProductInfo/TotalPrice";
import "./Bar.scss";

export default class Bar extends Component {
  render() {
    const {
      scroll,
      display,
      info,
      number,
      price,
      point,
      save,
      popUp,
      popUpCart,
      onClickBarOpen,
      onClickBarClose,
      handleOnClickPlus,
      handleOnClickMinus
    } = this.props;
    return (
      <div className="bar" style={{ display: scroll ? "block" : "none" }}>
        <div className="bar-open">
          <div className="btn-open" onClick={onClickBarOpen}>
            상품 선택
          </div>
        </div>
        <div
          className="bar-close"
          style={{ display: display ? "block" : "none" }}
        >
          <div className="btn-close" onClick={onClickBarClose}>
            상품 선택
          </div>
          <div className="bar-info">
            <ul>
              <li>
                <span className="title">{info.name}</span>
                <span className="count">
                  <Count
                    number={number}
                    handleOnClickPlus={handleOnClickPlus}
                    handleOnClickMinus={handleOnClickMinus}
                  />
                </span>
                <span className="price">{price.toLocaleString()}원</span>
              </li>
            </ul>
            <div className="total-price-point">
              <TotalPrice price={price.toLocaleString()} point={point} />
            </div>
            <div className="btn">
              <CartBtn
                handleOnClickSave={this.handleOnClickSave}
                togglePopUp={this.togglePopUp}
                togglePopUpCart={this.togglePopUpCart}
                save={save}
              />
              {popUp ? (
                <PopUp
                  close={this.togglePopUp}
                  txt="늘 사는 리스트에 추가했습니다."
                />
              ) : null}
              {popUpCart ? (
                <PopUp
                  close={this.togglePopUpCart}
                  txt="이미 동일한 상품이 장바구니에 존재합니다."
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
