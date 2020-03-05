import React, { Component } from "react";

export default class PaymentMethod extends Component {
  render() {
    const {
      options,
      monthArrData,
      pointValue,
      discount,
      description,
      handleChange,
      onChangeValue
    } = this.props;
    return (
      <>
        <div className="product-payment">
          <h2>결제 수단</h2>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>일반결제</th>
                  <td>
                    <label className="lebel-radio">
                      <input
                        type="radio"
                        className="card"
                        name="payment"
                        defaultChecked
                      />
                      신용카드
                    </label>
                    <label className="label-radio">
                      <input type="radio" className="phone" name="payment" />
                      휴대폰
                    </label>
                  </td>
                </tr>
                <tr>
                  <th />
                  <td>
                    <div className="card-select">
                      <div className="card">
                        <div className="list">
                          <div className="card-select">
                            <select
                              className="card-list"
                              name="value"
                              onChange={handleChange}
                            >
                              <option disabled>카드를 선택해주세요.</option>
                              {options}
                            </select>
                          </div>
                          <select
                            className="card-install-list"
                            name="monthValue"
                            onChange={onChangeValue}
                          >
                            <option disabled>할부기간을 선택해주세요.</option>
                            {monthArrData}
                          </select>
                        </div>
                      </div>
                      <div className="point">
                        <input type="checkbox" />
                        {pointValue}
                      </div>
                      {discount}
                      <div className="description">{description}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>에스크로결제</th>
                  <td>
                    <label className="label-radio">
                      <input type="radio" className="escro" name="payment" />
                      계좌이체
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>스마일페이 결제</th>
                  <td>
                    <label className="label-radio">
                      <input type="radio" name="payment" />
                      <img
                        src="//res.kurly.com/pc/service/order/1712/ico_smilepay_v2.png"
                        alt="스마일페이"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>Paynow 결제</th>
                  <td>
                    <label className="label-radio">
                      <input type="radio" name="payment" />
                      <img
                        src="https://res.kurly.com/pc/service/order/1801/logo_paynow.png"
                        alt="페이나우"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>PAYCO 결제</th>
                  <td>
                    <label className="label-radio">
                      <input type="radio" name="payment" />
                      <img
                        src="https://static-bill.nhnent.com/payco/checkout/img/v2/btn_checkout2.png"
                        alt="페이코"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>네이버페이 결제</th>
                  <td>
                    <label className="label-radio">
                      <input type="radio" name="payment" />
                      <img
                        src="//res.kurly.com/pc/service/order/1710/ico_naverpay_v3.png"
                        alt="네이버 페이"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>토스 결제</th>
                  <td>
                    <label className="label-radio">
                      <input type="radio" name="payment" />
                      <img
                        src="http://res.kurly.com/pc/service/order/1912/toss-logo-signature.svg"
                        alt="토스"
                      />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="caution">
              ※ 페이코, 네이버페이, 토스 결제는 결제 시 결제하신 수단으로만
              환불되는 점 양해부탁드립니다. <br />
              ※ 고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서
              가입한 LG데이콤의 구매안전(에스크로) 서비스를 이용하실 수
              있습니다. <br />※ 보안강화로 Internet Explorer 8 미만 사용 시
              결제창이 뜨지 않을 수 있습니다.
            </div>
          </div>
        </div>
        <table className="unissued">
          <tbody>
            <tr>
              <th>미출고 시 조치방법 *</th>
              <td>
                <label className="label-radio">
                  <input type="radio" name="refund" defaultChecked />
                  결제수단으로 환불
                </label>
                <label className="lebel-radio">
                  <input type="radio" name="refund" />
                  상품 입고 시 배송
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
