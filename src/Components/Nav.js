import React, { Component } from "react";
import "./Nav.scss";
import "../Styles/reset.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleProfile: false,
      visibleCategory: false,
      inputValue: "서울 맛집 로드 week.2"
    };
  }

  _inputChange = e => {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  };

  _visible = name => {
    if (name === "profile-listdown") {
      this.setState({
        visibleProfile: !this.state.visibleProfile
      });
    } else if (name === "category-listdown") {
      this.setState({
        visibleCategory: !this.state.visibleCategory
      });
    }
  };

  render() {
    return (
      <div className="header">
        <div className="nav-top">
          {/* 최상단 */}
          <img
            alt="좌상단 배너"
            src="https://res.kurly.com/pc/service/common/1908/delivery_190819.gif"
          />
          <div>
            <ul>
              <li
                className="profile-listdown"
                onMouseOver={() => this._visible("profile-listdown")}
                onMouseOut={() => this._visible("profile-listdown")}
              >
                <span
                  style={{
                    border: "1px solid #949296",
                    borderRadius: "30px",
                    fontSize: "10px",
                    backgroundColor: "#fff",
                    color: "#949296"
                  }}
                >
                  웰컴
                </span>
                <span>오종택님</span>
                <ul
                  className="nav-prof-list"
                  style={{
                    display: this.state.visibleProfile ? "block" : "none"
                  }}
                >
                  <li>
                    <p>주문 내역</p>
                  </li>
                  <li>
                    <p>늘 사는 것</p>
                  </li>
                  <li>
                    <p>상품후기</p>
                  </li>
                  <li>
                    <p>적립금</p>
                  </li>
                  <li>
                    <p>쿠폰</p>
                  </li>
                  <li>
                    <p>개인 정보 수정</p>
                  </li>
                  <li>
                    <p>로그아웃</p>
                  </li>
                </ul>
              </li>
              <li>
                <span>고객센터</span>
              </li>
              <li>
                <span>배송지역 검색</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-logo">
          {/* 로고 */}
          <img
            alt="로고"
            src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
          />
        </div>
        <div className="nav-bottom">
          {/* 카테고리 & 검색 & 장바구니 */}
          <ul className="nav-bottom-bar">
            <li
              className="category-listdown"
              onMouseOver={() => this._visible("category-listdown")}
              onMouseOut={() => this._visible("category-listdown")}
            >
              <img
                alt="카테고리"
                style={{ display: "inline-block" }}
                src="https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png"
              />
              전체 카테고리
              <ul
                style={{
                  display: this.state.visibleCategory ? "block" : "none"
                }}
              >
                <li>채소</li>
                <li>
                  과일·견과·쌀
                  <ul style={{ padding: "0 0 0 10px" }}>
                    <li>국산과일</li>
                    <li>수입과일</li>
                    <li>냉동·건과일</li>
                    <li>견과류</li>
                    <li>쌀·잡곡</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>신상품</li>
            <li>베스트</li>
            <li>알뜰쇼핑</li>
            <li>이벤트</li>
            <div className="search-wrap">
              <input
                onChange={this._inputChange}
                type="text"
                value={this.state.inputValue}
                required="required"
                className="input-search"
              />
              <img
                alt="검색 돋보기"
                src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png"
              />
            </div>
            <img
              alt="장바구니"
              src="https://res.kurly.com/pc/ico/1908/ico_cart_x2_v2.png"
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
