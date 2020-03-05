import React, { Component } from "react";
import CurrentAddress from "./CurrentAddress";
import NewAddress from "./NewAddress";

export default class DeliveryInfo extends Component {
  render() {
    const {
      isChecked,
      addr,
      extraAddr,
      postcode,
      execPostCode,
      onChange,
      onChangeAdr,
      targetValue
    } = this.props;
    return (
      <div className="delivery-info">
        <h2>배송 정보</h2>
        <span className="delivery-notice">
          *정기 배송 휴무일: 샛별배송(<span className="red">휴무없음</span>),
          택배배송(<span className="red">일요일</span>)
        </span>
        <div className="delivery-info-table">
          <table>
            <tbody>
              <tr className="field">
                <th>배송지선택</th>
                <td>
                  <label className="label-radio">
                    <input
                      type="radio"
                      name="selectDelivery"
                      onChange={onChangeAdr}
                      defaultChecked
                    />
                    <span className="current">최근 배송지</span>
                  </label>
                  <label className="lebel-radio">
                    <input
                      type="radio"
                      name="selectDelivery"
                      onChange={onChangeAdr}
                    />
                    새로운 배송지
                  </label>
                </td>
              </tr>

              {isChecked ? (
                <NewAddress
                  execPostCode={execPostCode}
                  addr={addr}
                  extraAddr={extraAddr}
                  postcode={postcode}
                  onChange={onChange}
                  targetValue={targetValue}
                />
              ) : (
                <CurrentAddress />
              )}

              <tr className="memo">
                <th>배송 요청사항</th>
                <td>
                  <textarea maxLength="50" />
                  <div className="string">0자 / 50자</div>
                </td>
              </tr>
              <tr className="gate">
                <th>공동현관 출입 방법 *</th>
                <td>
                  <label className="lebel-radio">
                    <input type="radio" name="gate" />
                    비밀번호
                  </label>
                  <label className="lebel-radio">
                    <input type="radio" name="gate" />
                    경비실 호출
                  </label>
                  <label className="lebel-radio">
                    <input type="radio" name="gate" defaultChecked />
                    자유출입가능
                  </label>
                  <label className="lebel-radio">
                    <input type="radio" name="gate" />
                    기타사항
                  </label>
                </td>
              </tr>
              <tr className="msg">
                <th>배송완료 메세지 전송시점 *</th>
                <td>
                  <label className="lebel-radio">
                    <input type="radio" name="time" defaultChecked />
                    배송직후
                  </label>
                  <label className="lebel-radio">
                    <input type="radio" name="time" />
                    오전 7시
                  </label>
                </td>
              </tr>
              <tr className="save">
                <th checked>출입정보 저장</th>
                <td>
                  <label className="label-checked">
                    <input type="checkbox" />
                    출입정보 저장
                    <div>공동현관 출입방법, 배송완료메세지 전송시점 저장</div>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
