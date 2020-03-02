import React, { Component } from "react";
import Count from "../Components/Count";

export default class ProductInfo extends Component {
  render() {
    const {
      name,
      short_description,
      origin,
      price,
      point,
      unit_text,
      weight,
      delivery_time_type_text,
      number,
      contactant,
      handleOnClickPlus,
      handleOnClickMinus
    } = this.props;
    return (
      <div className="product-info">
        <div className="product-title">
          <div className="title">
            <p>{name}</p>
            <div className="share-icon"></div>
          </div>
          <span>{short_description}</span>
        </div>

        <div className="price-bar">
          <span className="price">{price}</span>
          <span className="won">원</span>
        </div>

        <div className="accumulate">
          {/* <span className = "befor-login-point">로그인 후, 적립혜택이 제공됩니다.</span> */}
          <div className="after-login-point">
            <span className="save-point">일반 0.5%</span>
            <span className="each">개당</span>
            <span className="won-save">{point}원 적립</span>
          </div>
        </div>

        <div className="goods-info">
          <dl>
            <dt>판매단위</dt>
            <dd>{unit_text}</dd>
          </dl>
          <dl className="list">
            <dt>중량/용량</dt>
            <dd>{weight}</dd>
          </dl>
          <dl className="list">
            <dt>배송구분</dt>
            <dd>{delivery_time_type_text}</dd>
          </dl>
          <dl className="list">
            <dt>원산지</dt>
            <dd>{origin}</dd>
          </dl>
          <dl className="list">
            <dt>포장타입</dt>
            <dd>
              <div>상온/종이포장</div>
              <div className="delivery">
                택배배송은 에코포장이 스티로폼으로 대체됩니다.
              </div>
            </dd>
          </dl>
          <dl className="list">
            <dt>알레르기정보</dt>
            <dd>
              <div>{contactant}</div>
            </dd>
          </dl>
          <dl className="list">
            <dt>구매수량</dt>
            <Count
              number={number}
              handleOnClickPlus={handleOnClickPlus}
              handleOnClickMinus={handleOnClickMinus}
            />
          </dl>
        </div>
      </div>
    );
  }
}
