import React, { Component } from "react";
import "./ Recommend.scss";

export default class Recommend extends Component {
  render() {
    return (
      <>
        <div className="rec">
          <h4>
            컬리가 처음인 당신을 위한
            <span className="bold"> BEST 추천상품</span>
          </h4>
          <div className="best-list">{this.props.bestList}</div>
        </div>
        <div className="last-btn">
          <div className="rec">
            <button>
              추천상품 <span className="bold">더 보러가기</span>
              <span className="arrow" />
            </button>
            <div className="arrow" />
          </div>
          <div className="join">
            <button onClick={this.goToJoin}>
              회원가입 <span className="bold">하러가기</span>
              <span className="arrow" />
            </button>
          </div>
        </div>
      </>
    );
  }
}
