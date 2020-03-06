import React, { Component } from "react";
import "./RelatedProductSlide.scss";

export default class RelatedProductSlide extends Component {
  render() {
    const {
      next,
      dataImg,
      handleOnClickBefore,
      handleOnClickNext
    } = this.props;
    return (
      <div className="slide">
        <div className="related-product">
          <div />
          <h3>RELATED PRODUCT</h3>
        </div>

        <div className="slideBtn">
          <button className="left-btn" onClick={handleOnClickBefore} />
          <div className="slideBar">
            <ul style={next}>{dataImg}</ul>
          </div>
          <button className="right-btn" onClick={handleOnClickNext}></button>
        </div>
      </div>
    );
  }
}
