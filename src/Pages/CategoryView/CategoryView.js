import React from "react";
import "./CategoryView";

class CategoryView extends React.Component {
  constructor() {
    super();
    this.state = {
      cateArr: []
    };
  }
  componentDidMount = () => {
    fetch("https://api.kurly.com/v2/categories")
      .then(res => res.json())
      .then(res => {
        this.setState({
          cateArr: res.data.categories
        });
        console.log("data  is", res.data.categories);
      });
  };
  render() {
    const mapRendering = this.state.cateArr.map(x => {
      return (
        <div className="mapDiv">
          <img src={x.icon_url} alt="" />
          <div>category1: {x.name}</div>
          <div>{x.categories[0].name}</div>
          <div>{x.categories[1].name}</div>
        </div>
      );
    });
    return (
      <div>
        <div>{mapRendering}</div>
      </div>
    );
  }
}

export default CategoryView;

/* 
0. map함수 태그내에 삽입할 함수
{기본채소/쌈/샐러드/간편채소...}
cateArr -> res.data.categories

15개 대카테고리
소카테고리

대카테고리 개수를 세서 arr.length만큼 턴을 진행하는데,
    소카테고리 개수를 arr.length만큼 턴을 돌려 배열을 만들어 객체에 넣는다.
        이렇게 되면 15개의 배열이 객체에 담긴다. 



*/
