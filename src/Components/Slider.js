import React, { Component } from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ImgSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image_url: "//img-cf.kurly.com/shop/data/main/1/pc_img_1582274479.jpg"
        },
        {
          image_url: "//img-cf.kurly.com/shop/data/main/1/pc_img_1582597555.jpg"
        },
        {
          image_url: "//img-cf.kurly.com/shop/data/main/1/pc_img_1582597701.jpg"
        },
        {
          image_url: "//img-cf.kurly.com/shop/data/main/1/pc_img_1582702545.jpg"
        },
        {
          image_url: "//img-cf.kurly.com/shop/data/main/1/pc_img_1569230790.jpg"
        },
        {
          image_url: "//img-cf.kurly.com/shop/data/main/1/pc_img_1580465698.jpg"
        },
        {
          image_url: "//img-cf.kurly.com/shop/data/main/1/pc_img_1580376394.jpg"
        },
        {
          image_url: "//img-cf.kurly.com/shop/data/main/1/pc_img_1581302984.jpg"
        }
      ]
    };
  }

  componentDidMount() {}

  render() {
    // const { banners } = this.state.data;

    const imgSliderList = this.state.data.map((param, idx) => {
      return <img src={param["image_url"]} alt="" key={idx} />;
    });

    return (
      <div>
        <Slider>{imgSliderList}</Slider>
      </div>
    );
  }
}

export default ImgSlider;
