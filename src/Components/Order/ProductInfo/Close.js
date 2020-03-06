import React, { Component } from "react";
import "./Close.scss";

export default class Close extends Component {
  render() {
    return (
      <div className="product-info">
        <h2>상품정보</h2>
        <table className="product-info-table">
          <tbody>
            <tr>
              <td>
                <div className="name">
                  [후디스] 그릭 요거트 딸기 & 코코포도 외 1개 상품을 주문합니다.
                </div>
                <div
                  className="detail-btn"
                  onClick={this.props.handleChangeDetail}
                >
                  상세보기
                  <img
                    src="https://res.kurly.com/pc/ico/1803/ico_arrow_open_28x16.png"
                    alt="ico"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
