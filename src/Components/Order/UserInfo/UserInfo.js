import React, { Component } from "react";

export default class UserInfo extends Component {
  render() {
    return (
      <div className="user-info">
        <h2>주문자 정보</h2>
        <div>
          <table>
            <tbody>
              <tr>
                <th>보내는 분 *</th>
                <td className="name">
                  <input type="text" readOnly="readOnly" value="이은지" />
                </td>
              </tr>
              <tr>
                <th>휴대폰 *</th>
                <td className="phone">
                  <input
                    type="number"
                    readOnly="readOnly"
                    value="010"
                    style={{ width: "45px" }}
                  />
                  <span className="bar">
                    <span />
                  </span>
                  <input type="number" readOnly="readOnly" value="6203" />
                  <span className="bar">
                    <span />
                  </span>
                  <input type="number" readOnly="readOnly" value="2452" />
                </td>
              </tr>
              <tr>
                <th>이메일 *</th>
                <td className="email">
                  <input
                    type="text"
                    value="leeeeunz@gmail.com"
                    readOnly="readOnly"
                  />
                  <p>
                    이메일을 통해 주문처리과정을 보내드립니다.
                    <br />
                    정보 변경은
                    <span className="color"> 마이컬리 > 개인정보 수정 </span>
                    메뉴에서 가능합니다.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
