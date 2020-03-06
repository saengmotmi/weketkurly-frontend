import React, { Component } from "react";
import MainItem from "./MainItem";

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
      moveX: 0
    };
  }

  _mdClick = e => {
    const clickParam = e.target.id.split(".");
    this.setState(
      {
        mdButtonSelect: Number(clickParam[1]),
        mdButtonValue: e.target.textContent
      },
      () => {
        this._getMdApi(Number(clickParam[0]));
      }
    );
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

  // _ = () => {

  // }

  _moveLeft = () => {
    if (this.state.moveX === -1068) {
      this.setState({ moveX: 0 });
    } else {
      this.setState({
        moveX: this.state.moveX - 267
      });
    }
  };

  _moveRight = () => {
    if (this.state.moveX === 0) {
      this.setState({ moveX: -1068 });
    } else {
      this.setState(
        {
          moveX: this.state.moveX + 267
        },
        console.log(this.state.moveX)
      );
    }
  };

  componentDidMount() {
    this._getMdApi(907);
  }

  render() {
    const {
      section_id,
      title,
      events,
      products,
      categories,
      recipes,
      reviews,
      background,
      text,
      moveX
    } = this.props;

    const productsArr =
      products &&
      products.map((param, idx) => {
        return (
          <MainItem
            key={"prod" + idx}
            cN="products-item"
            no={param["no"]}
            name={param["name"]}
            price={param["price"]}
            original_price={param["original_price"]}
            thumbnail_image_url={param["thumbnail_image_url"]}
            sticker_image_url={param["sticker_image_url"]}
            style={this.state.moveX}
          />
        );
      });

    const mdProductsArr =
      this.state.data &&
      this.state.data.map((param, idx) => {
        return (
          <MainItem
            key={"md" + idx}
            cN="products-item"
            no={param["no"]}
            name={param["name"]}
            price={param["price"]}
            original_price={param["original_price"]}
            thumbnail_image_url={param["thumbnail_image_url"]}
            sticker_image_url={param["sticker_image_url"]}
            style={this.state.moveX}
          />
        );
      });

    const categoryList =
      categories &&
      categories.map((param, idx) => {
        return (
          <button
            key={"mdcate" + idx}
            style={
              this.state.mdButtonSelect === idx ? this.state.buttonStyle : null
            }
            className="md-cate-button"
            id={param["no"] + "." + idx}
            onClick={this._mdClick}
          >
            {param["name"]}
          </button>
        );
      });

    const recipeList =
      recipes &&
      recipes.map((param, idx) => {
        return (
          <>
            <div key={"rcpe" + idx} className="product-item">
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
      });

    const eventList =
      events &&
      events.map((param, idx) => {
        return (
          <div
            key={"evt" + idx}
            style={{ textAlign: "center" }}
            className="product-item"
          >
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
      });

    const instaReviewList =
      reviews &&
      reviews.map((param, idx) => {
        return (
          <a
            key={"revw" + idx}
            style={{
              transform: `translateX(${this.state.moveX}px)`,
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
      });

    return (
      <>
        <div className={section_id}>
          {title === "이 상품 어때요?" && (
            <>
              <p className="main-font">{title}</p>
              <div
                style={{
                  position: "relative"
                }}
              >
                <button
                  onClick={this._moveLeft}
                  className="btn-scroll btn-scroll-left"
                ></button>
                <button
                  onClick={this._moveRight}
                  className="btn-scroll btn-scroll-right"
                ></button>
              </div>
              <div
                style={{ overflow: "hidden", width: "1050px" }}
                className="goods-item"
              >
                {productsArr}
              </div>
            </>
          )}

          {title === "이벤트 소식" && (
            <div style={{ backgroundColor: "#f7f7f7", width: "100vw" }}>
              <p className="main-font">{title}</p>
              <div
                style={{ justifyContent: "center", overflow: "hidden" }}
                className="goods-item"
              >
                {eventList}
              </div>
            </div>
          )}

          {title === "알뜰 상품" && (
            <>
              <p className="main-font">{title}</p>
              <div
                style={{
                  position: "relative"
                }}
              >
                <button className="btn-scroll btn-scroll-left"></button>
                <button className="btn-scroll btn-scroll-right"></button>
              </div>
              <div
                style={{ overflow: "hidden", width: "1050px" }}
                className="goods-item"
              >
                {productsArr}
              </div>
            </>
          )}

          {title === "MD의 추천" && (
            <div>
              <p className="main-font">{title}</p>
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
                  overflow: "hidden",
                  width: "1050px"
                }}
                className="md-cate-div"
              >
                {categoryList}
              </div>
              <ul
                style={{ overflow: "hidden", width: "1050px" }}
                className="goods-item"
              >
                {mdProductsArr}
              </ul>
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
          )}

          {section_id === "banner_static_7" && (
            <div
              className="banner"
              style={{ backgroundColor: `${background.color}` }}
            >
              <div>
                <p className="banner-title">{text.title}</p>
                <p className="banner-subtitle">{text.subtitle}</p>
              </div>
            </div>
          )}

          {title === "오늘의 신상품" && (
            <>
              <p className="main-font">{title}</p>
              <div
                style={{
                  position: "relative"
                }}
              >
                <button className="btn-scroll btn-scroll-left"></button>
                <button className="btn-scroll btn-scroll-right"></button>
              </div>
              <div
                style={{ overflow: "hidden", width: "1050px" }}
                className="goods-item"
              >
                {productsArr}
              </div>
            </>
          )}

          {title === "간편한 아침식사" && (
            <div style={{ backgroundColor: "#f7f7f7", width: "100vw" }}>
              <p className="main-font">{title}</p>
              <div
                style={{
                  position: "relative",
                  width: "1050px",
                  margin: "0 auto"
                }}
              >
                <button className="btn-scroll btn-scroll-left"></button>
                <button className="btn-scroll btn-scroll-right"></button>
                <div style={{ overflow: "hidden" }} className="goods-item">
                  {productsArr}
                </div>
              </div>
            </div>
          )}

          {title === "컬리의 레시피" && (
            <>
              <p className="main-font">{title}</p>
              <div
                style={{
                  position: "relative"
                }}
              >
                <button
                  style={{ top: "97.5px" }}
                  className="btn-scroll btn-scroll-left"
                ></button>
                <button
                  style={{ top: "97.5px" }}
                  className="btn-scroll btn-scroll-right"
                ></button>
              </div>
              <div
                style={{ overflow: "hidden", width: "1050px" }}
                className="goods-item"
              >
                {recipeList}
              </div>
            </>
          )}

          {title === "인스타그램 고객 후기" && (
            <>
              <p className="main-font">{title}</p>
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
              <ul
                className="goods-item"
                style={{ overflow: "hidden", width: "1050px" }}
              >
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
                  lineHeight: "29px",
                  padding: "39px 100px"
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
          )}

          {/* <div className="goods-item">{productsArr}</div> */}
        </div>
      </>
    );
  }
}

export default MainCategory;
