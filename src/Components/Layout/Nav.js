import React, { Component } from "react";
import "../Nav.scss";
import "../../Styles/reset.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideFloat: false,
      headerFixed: false,
      scrollY: 0,
      inputSearchValue: "서울 맛집 로드 week.2",
      data: [],
      dataDepth2: [],
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
      itemCartCount: 0
    };
  }

  _inputChange = e => {
    console.log(e.target.value);
    this.setState({
      inputSearchValue: e.target.value
    });
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

    if (paramArr != true) {
      liCateListdown = paramArr.map((param1, idx) => {
        console.log("map", param1);
        return (
          <li
            key={idx}
            className="cate-list-1"
            onMouseOver={() => this._liCategoryListdown2(this.event, param1[1])}
            onMouseOut={() => this._liCategoryListdown2(this.event, param1[1])}
          >
            <div>
              <img src={this.state.data.categories[idx].pc_icon_url} alt="" />
              <span>{param1[0]}</span>
              <ul className="cate-list-2">
                {idx !== 0 ? this.state.dataDepth2 : null}
              </ul>
            </div>
          </li>
        );
      });
    } else {
      liCateListdown = null;
    }
    return liCateListdown;
  };

  _liCategoryListdown2 = arr => {
    let liCateListdown2 = [];
    liCateListdown2 = arr.map(param2 => (
      <li>
        <span>{param2["name"]}</span>
      </li>
    ));
    console.log("ya", liCateListdown2);
    this.setState({ dataDepth2: liCateListdown2 });
  };

  _onScroll = () => {
    const headScroll = window.scrollY;
    const sideScroll = window.scrollY;

    console.log(headScroll);
    if (headScroll > 116) {
      this.setState({
        headerFixed: true,
        scrollY: headScroll
      });
    } else {
      this.setState({
        headerFixed: false,
        scrollY: headScroll
      });
    }

    if (sideScroll > 470) {
      this.setState({
        sideFixed: true
      });
    } else {
      this.setState({
        sideFixed: false
      });
    }
  };

  componentDidMount() {
    this._getApi("categories");
    window.addEventListener("scroll", this._onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._headerScroll);
  }

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
              <li className="profile-listdown">
                <span id="prof-grade">웰컴</span>
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
              <li className="profile-listdown">
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
        <div
          className={this.state.headerFixed ? "nav-bottom fixed" : "nav-bottom"}
        >
          {/* 카테고리 & 검색 & 장바구니 */}
          <ul className="nav-bottom-bar">
            <li
              className="category-listdown"
              onMouseOver={() => this._visible("category1")}
              onMouseOut={() => this._visible("category1")}
            >
              <img
                alt="카테고리"
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
                        return [param["name"], param["categories"]];
                      })
                    )
                  : null}
              </ul>
            </li>
            <li className="nav-bottom-bar-item">
              <span>신상품</span>
            </li>
            <li className="nav-bottom-bar-item">
              <span>베스트</span>
            </li>
            <li className="nav-bottom-bar-item">
              <span>알뜰쇼핑</span>
            </li>
            <li className="nav-bottom-bar-item">
              <span>이벤트</span>
            </li>
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
