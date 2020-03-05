import React, { Component } from "react";
import "./PersonalInfo.scss";

export default class PersonalInfo extends Component {
  render() {
    return (
      <>
        <div className="user-info-data">
          <h2>개인정보 수집/제공 *</h2>
          <div>
            <table className="user-info-data-table">
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                    결제 진행 필수 동의
                    <div className="subject">
                      개인정보 수집 · 이용 동의
                      <span className="gray">(필수)</span>
                      <span className="confirm">약관확인</span>
                    </div>
                    <div className="subject">
                      결제대행 서비스 약관 동의
                      <span className="gray">(필수)</span>
                      <span className="confirm">약관확인</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="payment-btn">
          <button>결제하기</button>
          <div className="cancel-notice">
            * 직접 주문취소는 <b>'입금확인'</b> 상태일 경우에만 가능합니다.
          </div>
          <div className="cancel-notice">
            * 미성년자가 결제시 법정대리인이 그 거래를 취소할 수 있습니다.
          </div>
        </div>
      </>
    );
  }
}
