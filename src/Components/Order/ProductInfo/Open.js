import React, { Component } from "react";

export default class Open extends Component {
  render() {
    return (
      <div className="product-info-open">
        <h2>상품정보</h2>
        <table className="product-info-table">
          <thead>
            <tr>
              <th></th>
              <th className="info">상품정보</th>
              <th>상품금액</th>
            </tr>
          </thead>
          <tbody>
            <tr className="each">
              <td className="thumb">
                <img
                  src="https://img-cf.kurly.com/shop/data/goods/1533198937448s0.jpg"
                  alt="[선물세트] 유기샘 브라질너트 바삭대추 세트"
                />
              </td>
              <td className="info">
                <div className="name">
                  [선물세트] 유기샘 브라질너트 바삭대추 세트
                </div>
                <div>1개 / 개당 37,000원</div>
              </td>
              <td className="price">37,000원</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
