import React, { Component } from "react";
import Nav from "../../Components/Layout/Nav";
import ProductInfo from "../../Components/Detail/ProductInfo/ProductInfo";
import DetailSlide from "../../Components/Detail/Slide/DetailSlide";
import TotalPrice from "../../Components/Detail/ProductInfo/TotalPrice";
import CartBtn from "../../Components/Detail/ProductInfo/CartBtn";
import RelatedProductSlide from "../../Components/Detail/Slide/RelatedProductSlide";
import Tab from "../../Components/Detail/Detail/Tab";
import WhyKurly from "../../Components/Detail/Detail/WhyKurly";
import Customer from "../../Components/Detail/Detail/Customer";
import ProductDetail from "../../Components/Detail/Detail/ProductDetail";
import Review from "../../Components/Detail/ReviewQA/Review";
import Qa from "../../Components/Detail/ReviewQA/Qa";
import PopUp from "../../Components/CartPop/CartPop";
import Bar from "../../Components/Detail/Detail/Bar";
import Footer from "../../Components/Layout/Footer";
import "./Detail.scss";

const PRODUCT_DETAIL_URL = "https://api.kurly.com/v3/home/products";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      price: 1350,
      point: 7,
      save: false,
      popUp: false,
      popUpCart: false,
      scroll: false,
      scrollTop: 0,
      display: false,
      moreBtn: false,
      translate: 0,
      data: [],
      info: [],

      //tab
      tabInfo: false,
      tabImg: false,
      tabDetail: false,
      tabReview: false,
      tabQA: false,

      // 장바구니로 Go!
      thumb: "",
      productName: "",
      popPrice: 0,
    };
  }

  async fetchData(url, key) {
    const res = await fetch("/data/data.json");
    const json = await res.json();

    this.setState({ [key]: json.data });
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll);

    this.fetchData("/data/data.json", "data");
    this.fetchData(PRODUCT_DETAIL_URL + "/49635?&ver=1583460405278", "info");
  };

  onScroll = e => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    const isScrollTop = scrollTop > 1270;

    this.setState({
      scroll: !!isScrollTop,
      scrollTop: isScrollTop ? scrollTop : null,
    });
  };

  handleOnClickPlus = () => {
    const { number, price, point } = this.state;

    this.setState({
      number: number + 1,
      price: price + 1350,
      point: point + 7,
    });
  };

  handleOnClickMinus = () => {
    const { number, price, point } = this.state;

    if (this.state.number <= 1) {
      this.setState({ number, price, point });
    } else {
      this.setState({
        number: number - 1,
        price: price - 1350,
        point: point - 7,
      });
    }
  };

  handleOnClickSave = () => {
    this.setState({
      save: true,
      popUp: !this.state.popUp,
    });
  };

  togglePopUp = () => {
    this.setState({
      popUp: !this.state.popUp,
    });
  };

  togglePopUpCart = () => {
    this.setState({
      popUpCart: !this.state.popUpCart,
    });
  };

  handleOnClickNext = e => {
    this.setState({
      translate:
        this.state.translate === -1920 ? 0 : this.state.translate - 960,
    });
  };

  handleOnClickBefore = e => {
    this.setState({
      translate:
        this.state.translate === 0 ? -1920 : this.state.translate + 960,
    });
  };

  // 탭 클릭 시 해당 영역 이동
  MoveToProduct = () => {
    window.scrollTo(0, 1500, "smooth");
    // this.setState({
    //   tabInfo: true
    // });
  };

  MoveToImg = () => {
    window.scrollTo(0, 4050, "smooth");
    // this.setState({
    //   tabImg: true
    // });
  };

  MoveToInfo = () => {
    window.scrollTo(0, 5100, "smooth");
    // this.setState({
    //   tabDetail: true
    // });
  };

  MoveToReview = () => {
    window.scrollTo(0, 6950, "smooth");
    // this.setState({
    //   tabReview: true
    // });
  };

  MoveToQA = () => {
    window.scrollTo(0, 7600, "smooth");
    // this.setState({
    //   tabQA: true
    // });
  };

  onClickBarOpen = () => {
    this.setState({
      display: true,
    });
  };

  onClickBarClose = () => {
    this.setState({
      display: false,
    });
  };

  onClickMore = () => {
    this.setState({
      moreBtn: !this.state.moreBtn,
    });
  };

  // 장바구니 버튼 클릭 시, 정보 넘겨주기
  onChangeCart = (url, name, price) => {
    this.setState({
      thumb: url,
      productName: name,
      popPrice: price,
    });
  };

  render() {
    const {
      number,
      price,
      point,
      save,
      popUp,
      popUpCart,
      scroll,
      display,
      moreBtn,
      translate,
      info,
      data,
    } = this.state;

    // 상품 이미지
    const mainImg = info.original_image_url;

    // 슬라이드 기능 구현
    const next = {
      transform: `translateX(${translate}px)`,
    };

    return (
      <div className="Detail">
        <Nav
          popPrice={this.state.popPrice}
          url={this.state.thumb}
          productName={this.state.productName}
        />
        <div className="product-top">
          <div
            className="product-img"
            style={{ backgroundImage: `url(${mainImg})` }}
          />

          {/* 상품 구매 정보 */}
          <ProductInfo
            name={info.name}
            short_description={info.short_description}
            origin={info.origin}
            price={price.toLocaleString()}
            point={point}
            unit_text={info.unit_text}
            weight={info.weight}
            delivery_time_type_text={info.delivery_time_type_text}
            number={number}
            expiration_date={info.expiration_date}
            guides={info.guides}
            handleOnClickPlus={this.handleOnClickPlus}
            handleOnClickMinus={this.handleOnClickMinus}
          />
        </div>

        {/* 가격정보 */}
        <div className="total-price-cart">
          <TotalPrice price={price.toLocaleString()} point={point} />
          <CartBtn
            handleOnClickSave={this.handleOnClickSave}
            togglePopUp={this.togglePopUp}
            onChangeCart={() =>
              this.onChangeCart(
                "https://img-cf.kurly.com/shop/data/goods/1583297303173l0.jpg",
                "조각무 2조각",
                1350
              )
            }
            save={save}
          />
          {popUp && (
            <PopUp
              close={popUp ? this.togglePopUp : this.togglePopUpCart}
              txt={
                popUp
                  ? "늘 사는 리스트에 추가했습니다."
                  : "이미 동일한 상품이 장바구니에 존재합니다."
              }
            />
          )}
        </div>

        <RelatedProductSlide
          next={next}
          dataImg={this.state.data.map(({ id, img, name, price }) => (
            <DetailSlide key={id} img={img} name={name} price={price} />
          ))}
          handleOnClickBefore={this.handleOnClickBefore}
          handleOnClickNext={this.handleOnClickNext}
        />
        <div className="tab">
          <ul>
            <li
              className="tabOn"
              onClick={this.MoveToProduct}
              style={{ borderLeft: "1px solid #bfbfbf" }}
            >
              상품설명
            </li>
            <li className="tabOff" onClick={this.MoveToImg}>
              상품이미지
            </li>
            <li className="tabOff" onClick={this.MoveToInfo}>
              상세정보
            </li>
            <li className="tabOff" onClick={this.MoveToReview}>
              고객후기({info.review_count})
            </li>
            <li className="tabOff" onClick={this.MoveToQA}>
              상품문의(3)
            </li>
            <div className="line" />
          </ul>
        </div>
        <ProductDetail />
        <div className="tab">
          <ul>
            <li
              className="tabOff"
              onClick={this.MoveToProduct}
              style={{ borderLeft: "1px solid #bfbfbf" }}
            >
              상품설명
            </li>
            <li className="tabOn" onClick={this.MoveToImg}>
              상품이미지
            </li>
            <li className="tabOff" onClick={this.MoveToInfo}>
              상세정보
            </li>
            <li className="tabOff" onClick={this.MoveToReview}>
              고객후기({info.review_count})
            </li>
            <li className="tabOff" onClick={this.MoveToQA}>
              상품문의(3)
            </li>
            <div className="line" />
          </ul>
        </div>

        <img
          className="detail-info"
          src="//img-cf.kurly.com/shop/data/goodsview/20200304/gv00000083982_1.jpg"
          alt="detail-info"
        />
        <div className="tab">
          <ul>
            <li
              className="tabOff"
              onClick={this.MoveToProduct}
              style={{ borderLeft: "1px solid #bfbfbf" }}
            >
              상품설명
            </li>
            <li className="tabOff" onClick={this.MoveToImg}>
              상품이미지
            </li>
            <li className="tabOn" onClick={this.MoveToInfo}>
              상세정보
            </li>
            <li className="tabOff" onClick={this.MoveToReview}>
              고객후기({info.review_count})
            </li>
            <li className="tabOff" onClick={this.MoveToQA}>
              상품문의(3)
            </li>
            <div className="line" />
          </ul>
        </div>
        <WhyKurly />

        <div className="full-line" />
        <Customer moreBtn={moreBtn} onClickMore={this.onClickMore} />
        <div className="tab">
          <ul>
            <li
              className="tabOff"
              onClick={this.MoveToProduct}
              style={{ borderLeft: "1px solid #bfbfbf" }}
            >
              상품설명
            </li>
            <li className="tabOff" onClick={this.MoveToImg}>
              상품이미지
            </li>
            <li className="tabOff" onClick={this.MoveToInfo}>
              상세정보
            </li>
            <li className="tabOn" onClick={this.MoveToReview}>
              고객후기({info.review_count})
            </li>
            <li className="tabOff" onClick={this.MoveToQA}>
              상품문의(3)
            </li>
            <div className="line" />
          </ul>
        </div>
        <Review />
        <div className="tab">
          <ul>
            <li
              className="tabOff"
              onClick={this.MoveToProduct}
              style={{ borderLeft: "1px solid #bfbfbf" }}
            >
              상품설명
            </li>
            <li className="tabOff" onClick={this.MoveToImg}>
              상품이미지
            </li>
            <li className="tabOff" onClick={this.MoveToInfo}>
              상세정보
            </li>
            <li className="tabOff" onClick={this.MoveToReview}>
              고객후기({info.review_count})
            </li>
            <li className="tabOn" onClick={this.MoveToQA}>
              상품문의(3)
            </li>
            <div className="line" />
          </ul>
        </div>

        <Qa />
        <Bar
          scroll={scroll}
          display={display}
          info={info}
          number={number}
          price={price}
          point={point}
          save={save}
          popUp={popUp}
          popUpCart={popUpCart}
          onClickBarOpen={this.onClickBarOpen}
          onClickBarClose={this.onClickBarClose}
          handleOnClickPlus={this.handleOnClickPlus}
          handleOnClickMinus={this.handleOnClickMinus}
        />
        <Footer />
      </div>
    );
  }
}
