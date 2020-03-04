import React, { Component } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import MainCategory from "./Main-Category";
import ImgSlider from "../../Components/Slider";
import "./Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      scrollY: 0,
      sideFixed: false
    };
  }

  _getApi = url => {
    fetch(`https://api.kurly.com/v2/home/${url}`) //API 주소
      .then(res => {
        return res.json();
      })
      .then(res =>
        this.setState({
          data: res.data["section_list"].filter(item => item !== undefined)
        })
      );
  };

  _onScroll = () => {
    const sideScroll = window.scrollY;

    if (sideScroll > 470) {
      this.setState({
        sideFixed: true,
        scrollY: sideScroll
      });
    } else {
      this.setState({
        sideFixed: false,
        scrollY: sideScroll
      });
    }
  };

  _mainCateList = () => {
    const mainCateList =
      this.state.data.length === 0
        ? null
        : this.state.data.map((param, idx) => {
            return (
              <MainCategory
                key={idx}
                section_id={param["section_id"]}
                section_type={param["section_type"]}
                title={param["title"]}
                events={param["events"]}
                products={param["products"]}
                categories={param["categories"]}
                recipes={param["recipes"]}
                reviews={param["reviews"]}
              />
            ); // 배열
          });

    return mainCateList;
  };

  componentDidMount = () => {
    this._getApi("recommendation");
    window.addEventListener("scroll", this._onScroll);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this._headerScroll);
  }

  render() {
    return (
      <div>
        <Nav />
        <ImgSlider
          src={this.state.data[0] ? this.state.data[0]["banners"] : null}
        />
        <div className="main">
          <div
            className={this.state.sideFixed ? "quick-menu float" : "quick-menu"}
            style={{ top: `${this.state.scrollY + 600}px` }}
          >
            <img
              width="80"
              height="120"
              src="https://res.kurly.com/pc/service/main/1904/bnr_quick_20190403.png"
              alt=""
            />
            <div className="side-menu">
              <span>등급별 혜택</span>
              <span>레시피</span>
              <span>베스트 후기</span>
            </div>
            <div className="side-recent"></div>
          </div>
          {this._mainCateList()}
          <img
            className="img-bottom"
            src="https://img-cf.kurly.com/shop/data/main/15/pc_img_1568875999.png"
            alt=""
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
