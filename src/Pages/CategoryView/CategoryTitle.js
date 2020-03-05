import React, { Component } from "react";

class CategoryTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortOrder: "0"
      //0~14번까지 대카테고리: 카테고리 클릭시 주는 정보를 받아서 번호로 치환
    };
  }
  componentDidMount() {
    fetch("https://api.kurly.com/v2/categories")
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.data.categories }, () => {
          // console.log(this.state.data);
        });
        // console.log("얘는", this.state.data[0].name);
      });
  }

  render() {
    //맵함수 들어갈 자리
    return (
      <div className="sort-title-outer">
        <div className="sort-title-box">
          <img
            className="sort-icon"
            src={
              this.state.data[this.state.sortOrder]
                ? this.state.data[this.state.sortOrder].pc_icon_url
                : ""
            }
            alt=""
          ></img>
          <div className="sort-title-image">
            {this.state.data[this.state.sortOrder]
              ? this.state.data[this.state.sortOrder].name
              : ""}
          </div>
        </div>
        {/* 상황조건문 주는 이유 : componentDidMount 다음에 render가 되는데, 
        앞선 부분에서 데이터가 들어오지 않으면 에러가 나기 때문에
        상황연산자를 이용하여 후턴에서 데이터를 불러오도록 길을 터준다*/}
      </div>
    );
  }
}

export default CategoryTitle;
