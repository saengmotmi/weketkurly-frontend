import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CategoryTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cateNum1: this.props.cateNum1,
      sortOrder: "0"
      //0~14번까지 대카테고리: 카테고리 클릭시 주는 정보를 받아서 번호로 치환
      /* 
      채907~베915: 0~8
      건032: 9
      생918: 10
      주916: 11
      가085: 12
      베919: 13
      반991: 14
      */
    };
  }
  componentDidMount() {
    fetch("https://api.kurly.com/v2/categories")
      .then(res => {
        if (this.state.cateNum1 === "907") {
          this.setState({
            sortOrder: "0"
          });
        } else if (this.state.cateNum1 === "908") {
          this.setState({
            sortOrder: "1"
          });
        } else if (this.state.cateNum1 === "909") {
          this.setState({
            sortOrder: "2"
          });
        } else if (this.state.cateNum1 === "910") {
          this.setState({
            sortOrder: "3"
          });
        } else if (this.state.cateNum1 === "911") {
          this.setState({
            sortOrder: "4"
          });
        } else if (this.state.cateNum1 === "912") {
          this.setState({
            sortOrder: "5"
          });
        } else if (this.state.cateNum1 === "913") {
          this.setState({
            sortOrder: "6"
          });
        } else if (this.state.cateNum1 === "914") {
          this.setState({
            sortOrder: "7"
          });
        } else if (this.state.cateNum1 === "915") {
          this.setState({
            sortOrder: "8"
          });
        } else if (this.state.cateNum1 === "032") {
          this.setState({
            sortOrder: "9"
          });
        } else if (this.state.cateNum1 === "918") {
          this.setState({
            sortOrder: "10"
          });
        } else if (this.state.cateNum1 === "916") {
          this.setState({
            sortOrder: "11"
          });
        } else if (this.state.cateNum1 === "085") {
          this.setState({
            sortOrder: "12"
          });
        } else if (this.state.cateNum1 === "919") {
          this.setState({
            sortOrder: "13"
          });
        } else if (this.state.cateNum1 === "991") {
          this.setState({
            sortOrder: "14"
          });
        }
        return res.json();
      })
      .then(res => {
        this.setState({ data: res.data.categories });
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

export default withRouter(CategoryTitle);
