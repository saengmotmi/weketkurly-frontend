import React, { Component } from "react";
import "./Order.scss";

export default class Order extends Component {
  render() {
    return (
      <div className="Order">
        <div>
          <div>주문서</div>
          <div>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</div>
        </div>

        {/* -----------------
                상품 정보 
        -------------------*/}
        <div className="product-info">
          <div>상품정보</div>
          <table className="product-info-table">
            <div className="name">
              <span>[후디스] 그릭 요거트 딸기 & 코코포도</span>
              <span>
                외 <span>2</span>개 상품을 주문합니다.
              </span>
            </div>
            <div className="more">상세보기</div>
          </table>
        </div>

        {/* -----------------
                주문자 정보 
        -------------------*/}
        <div className="product-info">
          <div>주문자 정보</div>
          <div className="user-info-table">
            <table>
              <tbody>
                <tr>
                  <th>보내는 분 *</th>
                  <td></td>
                </tr>
                <tr>
                  <th>휴대폰 *</th>
                  <td></td>
                </tr>
                <tr>
                  <th>이메일 *</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* -----------------
                배송 정보 
        -------------------*/}
        <div className="product-info">
          <div>배송 정보</div>
          <span>*정기 배송 휴무일: 샛별배송(휴무없음), 택배배송(일요일)</span>
          <div className="user-info-table">
            <table>
              <tbody>
                <tr>
                  <th>배송지선택</th>
                  <td></td>
                </tr>
                <tr>
                  <th>주소</th>
                  <td></td>
                </tr>
                <tr>
                  <th>배송 구분</th>
                  <td></td>
                </tr>
                <tr>
                  <th>수령인 이름 *</th>
                  <td></td>
                </tr>
                <tr>
                  <th>휴대폰 *</th>
                  <td></td>
                </tr>
                <tr>
                  <th>배송 요청사항</th>
                  <td></td>
                </tr>
                <tr>
                  <th>공동현관 출입 방법 *</th>
                  <td></td>
                </tr>
                <tr>
                  <th>배송완료 메세지 전송시점 *</th>
                  <td></td>
                </tr>
                <tr>
                  <th>출입정보 저장</th>
                  <td></td>
                </tr>
              </tbody>
            </table>

            {/* notice */}
            <div className="notice">
              <div>
                <div className="notice-ic" />
                <div>확인해주세요!</div>
              </div>
              <div>
                <span>
                  새벽 출입이 어려운 경우, (비밀번호 오류가 있거나, 새벽 경비가
                  부재하는 경우 등) 부득이하게 1층 현관 앞, 경비실 앞에 배송을
                  드릴 수 있는 점 참고 부탁드립니다
                </span>
                <span>
                  - 최대한 출입 방법을 명확하게 기재해주시고, 경비실을 통해
                  출입해야하는 경우, 경비부재시에 대응방법을 배송메모에 기입해
                  주세요.
                </span>
                <span>
                  - 고객님 자택 현관 앞까지 안전하게 배송될 수 있도록 최선을
                  다하겠습니다.
                </span>
              </div>
            </div>

            {/* 포장재 이미지 */}
            <div className="bnr-order" />

            {/* -----------------
                쿠폰 / 적립금 
        -------------------*/}
            <div className="product-info">
              <div>쿠폰 / 적립금</div>
              <div className="user-info-table">
                <table>
                  <tbody>
                    <tr>
                      <th>쿠폰 적용</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>적립금 적용</th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* -----------------
                결제수단 
        -------------------*/}
            <div className="product-payment">
              <div>결제 수단</div>
              <div className="payment-table">
                <table>
                  <tbody>
                    <tr>
                      <th>일반결제</th>
                      <td>
                        <label>
                          <input type="radio">신용카드</input>
                        </label>
                        <label>
                          <input type="radio">휴대폰</input>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="card-select">
                          <div className="card">
                            <div>
                              <select className="card-list">
                                <option value="1">카드를 선택해주세요</option>
                                <option value="2">현대 (무이자)</option>
                                <option value="3">신한 (무이자)</option>
                                <option value="4">비씨 (무이자)</option>
                                <option value="5">KB국민 (무이자)</option>
                                <option value="6">삼성 (무이자)</option>
                                <option value="7">롯데 (무이자)</option>
                                <option value="8">하나(외한) (무이자)</option>
                                <option value="9">NH채움 (무이자)</option>
                                <option value="10">우리 (무이자)</option>
                                <option value="11">수협 (무이자)</option>
                                <option value="12">씨티 (무이자)</option>
                                <option value="13">광주 (무이자)</option>
                                <option value="14">전북 (무이자)</option>
                                <option value="15">제주</option>
                                <option value="16">신협체크</option>
                                <option value="17">MG새마을체크</option>
                                <option value="18">저축은행체크</option>
                                <option value="19">우체국카드</option>
                                <option value="20">KDB산업은행</option>
                                <option value="21">카카오뱅크</option>
                              </select>
                              <select className="card-install-list">
                                <option value="1">
                                  할부기간을 선택해주세요
                                </option>
                                <option value="2">일시불</option>
                                <option value="3">2개월 (무이자)</option>
                                <option value="4">3개월 (무이자)</option>
                                <option value="5">4개월 (무이자)</option>
                                <option value="6">5개월 (무이자)</option>
                                <option value="7">6개월 (무이자)</option>
                                <option value="8">7개월</option>
                                <option value="9">8개월</option>
                                <option value="10">9개월</option>
                                <option value="11">10개월</option>
                                <option value="12">11개월</option>
                                <option value="13">12개월</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            *무이자할부 유의사항
                            <span>
                              은행계열/체크/기프트/선불/법인/개인사업자
                              기업카드는 제외
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>에스크로결제</th>
                      <td>
                        <label>
                          <input type="radio">계좌이체</input>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th>스마일페이 결제</th>
                      <td>
                        <label>
                          <input type="radio" />
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
                        <label>
                          <input type="radio" />
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
                        <label>
                          <input type="radio" />
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
                        <label>
                          <input type="radio" />
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
                        <label>
                          <input type="radio" />
                          <img
                            src="http://res.kurly.com/pc/service/order/1912/toss-logo-signature.svg"
                            alt="토스"
                          />
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <span>
                    ※ 페이코, 네이버페이, 토스 결제는 결제 시 결제하신
                    수단으로만 환불되는 점 양해부탁드립니다.
                  </span>
                  <span>
                    ※ 고객님은 안전거래를 위해 현금 등으로 결제시 저희
                    쇼핑몰에서 가입한 LG데이콤의 구매안전(에스크로) 서비스를
                    이용하실 수 있습니다.
                  </span>
                  <span>
                    ※ 보안강화로 Internet Explorer 8 미만 사용 시 결제창이 뜨지
                    않을 수 있습니다.{" "}
                  </span>
                </div>
              </div>
            </div>

            <table>
              <tbody>
                <tr>
                  <th>미출고 시 조치방법 *</th>
                  <td></td>
                </tr>
              </tbody>
            </table>

            {/* -----------------
                개인정보 수집/제공 
        -------------------*/}
            <div className="product-info">
              <div>개인정보 수집/제공 *</div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="payment">
              <button>결제하기</button>
              <div>
                * 직접 주문취소는 '입금확인' 상태일 경우에만 가능합니다.
              </div>
              <div>
                * 미성년자가 결제시 법정대리인이 그 거래를 취소할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
