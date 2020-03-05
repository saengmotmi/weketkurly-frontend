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
import PopUp from "../../Components/PopUp/PopUp";
import Bar from "../../Components/Detail/Detail/Bar";
import Footer from "../../Components/Layout/Footer";
import "./Detail.scss";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      price: 37000,
      point: 185,
      save: false,
      popUp: false,
      popUpCart: false,
      scroll: false,
      scrollTop: 0,
      display: false,
      more: false,
      moreBtn: true,
      closeBtn: false,
      translate: 0,
      data: [],
      info: []
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

    fetch("https://api.kurly.com/v3/home/products/27422?&ver=1582712067853")
      .then(res => res.json())
      .then(res => {
        this.setState({
          info: res.data
        });
      });
  };

  onScroll = e => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
    //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
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
      price: this.state.price + 37000,
      point: this.state.point + 185
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
        number: this.state.number - 1,
        price: this.state.price - 37000,
        point: this.state.point - 185
      });
    }
  };

  handleOnClickSave = () => {
    this.setState({
      save: true,
      popUp: !this.state.popUp
    });
  };

  togglePopUp = () => {
    this.setState({
      popUp: !this.state.popUp
    });
  };

  togglePopUpCart = () => {
    this.setState({
      popUpCart: !this.state.popUpCart
    });
  };

  handleOnClickNext = e => {
    this.setState({
      translate: this.state.translate === -1920 ? 0 : this.state.translate - 960
    });
  };

  handleOnClickBefore = e => {
    this.setState({
      translate: this.state.translate === 0 ? -1920 : this.state.translate + 960
    });
  };

  // 탭 클릭 시 해당 영역 이동
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
      more,
      moreBtn,
      closeBtn,
      translate,
      info,
      data
    } = this.state;

    // 상품 이미지
    const mainImg = info.original_image_url;

    // 슬라이드 기능 구현
    const x = translate;
    const next = {
      transform: `translateX(${x}px)`
    };

    return (
      <div className="Detail">
        <Nav />
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
            contactant={info.contactant}
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
            togglePopUpCart={this.togglePopUpCart}
            save={save}
          />
          {popUp ? (
            <PopUp
              close={this.togglePopUp}
              txt="늘 사는 리스트에 추가했습니다."
            />
          ) : null}
          {popUpCart ? (
            <PopUp
              close={this.togglePopUpCart}
              txt="이미 동일한 상품이 장바구니에 존재합니다."
            />
          ) : null}
        </div>

        <RelatedProductSlide
          next={next}
          dataImg={
            data &&
            this.state.data.map(el => {
              return (
                <DetailSlide
                  key={el.id}
                  img={el.img}
                  name={el.name}
                  price={el.price}
                />
              );
            })
          }
          handleOnClickBefore={this.handleOnClickBefore}
          handleOnClickNext={this.handleOnClickNext}
        />

        <Tab info={info} />
        <ProductDetail />
        <Tab info={info} />

        <img
          className="detail-info"
          src="https://img-cf.kurly.com/shop/data/goodsview/20190730/gv30000057970_1.jpg"
          alt="detail-info"
        />
        <Tab info={info} />
        <WhyKurly />

        <div className="full-line" />
        <Customer closeBtn={closeBtn} moreBtn={moreBtn} more={more} />
        <Tab info={info} />
        <Review />
        <Tab info={info} />

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
        />
        <Footer />
      </div>
    );
  }
}
