import React, { Component } from "react";
import "./NewAddress.scss";

export default class CurrentAddress extends Component {
  render() {
    const {
      execPostCode,
      addr,
      extraAddr,
      postcode,
      onChange,
      targetValue
    } = this.props;
    return (
      <>
        <tr className="new-address">
          <th>주소</th>
          <td>
            <button className="newbtn" onClick={execPostCode}>
              새 배송지 추가
            </button>

            <input
              value={addr + extraAddr + postcode}
              className="address-main"
            />
            <input name={targetValue} onChange={onChange} />
            <span>{targetValue.length} / 85자</span>
            <div className="road">
              {addr + extraAddr} {postcode}
              {targetValue}
            </div>
          </td>
        </tr>
        <tr className="deli">
          <th>배송 구분</th>
          <td>
            {/* <span className="txt">샛별배송지역</span> */}
            <p>
              <span>
                샛별 배송 지역 중 아래 장소는 <b>배송 불가 장소</b>
                입니다.
                <br />
                <b>▶ 배송 불가 장소 :</b> 관공서/ 학교/ 병원/ 시장/ 공단 지역/
                산간 지역/ 백화점 등
              </span>
            </p>
          </td>
        </tr>
        <tr className="receive-name">
          <th>수령인 이름 *</th>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr className="receive-phone">
          <th>휴대폰 *</th>
          <td>
            <input type="number" className="first-number" />
            <span className="bar">
              <span />
            </span>
            <input type="number" className="second-number" />
            <span className="bar">
              <span />
            </span>
            <input type="number" className="second-number" />
          </td>
        </tr>
      </>
    );
  }
}
