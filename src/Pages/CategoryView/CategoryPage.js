import React, { Component } from "react";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
    // console.log("얍", this.state.data);

    // if (this.state.data === undefined) return null;

    //맵함수 들어갈 자리
    return (
      <div className="pageDiv">
        <div className="page-move-button">맨앞</div>
        <div className="page-move-button">이전</div>
        <div className="page-move-button">1</div>
        <div className="page-move-button">>다음</div>
        <div className="page-move-button">맨끝</div>
      </div>
    );
  }
}

export default CategoryPage;
