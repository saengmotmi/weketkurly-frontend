import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CategoryViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state값 넣는곳
    };
  }

  numberWithCommas = x => {
    let comma = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // console.log(comma);
    return comma;
  };
  //가격에 3자리수 콤마 넣는 함수
  //함수들어갈자리
  goDetail = () => {
    this.props.history.push("/detail");
  };
  render() {
    // console.log("자식으로 넘어감", this.props.bridge2, this.props.bridge3);
    const listRendering =
      this.props.bridge3 !== undefined &&
      this.props.bridge3.map(x => {
        return (
          <div className="product-box" onClick={this.goDetail}>
            <div className="img-box">
              <img
                className="cate-image"
                src={x.thumbnail_image_url}
                alt=""
              ></img>
            </div>
            <div className="pr-name">{x.name}</div>
            <div className="pr-price">{this.numberWithCommas(x.price)}원</div>
            <div className="pr-desc">{x.shortdesc}</div>
          </div>
          /* 함수에서 리턴해주고, 인라인에서는 this를 주어야 한다 */
          /* Nav-본문6. map을 뿌려주는 부분에 props를 통해 바뀐 데이터를 적용 */
        );
      });
    return <div className="compo-outer">{listRendering}</div>;
  }
}

export default withRouter(CategoryViewItem);
