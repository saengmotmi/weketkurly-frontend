import React, { Component } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import MainCategory from "./Main-Category";
import "./Main.scss";
import ImgSlider from "../../Components/Slider";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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

  componentDidMount = () => {
    this._getApi("recommendation");
  };

  render() {
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

    return (
      <div>
        {console.log(this.state.data)}
        <Nav />
        <ImgSlider />
        <div className="main">
          <div className="quick-menu">
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
          {mainCateList}
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
