import React, { Component } from "react";
import Count from "../../Components/Count";
import TotalPrice from "../../Components/TotalPrice";
import CartBtn from "../../Components/CartBtn";
import PopUp from "../../Components/PopUp";

export default class ProductBar extends Component {
  render() {
    const {
      scroll,
      display,
      name,
      number,
      price,
      point,
      save,
      popUp,
      onClickBarOpen,
      onClickBarClose,
      handleOnClickPlus,
      handleOnClickMinus,
      handleOnClickSave,
      togglePopUp
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
                <span className="title">{name}</span>
                <span className="count">
                  <Count
                    number={number}
                    handleOnClickPlus={handleOnClickPlus}
                    handleOnClickMinus={handleOnClickMinus}
                  />
                </span>
                <span className="price">{price}원</span>
              </li>
            </ul>
            <div className="total-price-point">
              <TotalPrice price={price} point={point} />
            </div>
            <div className="btn">
              <CartBtn
                handleOnClickSave={handleOnClickSave}
                togglePopUp={togglePopUp}
                save={save}
              />
              {popUp ? (
                <PopUp
                  close={togglePopUp}
                  txt="늘 사는 리스트에 추가했습니다."
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
