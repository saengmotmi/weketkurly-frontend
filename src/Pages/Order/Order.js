import React, { Component } from "react";
import Nav from "../../Components/Nav";
import CardList from "../../Components/CradList";
import Footer from "../../Components/Footer";
import "./Order.scss";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/list.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          list: res.list
        });
      });
  };
  render() {
    const cardName = this.state.list.map(el => {
      return <div>{el.cardName}</div>;
    });
    // const cardInstallmentMonth = this.state.list.map(el => {
    //   return <div>{el.cardInstallmentMonth}</div>;
    // });
    // const cardPoint = this.state.list.map(el => {
    //   return <div>{el.cardPoint}</div>;
    // });
    // const cardDescription = this.state.list.map(el => {
    //   return <div>{el.cardDescription}</div>;
    // });
    return (
      <div className="Order">
        <Nav />
        <div className="title">
          <h1>주문서</h1>
          <h3>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</h3>
        </div>

        {/* ---------- 상품 정보 ---------- */}
        <div className="product-info">
          <h2>상품정보</h2>
          <table className="product-info-table">
            <tbody>
              <div className="name">
                [후디스] 그릭 요거트 딸기 & 코코포도 외 2개 상품을 주문합니다.
              </div>
              <div>
                상세보기
                <img
                  src="https://res.kurly.com/pc/ico/1803/ico_arrow_open_28x16.png"
                  alt="ico"
                />
              </div>
            </tbody>
          </table>
        </div>

        {/* ---------- 주문자 정보 ---------- */}
        <div className="user-info">
          <h2>주문자 정보</h2>
          <div className="user-info-table">
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
                    <input type="number" readOnly="readOnly" value="010" />
                    <span />
                    <input type="number" readOnly="readOnly" value="6203" />
                    <span />
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

        {/* ---------- 배송 정보 ---------- */}
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
                    <label className="lebel-radio">
                      <input type="radio" />
                      최근 배송지
                      <input type="radio" />
                      새로운 배송지
                    </label>
                  </td>
                </tr>
                <tr className="address">
                  <th>주소</th>
                  <td>
                    <input value="서울 강서구 화곡동 504-162 (수정맨션)" />
                    <input value="202호" />
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
                        샛별 배송 지역 중 아래 장소는 배송 불가 장소입니다.
                        <br />
                      </span>
                      <span>
                        ▶ 배송 불가 장소 : 관공서/ 학교/ 병원/ 시장/ 공단 지역/
                        산간 지역/ 백화점 등
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className="receive-name">
                  <th>수령인 이름 *</th>
                  <td>
                    <input type="text" value="이은지" />
                  </td>
                </tr>
                <tr className="receive-phone">
                  <th>휴대폰 *</th>
                  <td>
                    <input
                      type="number"
                      size="3"
                      value="010"
                      className="first-number"
                    />
                    <span
                      className="hyphen
"
                    />
                    <input
                      type="number"
                      size="4"
                      value="6203"
                      className="second-number"
                    />
                    <span />
                    <input
                      type="number"
                      size="4"
                      value="2452"
                      className="second-number"
                    />
                  </td>
                </tr>
                <tr className="memo">
                  <th>배송 요청사항</th>
                  <td>
                    <textarea maxLength="50" />
                  </td>
                </tr>
                <tr className="gate">
                  <th>공동현관 출입 방법 *</th>
                  <td>
                    <label className="lebel-radio">
                      <input type="radio" />
                      비밀번호
                      <input type="radio" />
                      경비실 호출
                      <input type="radio" />
                      자유출입가능
                      <input type="radio" />
                      기타사항
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>배송완료 메세지 전송시점 *</th>
                  <td>
                    <label className="lebel-radio">
                      <input type="radio" />
                      배송직후
                      <input type="radio" />
                      오전 7시
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>출입정보 저장</th>
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

            <div className="notice">
              <div>
                <div className="notice-ic" />
                <span className="red">확인해주세요!</span>
              </div>
              <div>
                <span className="red">
                  새벽 출입이 어려운 경우, (비밀번호 오류가 있거나, 새벽 경비가
                  부재하는 경우 등) 부득이하게 1층 현관 앞, 경비실 앞에 배송을
                  드릴 수 있는 점 참고 부탁드립니다
                  <br />
                </span>
                <span className="notice-order">
                  - 최대한 출입 방법을 명확하게 기재해주시고, 경비실을 통해
                  출입해야하는 경우, 경비부재시에 대응방법을 배송메모에 기입해
                  주세요.
                  <br />- 고객님 자택 현관 앞까지 안전하게 배송될 수 있도록
                  최선을 다하겠습니다.
                </span>
              </div>
            </div>

            <img
              src="https://res.kurly.com/pc/service/order/1908/bnr_order_allpaper.png"
              alt="지구를 위해 모든 포장지를 종이로!"
              className="bnr-order"
            />

            {/* ---------- 결제 금액 ---------- */}
            <div className="payment-price">
              <h2>결제 금액</h2>
              <table>
                <tbody>
                  <tr>
                    <th>상품금액</th>
                    <td>37,000원</td>
                  </tr>
                  <tr>
                    <th className="line" />
                    <td className="line" />
                  </tr>
                  <tr>
                    <th>상품할인금액</th>
                    <td>0원</td>
                  </tr>
                  <tr>
                    <th>배송비</th>
                    <td>0원</td>
                  </tr>
                  <tr>
                    <th>쿠폰사용</th>
                    <td>0원</td>
                  </tr>
                  <tr>
                    <th>적립금사용</th>
                    <td>0원</td>
                  </tr>
                  <tr className="tr-line">
                    <th className="line" />
                    <td className="line" />
                  </tr>
                  <tr>
                    <th>최종결제금액</th>
                    <td>37,000원</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ---------- 쿠폰 / 적립금 ---------- */}
            <div className="cupon">
              <h2>쿠폰 / 적립금</h2>
              <div className="cupon-table">
                <table>
                  <tbody>
                    <tr>
                      <th>쿠폰 적용</th>
                      <td>
                        사용 가능한 쿠폰이 없습니다.
                        <br />
                        쿠폰사용문의(카카오톡) >
                      </td>
                    </tr>
                    <tr>
                      <th>적립금 적용</th>
                      <td>
                        <input type="text" />원
                        <input type="checkbox" />
                        모두사용
                        <div>보유적립금: 456원</div>
                        <span>*적립금 내역: 마이컬리 > 적립금</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ---------- 결제 수단 ---------- */}
            <div className="product-payment">
              <h2>결제 수단</h2>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th>일반결제</th>
                      <td>
                        <label className="label-radio">
                          <input type="radio" className="card" />
                          신용카드
                        </label>
                        <label className="label-radio">
                          <input type="radio" className="phone" />
                          휴대폰
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th />
                      <td>
                        <CardList cardName={cardName} />
                      </td>
                    </tr>
                    <tr>
                      <th>에스크로결제</th>
                      <td>
                        <label className="label-radio">
                          <input type="radio" className="escro" />
                          계좌이체
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <th>스마일페이 결제</th>
                      <td>
                        <label className="label-radio">
                          <input type="radio" className="escro" />
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
                        <label className="label-radio">
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
                        <label className="label-radio">
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
                        <label className="label-radio">
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
                    수단으로만 환불되는 점 양해부탁드립니다. <br />
                    ※ 고객님은 안전거래를 위해 현금 등으로 결제시 저희
                    쇼핑몰에서 가입한 LG데이콤의 구매안전(에스크로) 서비스를
                    이용하실 수 있습니다. <br />※ 보안강화로 Internet Explorer 8
                    미만 사용 시 결제창이 뜨지 않을 수 있습니다.
                  </span>
                </div>
              </div>
            </div>

            <table className="unissued">
              <tbody>
                <tr>
                  <th>미출고 시 조치방법 *</th>
                  <td>
                    <label className="label-radio">
                      <input type="radio" />
                      결제수단으로 환불
                      <input type="radio" />
                      상품 입고 시 배송
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* ---------- 개인정보 수집 / 제공 ---------- */}
            <div className="user-info-data">
              <h2>개인정보 수집/제공 *</h2>
              <div>
                <table className="user-info-data-table">
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                        결제ㅍ진행 필수 동의
                        <div>개인정보 수집 · 이용 동의 (필수) 약관확인 </div>
                        <div>결제대행 서비스 약관 동의 (필수) 약관확인 </div>
                      </td>
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
        <Footer />
      </div>
    );
  }
}
