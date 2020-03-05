import React from "react";
import "../CategoryView/CategoryView";
import CategoryViewItem from "./CategoryViewItem";
class categoryView extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: "상품명",
      thumbnail_image_url:
        "https://img-cf.kurly.com/shop/data/goods/1542779969298l0.jpg",
      price: "3000원",
      shortdesc: "숏디스크립션"
      //☞ state값 들어갈 자리
    };
  }
  componentDidMount() {
    fetch("https://api.kurly.com/v2/categories")
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.data.categories });
      });
  }

  //☞ 함수 들어갈 자리
  render() {
    const rendering = this.state.data.map(x => {
      return (
        <div key={x.id}>
          <div>name: {x.name}</div>
          <div>
            <img src={x.icon_url} alt=""></img>
          </div>
        </div>

        //     <div>
        //     <img src={this.thumbnail_image_url} alt="" />
        //     <div>
        //       <div>{this.name}</div>
        //       <div>{this.price}</div>
        //       <div>{this.shortdesc}</div>
        //     </div>
        //   </div>
      );
    });
    //맵함수 들어갈 자리
    return (
      <div>
        <p>categoryView</p>
        {rendering}
        <CategoryViewItem
          thumbnail_image_url={this.state.thumbnail_image_url}
          name={this.state.name}
          price={this.state.price}
          shortdesc={this.state.shortdesc}
        />
      </div>
      //구현할 화면 태그 들어갈 자리
    );
  }
}
export default categoryView;
