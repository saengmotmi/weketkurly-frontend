import React, { Component, Fragment } from "react";

class MainItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const {
      key,
      style,
      no,
      name,
      price,
      original_price,
      thumbnail_image_url,
      sticker_image_url,
      cN
    } = this.props;

    return (
      <>
        <li style={{ transform: "translateX(" + style + ")" }} className={cN}>
          <div
            style={{
              position: "relative",
              width: "249px",
              height: "320px",
              overflow: "hidden"
            }}
          >
            {price !== original_price ? (
              <div className="sale-box">
                <p style={{ fontSize: "13px" }}>SAVE</p>
                <p>
                  <span>
                    {Math.round(100 - (price / original_price) * 100)}
                  </span>
                  %
                </p>
              </div>
            ) : null}
            <img className="zoom-in" src={thumbnail_image_url} alt="goods" />
          </div>
          <div style={{ wordBreak: "break-all" }}>
            <p style={{ marginTop: "12px" }}>{name}</p>
            <p style={{ fontWeight: "700", paddingTop: "6px" }}>
              {this.numberWithCommas(price)}원
            </p>
            {price === original_price ? null : (
              <p
                style={{
                  paddingTop: "4px",
                  textDecoration: "line-through",
                  color: "#ccc",
                  fontSize: "14px"
                }}
              >
                {this.numberWithCommas(original_price)}원
              </p>
            )}
          </div>
        </li>
      </>
    );
  }
}

export default MainItem;
