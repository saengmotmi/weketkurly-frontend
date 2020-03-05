import React, { Component } from "react";

export default class CurrentAddress extends Component {
  render() {
    return (
      <>
        <tr className="address">
          <th>주소</th>
          <td>
            <input
              value="서울 강서구 화곡동 504-162 (수정맨션) [157-894]"
              className="address-main"
              readOnly="readOnly"
            />
            <input value="202호" readOnly="readOnly" />
            <span>29자 / 85자</span>
            <div className="road">
              서울 강서구 등촌로13나길 38 (수정맨션) [07733] 202호
            </div>
          </td>
        </tr>
        <tr className="deli">
          <th>배송 구분</th>
          <td>
            <span className="txt">샛별배송지역</span>
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
