import React, { Component } from "react";

class CategoryViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, price, shortdesc, thumbnail_image_url } = this.props;

    return (
      <div>
        <img src={thumbnail_image_url} alt="" />
        <div>
          <span>{name}</span>
          <span>{price}</span>
          <span>{shortdesc}</span>
        </div>
      </div>
    );
  }
}

// export default CategoryViewItem;

// const cateMapLists = cateMaplist.map((param, idx) => { return
// <CategoryViewItem
//     name={param["name"]}
//     price={param["price"]}
// />
// });

// <ul>
//     {cateMapLists}
// </ul>
