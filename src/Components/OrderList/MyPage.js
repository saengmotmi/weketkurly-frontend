import React, { Component } from "react";
import "./MyPage.scss";

export default class MyPage extends Component {
  render() {
    return (
      <div className="my-page-top">
        <ul>
          <li className="user">
            <div className="user-grade">일반</div>
            <div className="user-info">
              <h3>
                이은지<span>님</span>
              </h3>
              <div className="save-point">0.5% 적립</div>
              <div className="btn">
                <button>전체등급 보기</button>
                <button>다음 달 예상등급 보기</button>
              </div>
            </div>
          </li>
          <li className="point">
            <h2>적립금</h2>
            <div className="won">
              456원 <img src="#" alt="" />
            </div>
            <div className="remove">소멸 예정 0원</div>
          </li>
          <li className="cupon">
            <h2>쿠폰</h2>
            <div>
              0개 <img src="#" alt="" />
            </div>
          </li>
          <li className="pass">
            <h2>컬리패스</h2>
            <div>
              알아보기 <img src="#" alt="" />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
