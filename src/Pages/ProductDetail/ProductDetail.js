import React, { Component } from "react";
import DetailSlide from "../../Components/DetailSlide";
import Count from "../../Components/Count";
import TotalPrice from "../../Components/TotalPrice";
import CartBtn from "../../Components/CartBtn";
import WhyKurly from "../../Components/WhyKurly";
import Table from "../../Components/Table";
import PageBtn from "../../Components/PageBtn";
import "./ProductDetail.scss";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      price: 37000,
      point: 185,
      scroll: false,
      scrollTop: 0,
      display: false,
      more: false,
      moreBtn: true,
      closeBtn: false,
      translate: 0,
      button: false,
      data: []
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll);

    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data
        });
      });
  };

  onScroll = e => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
    //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    // const top = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
    if (scrollTop > 1270) {
      this.setState({
        scroll: true,
        scrollTop: scrollTop
      });
    } else {
      this.setState({
        scroll: false
      });
    }
  };

  handleOnClickPlus = () => {
    this.setState({
      number: this.state.number + 1,
      price: this.state.price + this.state.price,
      point: this.state.point + this.state.point
    });
  };

  handleOnClickMinus = () => {
    if (this.state.number <= 1) {
      this.setState({
        number: this.state.number,
        price: this.state.price,
        point: this.state.point
      });
    } else {
      this.setState({
        number: this.state.number - 1
      });
    }
  };

  handleOnClickNext = e => {
    this.setState({
      translate: this.state.translate - 960
    });
  };

  handleOnClickBefore = e => {
    this.setState({
      translate: this.state.translate + 960
    });
  };

  MoveToProduct = () => {
    window.scrollTo(0, 1250, "smooth");
  };

  MoveToImg = () => {
    window.scrollTo(0, 3650, "smooth");
  };

  MoveToInfo = () => {
    window.scrollTo(0, 6300, "smooth");
  };

  MoveToReview = () => {
    window.scrollTo(0, 8050, "smooth");
  };

  MoveToQA = () => {
    window.scrollTo(0, 9100, "smooth");
  };

  onClickBarOpen = () => {
    this.setState({
      display: true
    });
  };

  onClickBarClose = () => {
    this.setState({
      display: false
    });
  };

  onClickMoreOpen = () => {
    this.setState({
      more: true,
      moreBtn: false,
      closeBtn: true
    });
  };

  onClickMoreClose = () => {
    this.setState({
      more: false,
      moreBtn: true,
      closeBtn: false
    });
  };

  handlerOver = e => {
    this.setState({
      button: true
    });
  };

  handlerOut = e => {
    this.setState({
      button: false
    });
  };

  render() {
    const {
      number,
      price,
      point,
      scroll,
      display,
      more,
      moreBtn,
      closeBtn,
      translate,
      button,
      data
    } = this.state;

    const x = translate;
    const next = {
      transform: `translateX(${x}px)`
    };

    const dataImg =
      data.length === 0
        ? null
        : this.state.data.map(el => {
            return <DetailSlide img={el.img} name={el.name} price={el.price} />;
          });

    return (
      <div className="ProductDetail">
        <div className="product-top">
          <div className="product-img">
            <img
              src="https://res.kurly.com/mobile/service/goodsview/1910/bg_375x482.png"
              alt="상품 대표 이미지"
            />
          </div>

          {/* 상품 구매 정보 */}
          <div className="product-info">
            <div className="product-title">
              <div className="title">
                <p>[선물세트] 유기샘 브라질너트 바삭대추 세트</p>
                <div className="share-icon"></div>
              </div>
              <span>달콤한 대추 속에 숨은 고소한 브라질 너트 (1박스/3입)</span>
            </div>

            <div className="priceBar">
              <span className="price">{price}</span>
              <span className="won">원</span>
            </div>

            <div className="accumulate">
              {/* <span className = "befor-login-point">로그인 후, 적립혜택이 제공됩니다.</span> */}
              <div className="after-login-point">
                <span className="save-point">일반 0.5%</span>
                <span className="each">개당</span>
                <span className="won-save">{point}원 적립</span>
              </div>
            </div>

            <div className="goodsInfo">
              <dl>
                <dt>판매단위</dt>
                <dd>1박스</dd>
              </dl>
              <dl className="list">
                <dt>중량/용량</dt>
                <dd>100g*3입</dd>
              </dl>
              <dl className="list">
                <dt>배송구분</dt>
                <dd>샛별배송/택배배송</dd>
              </dl>
              <dl className="list">
                <dt>원산지</dt>
                <dd>브라질너트 : 페루산 / 대추 : 국내산</dd>
              </dl>
              <dl className="list">
                <dt>포장타입</dt>
                <dd>
                  <div>상온/종이포장</div>
                  <div className="delivery">
                    택배배송은 에코포장이 스티로폼으로 대체됩니다.
                  </div>
                </dd>
              </dl>
              <dl className="list">
                <dt>알레르기정보</dt>
                <dd>
                  <div>- 호두, 땅콩, 대두와 같은 시설에서 제조</div>
                </dd>
              </dl>
              <dl className="list">
                <dt>구매수량</dt>
                <Count
                  number={number}
                  handleOnClickPlus={this.handleOnClickPlus}
                  handleOnClickMinus={this.handleOnClickMinus}
                />
              </dl>
            </div>
          </div>
        </div>

        {/* 가격정보 */}
        <div className="total-price-cart">
          <TotalPrice price={price} point={point} />
          <CartBtn />
        </div>

        <div className="slide">
          <div className="related-product">
            <div></div>
            <h3>RELATED PRODUCT</h3>
          </div>

          <div className="slideBtn">
            <button className="left-btn" onClick={this.handleOnClickBefore} />
            <div className="slideBar">
              <ul style={next}>{dataImg}</ul>
            </div>
            <button
              className="right-btn"
              onClick={this.handleOnClickNext}
            ></button>
          </div>
        </div>

        {/* tab */}
        <div className="tab">
          <ul>
            <li className="tabOn" onClick={this.MoveToProduct}>
              상품설명
            </li>
            <li className="tabOff" onClick={this.MoveToImg}>
              상품이미지
            </li>
            <li className="tabOff" onClick={this.MoveToInfo}>
              상세정보
            </li>
            <li className="tabOff" onClick={this.MoveToReview}>
              고객후기(1)
            </li>
            <li className="tabLast" onClick={this.MoveToQA}>
              상품문의(2)
            </li>
            <div className="line" />
          </ul>
        </div>

        {/* detail */}
        <div className="detail">
          <img
            className="detail-main-img"
            alt="메인 이미지"
            src="//img-cf.kurly.com/shop/data/goodsview/20180802/gv10000028525_1.jpg"
          />
          <h3>달콤한 대추 속에 숨은 고소한 브라질너트</h3>
          <h1>
            [선물세트]
            <br />
            유기샘 브라질너트 바삭대추
          </h1>
          <div className="line" />
          <p>
            매일 꼬박꼬박 챙겨먹을 수 있는 견과 제품은 많지만, 소중한 분께
            챙겨드릴 수 있는 제품은 의외로 많지 않아요. 정성들여 만든 모양과
            고급스러운 맛이 돋보이는 선물세트를 컬리가 준비했어요. 커다란
            땅콩처럼 생긴 브라질너트는 약간 무른 듯 부드러운 식감을 가진
            견과류에요. 단 2알 만으로도 풍부한 셀레늄을 섭취할 수 있는
            브라질너트와 비타민 B군, 사포닌, 식이섬유가 풍부한 대추가 만나
            달달고소한 영양간식이 되었답니다. <br />
            <br />
            오랜 기간 친환경 견과류를 고집해온 유기샘은 체계적이면서도 위생적인
            제조 공정을 거치는 것으로 잘 알려져 있어요. 상품의 원재료도 생산자와
            직접 계약하여 꼼꼼히 품질을 확인한 뒤 수급하지요. 어린이부터 할머니,
            할아버지까지 건강하게 먹을 수 있도록 식품첨가물은 단 한 가지도 넣지
            않아 더 믿고 먹을 수 있답니다.
          </p>

          {/* <div className = "kurly-check-point">
                        <div className = "line-left" />
                        <h3>Kurly's Check Point</h3>
                        <div className = "line-right" />
                    </div> */}

          {/* <div className = "check-point-img" >
                        <img src = "https://img-cf.kurly.com/shop/data/goodsview/20190730/gv10000057639_1.jpg" alt = "Kurly's Check Point" />
                    </div> */}

          <div className="kurly-pick">
            <div className="line-left" />
            <h3>Kurly's Pick</h3>
            <div className="line-right" />
          </div>

          {/* <div className = "pick-img">
                        <img src = "https://img-cf.kurly.com/shop/data/goodsview/20190730/gv40000057640_1.jpg" alt = "Kurly's Pick" />
                    </div> */}

          <div className="txt">
            <div className="txtTitle">유기샘 브라질너트 바삭대추</div>
            <div className="txtContents">
              <b>・ 구성</b>
              <span> : 1박스(100g X 3개입)</span>
              <br />
              <b>・ 특징</b>
              <span>
                {" "}
                : 커다란 땅콩처럼 생긴 브라질너트를 PET 용기에 담아 보관이
                편리해요.
              </span>{" "}
              <br />
              <b>・ 테이스팅 노트</b>
              <span>
                {" "}
                : 건대추로 브라질너트를 감싼 뒤 작게 잘라 한 입에 먹기 좋아요.
                바삭하면서도 오독오독한 식감과 함께 달콤하고 고소한 맛이에요.
              </span>
              <br />
            </div>
          </div>

          <div className="kurly-tip">
            <h3>Kurly's Tip</h3>
            <div className="contents">
              <div className="check">구입 전 확인하세요</div>
              <div className="content">
                ・ 선물세트를 넣을 수 있는 전용 쇼핑백을 함께 보내드립니다.
              </div>
            </div>
          </div>
        </div>

        <div className="tab">
          <ul>
            <li className="tabOff" onClick={this.MoveToProduct}>
              상품설명
            </li>
            <li className="tabOn" onClick={this.MoveToImg}>
              상품이미지
            </li>
            <li className="tabOff" onClick={this.MoveToInfo}>
              상세정보
            </li>
            <li className="tabOff" onClick={this.MoveToReview}>
              고객후기(1)
            </li>
            <li className="tabLast" onClick={this.MoveToQA}>
              상품문의(2)
            </li>
            <div className="line" />
          </ul>
        </div>

        <img
          className="detail-info"
          src="https://img-cf.kurly.com/shop/data/goodsview/20190730/gv30000057970_1.jpg"
          alt="detail-info"
        />

        {/* tab */}
        <div className="tab">
          <ul>
            <li className="tabOff" onClick={this.MoveToProduct}>
              상품설명
            </li>
            <li className="tabOff" onClick={this.MoveToImg}>
              상품이미지
            </li>
            <li className="tabOn" onClick={this.MoveToInfo}>
              상세정보
            </li>
            <li className="tabOff" onClick={this.MoveToReview}>
              고객후기(1)
            </li>
            <li className="tabLast" onClick={this.MoveToQA}>
              상품문의(2)
            </li>
            <div className="line" />
          </ul>
        </div>

        <div className="why-kurly">
          <table>
            <tbody>
              <tr>
                <th>포장단위별 용량(중량), 수량, 크기</th>
                <td>상품설명 및 상품이미지 참조</td>
                <th>관련법상 표시사항</th>
                <td>
                  농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적
                  표시 <br />
                  축산물 - 축산법에 따른 등급 표시, 쇠고기의 경우 이력관리에
                  따른 표시 유무 <br />
                  수산물 - 농수산물품질관리법상 유전자변형수산물 표시, 지리적
                  표시 <br />
                  수입식품에 해당하는 경우 “식품위생법에 따른 수입신고를 필함”의
                  문구 <br />
                </td>
              </tr>
              <tr>
                <th>생산자, 수입품의 경우 수입자를 함께 표기</th>
                <td>농업회사법인 유기샘 주식회사</td>
                <th>상품구성</th>
                <td>상품설명 및 상품이미지 참조</td>
              </tr>
              <tr>
                <th>농수산물의 원산지 표시에 관한 법률에 따른 원산지</th>
                <td>브라질 너트 - 페루산 / 대추 - 국내산</td>
                <th>보관방법 또는 취급방법</th>
                <td>상온 보관</td>
              </tr>
              <tr>
                <th>
                  제조연월일(포장일 또는 생산연도), 유통기한 또는 품질유지기한
                </th>
                <td>제품 별도 라벨 표기 참조</td>
                <th>소비자상담 관련 전화번호</th>
                <td>마켓컬리 고객행복센터(1644-1107)</td>
              </tr>
            </tbody>
          </table>
          <h3>WHY KURLY</h3>
          <div className="why-kurly-contents-1">
            <WhyKurly />
            <WhyKurly />
            <WhyKurly />
          </div>
          <div className="why-kurly-contents-2">
            <WhyKurly />
            <WhyKurly />
          </div>
        </div>

        <div className="full-line" />

        <div className="customer-center">
          <div className="customer-center-title">
            <h3>고객행복센터</h3>
            <div className="service">
              궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요?
            </div>
            <div className="help">
              문제가 되는 부분을 사진으로 찍어 아래 중 편하신 방법으로 접수해
              주시면 빠르게 도와드리겠습니다.
            </div>
          </div>
          <div className="contents">
            <div className="call">
              <div className="mark-title">
                <div className="mark" />
                <div className="mark-name">전화 문의 1644-1107</div>
              </div>
              <div className="mark-time">오전 7시~오후 7시 (연중무휴)</div>
            </div>

            <div className="kakao">
              <div className="mark-title">
                <div className="mark" />
                <div className="mark-name"> 카카오톡 문의</div>
              </div>
              <div className="mark-time">오전 7시~오후 7시 (연중무휴)</div>
              <div className="mark-contents">
                카카오톡에서 '마켓컬리'를 검색 후<br />
                대화창에 문의 및 불편사항을
                <br />
                남겨주세요.
              </div>
            </div>

            <div className="homepage">
              <div className="mark-title">
                <div className="mark" />
                <div className="mark-name"> 홈페이지 문의</div>
              </div>
              <div className="mark-time">
                24시간 접수 가능
                <br />
                로그인 > 마이컬리 > 1:1 문의
              </div>
              <div className="mark-contents">
                고객센터 운영 시간에 순차적으로
                <br />
                답변해드리겠습니다.
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="refund">
          <div className="refund-left">
            <div className="refund-notice">교환 및 환불 안내</div>
            <div className="txt">
              고객님의 단순 변심으로 인한 반품은 어려울 수 있으니 양해
              부탁드립니다.
            </div>
          </div>
          <div
            className="more-btn"
            onClick={this.onClickMoreOpen}
            style={{ display: moreBtn ? "block" : "none" }}
          >
            <span>자세히 보기</span>
            <img
              alt="arrow"
              src="https://res.kurly.com/pc/ico/2001/pc_arrow_open@2x.png"
            />
          </div>
          <div
            className="close-btn"
            onClick={this.onClickMoreClose}
            style={{ display: closeBtn ? "block" : "none" }}
          >
            <span>닫기</span>
            <img
              alt="arrow"
              src="https://res.kurly.com/pc/ico/2001/pc_arrow_close@2x.png"
            />
          </div>
        </div>

        <div className="hide" style={{ display: more ? "block" : "none" }}>
          <div className="refund-info">
            <div className="title">01. 받으신 상품에 문제가 있는 경우</div>
            <div className="contents">
              <div className="hide-contents">
                상품이 표시·광고 내용과 다르거나 부패한 경우 등 상품에 문제가
                있는 정도에 따라 <br />
                재배송, 일부 환불, 전액 환불해드립니다.
              </div>
              <div className="hide-title">신선 / 냉장 / 냉동 식품 </div>
              <div className="hide-contents">
                상품을 받은 날부터 2일 이내에 상품 상태를 확인할 수 있는 사진을
                첨부해 1:1 문의 게시판에 남겨주세요. <br />
              </div>
              <div className="hide-title">
                유통기한 30일 이상의 식품 (신선 / 냉장 / 냉동 제외) 및 기타 상품
              </div>
              <div className="hide-contents">
                상품을 받은 날부터 3개월 이내 또는 문제가 있다는 사실을 알았거나
                알 수 있었던 날부터 30일 이내에 <br />
                상품의 상태를 확인할 수 있는 사진을 첨부해 1: 1 문의 게시판에
                남겨주세요.
              </div>
              <div className="hide-extra">
                ※상품에 문제가 있는 것으로 확인되면 배송비는 컬리가 부담합니다.
              </div>
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="tab">
          <ul>
            <li className="tabOff" onClick={this.MoveToProduct}>
              상품설명
            </li>
            <li className="tabOff" onClick={this.MoveToImg}>
              상품이미지
            </li>
            <li className="tabOff" onClick={this.MoveToInfo}>
              상세정보
            </li>
            <li className="tabOn" onClick={this.MoveToReview}>
              고객후기(1)
            </li>
            <li className="tabLast" onClick={this.MoveToQA}>
              상품문의(2)
            </li>
            <div className="line" />
          </ul>
        </div>

        <div className="review">
          <div className="product-review">
            <div className="">
              <h2>PRODUCT REVIEW</h2>
              <ul>
                <li>
                  <div className="ico" />
                  <div>
                    상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과
                    다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
                  </div>
                </li>
                <li>
                  <div className="ico" />
                  <div>
                    배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은
                    마이컬리 내 <strong>1:1 문의</strong>에 남겨주세요.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <select>
                <option value="1">최근등록순</option>
                <option value="2">좋아요많은순</option>
                <option value="3">조회많은순</option>
              </select>
            </div>
          </div>

          {/* review */}
          <Table />
          <div className="write">
            <button
              className={button ? "write-hover" : "write-btn"}
              onMouseOver={this.handlerOver}
              onMouseOut={this.handlerOut}
            >
              후기쓰기
            </button>
          </div>
          <PageBtn />
        </div>

        <div className="tab">
          <ul>
            <li className="tabOff" onClick={this.MoveToProduct}>
              상품설명
            </li>
            <li className="tabOff" onClick={this.MoveToImg}>
              상품이미지
            </li>
            <li className="tabOff" onClick={this.MoveToInfo}>
              상세정보
            </li>
            <li className="tabOff" onClick={this.MoveToReview}>
              고객후기(1)
            </li>
            <li
              className="tabOn"
              onClick={this.MoveToQA}
              style={{ borderRightColor: "#bfbfbf" }}
            >
              상품문의(2)
            </li>
            <div className="line" />
          </ul>
        </div>

        <div className="qa">
          <div className="product-review">
            <div className="">
              <h2>PRODUCT Q&A</h2>
              <ul>
                <li>
                  <div className="ico" />
                  <div>
                    상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과
                    다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
                  </div>
                </li>
                <li>
                  <div className="ico" />
                  <div>
                    배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은
                    마이컬리 내 <strong>1:1 문의</strong>에 남겨주세요.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <select>
                <option value="1">최근등록순</option>
                <option value="2">좋아요많은순</option>
                <option value="3">조회많은순</option>
              </select>
            </div>
          </div>

          {/* review */}
          <Table />
          <div className="qa-btn">
            <div>
              <button
                className={button ? "write-all-view-hover" : "write-all-view"}
                onMouseOver={this.handlerOver}
                onMouseOut={this.handlerOut}
              >
                전체보기
              </button>
            </div>
            <div>
              <button
                className={button ? "write-qa-hover" : "write-qa"}
                onMouseOver={this.handlerOver}
                onMouseOut={this.handlerOut}
              >
                상품문의
              </button>
            </div>
          </div>
          <PageBtn />
        </div>

        <div className="bar" style={{ display: scroll ? "block" : "none" }}>
          <div className="bar-open">
            <div className="btn-open" onClick={this.onClickBarOpen}>
              상품 선택
            </div>
          </div>
          <div
            className="bar-close"
            style={{ display: display ? "block" : "none" }}
          >
            <div className="btn-close" onClick={this.onClickBarClose}>
              상품 선택
            </div>
            <div className="bar-info">
              <ul>
                <li>
                  <span className="title">
                    [선물세트] 유기샘 브라질너트 바삭대추 세트
                  </span>
                  <span className="count">
                    <Count
                      number={number}
                      handleOnClickPlus={this.handleOnClickPlus}
                      handleOnClickMinus={this.handleOnClickMinus}
                    />
                  </span>
                  <span className="price">{price}원</span>
                </li>
              </ul>
              <div className="total-price-point">
                <TotalPrice price={price} point={point} />
              </div>
              <div className="btn">
                <CartBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
