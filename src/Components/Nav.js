import React, { Component } from "react";
import "./Nav.scss";
import "../Styles/reset.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleProfile1: false,
      visibleProfile2: false,
      visibleCategory: false,
      inputSearchValue: "서울 맛집 로드 week.2",
      data: [],
      dataProfileList1: [
        "주문 내역",
        "늘 사는 것",
        "상품 후기",
        "적립금",
        "쿠폰",
        "개인 정보 수정",
        "로그아웃"
      ],
      dataProfileList2: [
        "공지사항",
        "자주하는 질문",
        "1:1 문의",
        "대량주문 문의",
        "상품 제안",
        "에코포장 피드백"
      ],
      // dataCategoryList1: [],
      // dataCategoryList2: [],
      itemCartCount: 0
    };
  }

  _inputChange = e => {
    console.log(e.target.value);
    this.setState({
      inputSearchValue: e.target.value
    });
  };

  _visible = name => {
    if (name === "profile1") {
      this.setState({
        visibleProfile1: !this.state.visibleProfile1,
        dataCategoryList1: this.state.data
      });
    } else if (name === "profile2") {
      this.setState({
        visibleProfile2: !this.state.visibleProfile2,
        dataCategoryList2: this.state.data
      });
    } else if (name === "category1") {
      this.setState({
        visibleCategory: !this.state.visibleCategory,
        liProfileListdown: []
      });
    }
  };

  _getApi = url => {
    fetch(`https://api.kurly.com/v2/${url}`) //API 주소
      .then(res => {
        return res.json();
      })
      .then(
        res =>
          this.setState({
            data: res.data
          }),
        () => {
          console.log("data", this.state.data);
        }
      );
  };

  _liProfileListdown = paramArr => {
    const liProfileListdown = paramArr.map((param, idx) => {
      return (
        <li key={idx}>
          <p>{param}</p>
        </li>
      );
    });
    return liProfileListdown;
  };

  _liCategoryListdown = paramArr => {
    let liCateListdown = [];

    if (paramArr != false) {
      liCateListdown = paramArr.map((param, idx) => {
        return (
          <li key={idx} className="cate-list-0">
            <p>
              <img src={this.state.data.categories[idx].pc_icon_url} alt="" />
              {param}
            </p>
          </li>
        );
      });
    } else {
      liCateListdown = null;
    }
    return liCateListdown;
  };

  onScroll = e => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop });
  };
​

  componentDidMount = () => {
    this._getApi("categories");
    window.addEventListener('scroll', this.onScroll);
  };



  render() {
    const itemCartCount = this.props.itemCartCount;

    

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
                onMouseOver={() => this._visible("profile1")}
                onMouseOut={() => this._visible("profile2")}
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
                    display: this.state.visibleProfile1 ? "block" : "none"
                  }}
                >
                  {this._liProfileListdown(this.state.dataProfileList1)}
                </ul>
              </li>
              <li
                className="profile-listdown"
                onMouseOver={() => this._visible("profile2")}
                onMouseOut={() => this._visible("profile2")}
              >
                <span>고객센터</span>
                <ul
                  className="nav-prof-list"
                  style={{
                    display: this.state.visibleProfile2 ? "block" : "none"
                  }}
                >
                  {this._liProfileListdown(this.state.dataProfileList2)}
                </ul>
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
              onMouseOver={() => this._visible("category1")}
              onMouseOut={() => this._visible("category1")}
            >
              <img
                alt="카테고리"
                style={{ display: "inline-block" }}
                src="https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png"
              />
              <span>전체 카테고리</span>
              <ul
                style={{
                  display: this.state.visibleCategory ? "block" : "none"
                }}
              >
                {this.state.data.categories
                  ? this._liCategoryListdown(
                      this.state.data.categories.map((param, _) => {
                        return param["name"];
                      })
                    )
                  : null}
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
                value={this.state.inputSearchValue}
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
