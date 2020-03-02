import React, { Component } from "react";
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
      data: []
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
            <div className="product-item">
              <ul>
                <li>
                  <a
                    href={param["landing_url"]}
                    style={{
                      textDecoration: "none",
                      color: "#333",
                      fontSize: "16px",
                      textAlign: "center"
                    }}
                  >
                    <img
                      className="recipe-img"
                      key={idx}
                      src={param["image_url"]}
                      alt="review"
                    />
                    <p>{param["title"]}</p>
                  </a>
                </li>
              </ul>
            </div>
          );
        })
      : null;

    const eventList = events
      ? events.map((param, idx) => {
          return (
            <div style={{ textAlign: "center" }} className="product-item">
              <ul>
                <li>
                  <a href={param["landing_url"]}>
                    <img src={param["image_url"]} key={idx} alt="" />
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
            <a href={param["landing_url"]}>
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
      <div className={section_id} style={{ width: "1050px" }}>
        <p className="main-font">{title}</p>
        {title === "MD의 추천" ? (
          <div>
            <div
              style={{ paddingBottom: "20px", margin: "0 auto" }}
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

        {title === "이벤트 소식" ? (
          <div style={{ justifyContent: "center" }} className="goods-item">
            {eventList}
          </div>
        ) : null}

        {title === "컬리의 레시피" ? (
          <ul className="goods-item">{recipeList}</ul>
        ) : null}

        {title === "인스타그램 고객 후기" ? (
          <div className="goods-item">{instaReviewList}</div>
        ) : null}

        <div className="goods-item">{productsArr}</div>
      </div>
    );
  }
}

export default MainCategory;
