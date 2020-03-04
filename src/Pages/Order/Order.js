import React, { Component } from "react";
import Nav from "../../Components/Nav";
import CurrentAddress from "../../Components/CurrentAddress";
import NewAddress from "../../Components/NewAddress";
import Footer from "../../Components/Footer";
import "./Order.scss";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
      checked: true,
      top: 0,
      scrollTop: 0,
      value: "",
      key: "",
      list: [],
      addr: "",
      extraAddr: "",
      point: 0,
      name: "",
      monthArrData: [],
      monthValue: ""
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll);

    fetch("http://localhost:3000/data/list.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          list: res.list
        });
      });
  };

  onScroll = e => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    if (scrollTop < 2487) {
      this.setState({
        top: 0
      });
    } else if (scrollTop > 2487 && scrollTop < 3100) {
      this.setState({
        top: scrollTop - 2480,
        scrollTop: scrollTop
      });
    }
  };

  handleChangeDetail = () => {
    this.setState({
      detail: true
    });
  };

  onClickCheked = e => {
    this.setState({ checked: false });
    console.log(this.state.checked);
  };

  handleChange = e => {
    let monthArr = [];
    for (let i in this.state.list) {
      if (this.state.value === this.state.list[i]["cardName"]) {
        monthArr = this.state.list[i]["cardInstallmentMonth"].map(element => {
          return <option>{element}</option>;
        });
      }
    }
    this.setState({
      value: e.target.value,
      monthArrData: monthArr
    });
  };

  _handleChange = e => {
    this.setState({
      monthValue: e.target.value
    });
  };

  execPostCode = () => {
    new window.daum.Postcode({
      oncomplete: data => {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        // const addr = ""; // 주소 변수
        // const extraAddr = ""; // 참고항목 변수

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === "R") {
          // 사용자가 도로명 주소를 선택했을 경우
          this.setState({
            addr: data.roadAddress
          });
        } else {
          // 사용자가 지번 주소를 선택했을 경우(J)
          this.setState({
            extraAddr: data.jibunAddress
          });
        }

        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
        if (data.userSelectedType === "R") {
          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            this.setState({
              extraAddr: (this.state.extraAddr += data.bname)
            });
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.setState({
                extraAddr: (this.state.extraAddr +=
                  this.state.extraAddr !== ""
                    ? ", " + data.buildingName
                    : data.buildingName)
              });
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.state.extraAddr !== "") {
              this.setState({
                setAddr: " (" + this.state.extraAddr + ")"
              });
            }
            // 조합된 참고항목을 해당 필드에 넣는다.
            document.getElementById(
              "extraAddress"
            ).value = this.state.extraAddr;
          } else {
            document.getElementById("extraAddress").value = "";
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById("postcode").value = data.zonecode;
          document.getElementById("address").value = this.state.addr;
          // 커서를 상세주소 필드로 이동한다.
          document.getElementById("detailAddress").focus();
        }
      }
    }).open();
  };

  render() {
    const {
      detail,
      checked,
      addr,
      extraAddr,
      point,
      top,
      value,
      monthArrData,
      monthValue
    } = this.state;

    const options = this.state.list.map(el => {
      return (
        <option key={el.cardName} value={el.cardName}>
          {el.cardName}
        </option>
      );
    });

    return (
      <div className="Order">
        <Nav />
        <div className="title">
          <h1>주문서</h1>
          <h3>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</h3>
        </div>

        {/* ---------- 상품 정보 닫힘 ----------*/}
        <div
          className="product-info"
          style={{ display: detail ? "none" : "block" }}
        >
          <h2>상품정보</h2>
          <table className="product-info-table">
            <tbody>
              <div className="name">
                [후디스] 그릭 요거트 딸기 & 코코포도 외 1개 상품을 주문합니다.
              </div>
              <div className="detail-btn" onClick={this.handleChangeDetail}>
                상세보기
                <img
                  src="https://res.kurly.com/pc/ico/1803/ico_arrow_open_28x16.png"
                  alt="ico"
                />
              </div>
            </tbody>
          </table>
        </div>

        {/* ---------- 상품 정보 열림 ---------- */}
        <div
          className="product-info-open"
          style={{ display: detail ? "block" : "none" }}
        >
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

        {/* ---------- 주문자 정보 ---------- */}
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
                      <input
                        type="radio"
                        name="selectDelivery"
                        onClick={this.onClickCheked}
                      />
                      <span className="current">최근 배송지</span>
                    </label>
                    <label
                      className={
                        checked ? "label-radio-checked" : "lebel-radio"
                      }
                    >
                      <input
                        type="radio"
                        name="selectDelivery"
                        onClick={this.onClickCheked}
                      />
                      새로운 배송지
                    </label>
                  </td>
                </tr>
                <CurrentAddress
                  style={{ display: checked ? "none" : "block" }}
                />
                <NewAddress
                  style={{ display: checked ? "block" : "none" }}
                  execPostCode={this.execPostCode}
                  addr={addr}
                  extraAddr={extraAddr}
                />
              </tbody>
            </table>
          </div>
        </div>

        <div className="notice">
          <div className="notice-title">
            <div className="notice-ic" />
            <span className="red">확인해주세요!</span>
          </div>
          <div className="notice-order">
            <span className="red">
              새벽 출입이 어려운 경우, (비밀번호 오류가 있거나, 새벽 경비가
              부재하는 경우 등) 부득이하게 1층 현관 앞, 경비실 앞에 배송을 드릴
              수 있는 점 참고 부탁드립니다
              <br />
            </span>
            <span>
              - 최대한 출입 방법을 명확하게 기재해주시고, 경비실을 통해
              출입해야하는 경우, 경비부재시에 대응방법을 배송메모에 기입해
              주세요.
              <br />- 고객님 자택 현관 앞까지 안전하게 배송될 수 있도록 최선을
              다하겠습니다.
            </span>
          </div>
        </div>

        <img
          src="https://res.kurly.com/pc/service/order/1908/bnr_order_allpaper.png"
          alt="지구를 위해 모든 포장지를 종이로!"
          className="bnr-order"
        />

        {/* ---------- 결제 금액 ---------- */}
        <div className="payment-price-wrap">
          <div className="payment-price" style={{ top: `${top}px` }}>
            <h2>결제 금액</h2>
            <table>
              <tbody>
                <tr>
                  <th className="top-th">상품금액</th>
                  <td className="top-td">37,000원</td>
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
                  <th className="use">적립금사용</th>
                  <td className="point">0원</td>
                </tr>
                <tr>
                  <th className="total-th">최종결제금액</th>
                  <td className="total-td">37,000원</td>
                </tr>
                <tr>
                  <td className="samll-td" colspan="2">
                    구매 시 <b>100</b>원(0.5%) <b>적립예정</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ---------- 쿠폰 / 적립금 ---------- */}
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
                    <input type="text" className="text-box" value={point} />원
                    <input type="checkbox" className="check-box" />
                    <span>모두사용</span>
                    <div>보유적립금: 456원</div>
                    <div className="emoney">
                      *적립금 내역: 마이컬리 > 적립금
                    </div>
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
                      <input type="radio" className="card" name="payment" />
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
                              value={value}
                              onChange={this.handleChange}
                            >
                              <option disabled>카드를 선택해주세요.</option>
                              {options}
                            </select>
                          </div>
                          <select
                            className="card-install-list"
                            value={monthValue}
                            onChange={this._handleChange}
                          >
                            <option disabled>할부기간을 선택해주세요.</option>
                            {monthArrData}
                          </select>
                        </div>
                      </div>
                      <div>{this.state.cardPoint}</div>
                      <div>{this.state.description}</div>
                    </div>
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
                  <input type="radio" name="refund" />
                  결제수단으로 환불
                </label>
                <label className="label-radio">
                  <input type="radio" name="refund" />
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
                    결제 진행 필수 동의
                    <div className="subject">
                      개인정보 수집 · 이용 동의
                      <span className="gray">(필수)</span>
                      <span className="confirm">약관확인 ></span>
                    </div>
                    <div className="subject">
                      결제대행 서비스 약관 동의
                      <span className="gray">(필수)</span>
                      <span className="confirm">약관확인 ></span>
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
        <Footer />
      </div>
    );
  }
}
