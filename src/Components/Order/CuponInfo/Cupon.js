import React, { Component } from "react";
import "./Cupon.scss";

export default class Cupon extends Component {
  render() {
    const { point, usePoint, onChangeValue, onChangePoint } = this.props;
    return (
      <div className="cupon">
        <h2>쿠폰 / 적립금</h2>
        <div className="cupon-table">
          <table>
            <tbody>
              <tr className="cupon-tr">
                <th className="cupon-th">쿠폰 적용</th>
                <td className="cupon-td">
                  사용 가능한 쿠폰이 없습니다.
                  <div className="cupon-kakao">쿠폰사용문의(카카오톡) ></div>
                </td>
              </tr>
              <tr className="point">
                <th>적립금 적용</th>
                <td>
                  <input
                    type="number"
                    name="point"
                    className="text-box"
                    onChange={onChangeValue}
                    value={usePoint ? point : 0}
                  />
                  원
                  <input
                    type="checkbox"
                    className="check-box"
                    onChange={onChangePoint}
                  />
                  <span>모두사용</span>
                  <div>보유적립금: {point}원</div>
                  <div className="emoney">*적립금 내역: 마이컬리 > 적립금</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
