import React, { Component, Fragment } from "react";
import MainItem from "./Main-Item";

class MainCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdButtonSelect: 0,
      mdButtonValue: "채소",
      buttonStyle: {
        border: "1px solid #5f0081",
        backgroundColor: "#5f0080",
        color: "#fff"
      },
      data: [],
      moveX: "0px"
    };
  }

  _mdClick = e => {
    this.setState({
      mdButtonSelect: Number(e.target.id.split(".")[1]),
      mdButtonValue: e.target.textContent
    });
    this._getMdApi(Number(e.target.id.split(".")[0]));
  };

  _getMdApi = num => {
    fetch(
      `https://api.kurly.com/v2/home/recommendation/md_choice/categories/${num}`
    ) //API 주소
      .then(res => {
        return res.json();
      })
      .then(res =>
        this.setState({
          data: res.data["products"].filter(item => item !== undefined)
        })
      );
  };

  _moveLeft = () => {
    this.setState(
      {
        moveX: parseInt(this.state.moveX) - 175 + "px"
      },
      () => {
        if (this.state.moveX === "-2625px") {
          this.setState({ moveX: 0 });
        }
      }
    );
  };

  _moveRight = () => {
    this.setState(
      {
        moveX: parseInt(this.state.moveX) + 175 + "px"
      },
      () => {
        if (this.state.moveX === "+2625px") {
          this.setState({ moveX: 0 });
        }
      }
    );
  };

  componentDidMount() {
    this._getMdApi(907);
  }

  render() {
    const {
      key,
      section_id,
      section_type,
      title,
      events,
      products,
      categories,
      recipes,
      reviews
    } = this.props;

    const productsArr = products
      ? products.map((param, idx) => {
          return (
            <MainItem
              key={idx}
              cN="products-item"
              no={param["no"]}
              name={param["name"]}
              price={param["price"]}
              original_price={param["original_price"]}
              thumbnail_image_url={param["thumbnail_image_url"]}
              sticker_image_url={param["sticker_image_url"]}
            />
          );
        })
      : null;

    const mdProductsArr = this.state.data
      ? this.state.data.map((param, idx) => {
          return (
            <MainItem
              key={idx}
              cN="products-item"
              no={param["no"]}
              name={param["name"]}
              price={param["price"]}
              original_price={param["original_price"]}
              thumbnail_image_url={param["thumbnail_image_url"]}
              sticker_image_url={param["sticker_image_url"]}
            />
          );
        })
      : null;

    const categoryList = categories
      ? categories.map((param, idx) => {
          return (
            <button
              key={idx}
              style={
                idx === this.state.mdButtonSelect
                  ? this.state.buttonStyle
                  : null
              }
              className="md-cate-button"
              id={param["no"] + "." + idx}
              onClick={this._mdClick}
            >
              {param["name"]}
            </button>
          );
        })
      : null;

    const recipeList = recipes
      ? recipes.map((param, idx) => {
          return (
            <>
              <div className="product-item">
                <ul>
                  <li>
                    <a
                      href={param["landing_url"]}
                      style={{
                        textDecoration: "none",
                        color: "#333",
                        fontSize: "16px",
                        textAlign: "center",
                        overflow: "hidden",
                        display: "block",
                        width: "249px",
                        height: "320px"
                      }}
                    >
                      <img
                        className="recipe-img zoom-in"
                        key={idx}
                        src={param["image_url"]}
                        alt="review"
                      />
                      <p style={{ marginTop: "12px" }}>{param["title"]}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          );
        })
      : null;

    const eventList = events
      ? events.map((param, idx) => {
          return (
            <div style={{ textAlign: "center" }} className="product-item">
              <ul>
                <li>
                  <a
                    style={{ overflow: "hidden", display: "inline-block" }}
                    href={param["landing_url"]}
                  >
                    <img
                      className="zoom-in"
                      src={param["image_url"]}
                      key={idx}
                      alt=""
                    />
                  </a>
                  <p
                    style={{
                      marginTop: "17px",
                      fontWeight: "700",
                      color: "#333",
                      fontSize: "18px",
                      lineHeight: "28px",
                      letterSpacing: "-0.3px"
                    }}
                  >
                    {param["title"]}
                  </p>
                  <p
                    style={{
                      paddingTop: "8px",
                      color: "#999",
                      fontSize: "16px",
                      lineHeight: "20px"
                    }}
                  >
                    {param["subtitle"]}
                  </p>
                </li>
              </ul>
            </div>
          );
        })
      : null;

    const instaReviewList = reviews
      ? reviews.map((param, idx) => {
          return (
            <a
              style={{
                transform: `translateX(${this.state.moveX})`,
                display: "block",
                width: "249px",
                height: "320px"
              }}
              href={param["landing_url"]}
            >
              <img
                className="insta-img"
                key={idx}
                src={param["thumbnail_image_url"]}
                alt="review"
              />
            </a>
          );
        })
      : null;

    return (
      <>
        <div className={section_id} style={{ width: "1050px" }}>
          <p className="main-font">{title}</p>

          {title === "이 상품 어때요?" ? (
            <>
              <div
                style={{
                  position: "relative"
                }}
              >
                <button className="btn-scroll btn-scroll-left"></button>
                <button className="btn-scroll btn-scroll-right"></button>
              </div>
              <div style={{ overflow: "hidden" }} className="goods-item">
                {productsArr}
              </div>
            </>
          ) : null}

          {title === "이벤트 소식" ? (
            <div
              style={{ justifyContent: "center", overflow: "hidden" }}
              className="goods-item"
            >
              {eventList}
            </div>
          ) : null}
          {title === "알뜰 상품" ? (
            <>
              <div
                style={{
                  position: "relative"
                }}
              >
                <button className="btn-scroll btn-scroll-left"></button>
                <button className="btn-scroll btn-scroll-right"></button>
              </div>
              <div style={{ overflow: "hidden" }} className="goods-item">
                {productsArr}
              </div>
            </>
          ) : null}
          {title === "MD의 추천" ? (
            <div>
              <div
                style={{
                  position: "relative"
                }}
              >
                <button
                  style={{ top: "260px" }}
                  className="btn-scroll btn-scroll-left"
                ></button>
                <button
                  style={{ top: "260px" }}
                  className="btn-scroll btn-scroll-right"
                ></button>
              </div>
              <div
                style={{
                  paddingBottom: "20px",
                  margin: "0 auto",
                  overflow: "hidden"
                }}
                className="md-cate-div"
              >
                {categoryList}
              </div>
              <ul className="goods-item">{mdProductsArr}</ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "514px",
                    height: "54px",
                    borderRadius: "3px",
                    border: "1px solid #e3e3e3",
                    textAlign: "center"
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      verticalAlign: "middle"
                    }}
                  >
                    {this.state.mdButtonValue + " 전체보기"}
                  </span>
                </div>
              </div>
            </div>
          ) : null}

          {title === "오늘의 신상품" ? (
            <>
              <div
                style={{
                  position: "relative"
                }}
              >
                <button className="btn-scroll btn-scroll-left"></button>
                <button className="btn-scroll btn-scroll-right"></button>
              </div>
              <div style={{ overflow: "hidden" }} className="goods-item">
                {productsArr}
              </div>
            </>
          ) : null}

          {title === "간편한 아침식사" ? (
            <>
              <div
                style={{
                  position: "relative"
                }}
              >
                <button className="btn-scroll btn-scroll-left"></button>
                <button className="btn-scroll btn-scroll-right"></button>
              </div>
              <div style={{ overflow: "hidden" }} className="goods-item">
                {productsArr}
              </div>
            </>
          ) : null}

          {title === "컬리의 레시피" ? (
            <>
              <div
                style={{
                  position: "relative"
                }}
              >
                <button className="btn-scroll btn-scroll-left"></button>
                <button className="btn-scroll btn-scroll-right"></button>
              </div>
              <div style={{ overflow: "hidden" }} className="goods-item">
                {recipeList}
              </div>
            </>
          ) : null}

          {title === "인스타그램 고객 후기" ? (
            <>
              <div
                style={{
                  position: "relative"
                }}
              >
                <button
                  style={{ top: "57.5px" }}
                  className="btn-scroll btn-scroll-left"
                ></button>
                <button
                  style={{ top: "57.5px" }}
                  className="btn-scroll btn-scroll-right"
                ></button>
              </div>
              <ul className="goods-item" style={{ overflow: "hidden" }}>
                {instaReviewList}
              </ul>
              {/* <button onClick={this._moveLeft}>-175px</button>
            <button onClick={this._moveRight}>+175px</button> */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "16px",
                  lineHeight: "29px"
                }}
              >
                <p style={{ color: "#999", display: "block" }}>
                  더 많은 고객 후기가 궁금하다면?
                </p>
                <p style={{ fontWeight: "700", display: "block" }}>
                  @marketkuly_regram
                </p>
              </div>
            </>
          ) : null}

          {/* <div className="goods-item">{productsArr}</div> */}
        </div>
      </>
    );
  }
}

export default MainCategory;
