import React, { Component } from "react";

class CategoryViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("https://api2.branch.io/v1/pageview")
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      });
  }
  //함수들어갈자리
  render() {
    // const { name, price, shortdesc, thumbnail_image_url } = this.props;
    const rendering = this.state.data.map(x => {
      return (
        <div>
          {console.log(this.state.data)}
          <img src={this.props.thumbnail_image_url} alt="" />
          <div>
            <div>{this.props.name}</div>
            <div>{this.props.price}</div>
            <div>{this.props.shortdesc}</div>
          </div>
        </div>
      );
    });
    return <div>{rendering}}</div>;
  }
}

export default CategoryViewItem;

// const cateMapLists = cateMaplist.map((param, idx) => { return
// <CategoryViewItem
//     name={param["name"]}
//     price={param["price"]}
// />
// });

// <ul>
//     {cateMapLists}
// </ul>
