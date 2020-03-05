import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Nav.scss";
import "../../Styles/reset.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleCategory0: false,
      visibleCategory1: false,
      visibleProfile1: false,
      visibleProfile2: false,
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
      itemCartCount: 1
    };
  }

  componentDidMount() {
    this._getApi("categories");
    window.addEventListener("scroll", this._onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._headerScroll);
  }

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

  _inputChange = e => {
    console.log(e.target.value);
    this.setState({
      inputSearchValue: e.target.value
    });
  };

  _visible = (name, idx) => {
    if (name === "prof") {
      switch (idx) {
        case 1:
          this.setState({
            visibleProfile1: !this.state.visibleProfile1
          });
          break;
        case 2:
          this.setState({
            visibleProfile2: !this.state.visibleProfile2
          });
          break;
        default:
          console.log("visible error");
      }
    } else if (name === "cate") {
      switch (idx) {
        case 0:
          this.setState({
            visibleCategory0: !this.state.visibleCategory0
          });
          break;
        case 1:
          this.setState({
            visibleCategory1: !this.state.visibleCategory1
          });
          break;
        default:
          console.log("visible error");
      }
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

    console.log("paramArr", paramArr);

    liCateListdown =
      paramArr &&
      paramArr.map((param1, idx) => {
        return (
          <li
            key={idx}
            onMouseEnter={() => {
              this._visible("cate", 2);
              this._liCategoryListdown2(param1[1]); // param1을 idx 인덱스의 [1]의 ["name"]을 맵 돌려서 보여주세요
            }}
            onMouseLeave={() => {
              this._visible("cate", 2);
              this._liCategoryListdown2(param1[1]);
            }}
          >
            <div>
              <img src={this.state.data.categories[idx].pc_icon_url} alt="" />
              <span>{param1[0]}</span>
            </div>
          </li>
        );
      });
    return liCateListdown;
  };

  _liCategoryListdown2 = arr => {
    this.setState({ dataDepth2: arr });
  };

  _onScroll = () => {
    const headScroll = window.scrollY;
    const sideScroll = window.scrollY;

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

  _goToCart = () => {
    this.props.history.push("/itemcart");
  };

  _goToMain = () => {
    this.props.history.push("/");
  };

  render() {
    const {
      visibleCategory0,
      visibleCategory1,
      visibleProfile1,
      visibleProfile2,
      headerFixed,
      data,
      dataDepth2,
      dataProfileList1,
      dataProfileList2,
      inputSearchValue,
      itemCartCount
    } = this.state;

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
                onMouseEnter={() => this._visible("prof", 1)}
                onMouseLeave={() => this._visible("prof", 1)}
              >
                <span id="prof-grade">웰컴</span>
                <span>오종택님</span>
                <ul
                  className="nav-prof-list"
                  style={{
                    display: visibleProfile1 ? "block" : "none"
                  }}
                >
                  {this._liProfileListdown(dataProfileList1)}
                </ul>
              </li>
              <li
                className="profile-listdown"
                onMouseEnter={() => this._visible("prof", 2)}
                onMouseLeave={() => this._visible("prof", 2)}
              >
                <span>고객센터</span>
                <ul
                  className="nav-prof-list"
                  style={{
                    display: visibleProfile2 ? "block" : "none"
                  }}
                >
                  {this._liProfileListdown(dataProfileList2)}
                </ul>
              </li>
              <li>
                <span>배송지역 검색</span>
              </li>
            </ul>
          </div>
        </div>
        <div onClick={this._goToMain} className="nav-logo">
          {/* 로고 */}
          <img
            alt="로고"
            src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
          />
        </div>
        <div className={headerFixed ? "nav-bottom fixed" : "nav-bottom"}>
          {/* 카테고리 & 검색 & 장바구니 */}
          <ul className="nav-bottom-bar">
            <li
              className="category-listdown"
              onMouseEnter={() => this._visible("cate", 0)}
              onMouseLeave={() => this._visible("cate", 0)}
            >
              <img
                alt="카테고리"
                src="https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png"
              />
              <span>전체 카테고리</span>

              <div
                className="category-listdown-depth0"
                onMouseEnter={() => this._visible("cate", 1)}
                onMouseLeave={() => this._visible("cate", 1)}
                style={{
                  display: visibleCategory0 ? "block" : "none",
                  width: visibleCategory1 ? "438px" : null
                }}
              >
                <div style={{ width: visibleCategory1 ? "438px" : null }}>
                  <ul className="category-listdown-depth1">
                    {data.categories
                      ? this._liCategoryListdown(
                          data.categories.map((param, _) => {
                            return [param["name"], param["categories"]];
                          })
                        )
                      : null}
                  </ul>
                  <ul
                    style={{ display: visibleCategory1 && "flex" }}
                    className="category-listdown-depth2"
                  >
                    {dataDepth2.map((param, idx) => (
                      <li key={idx}>
                        <span>{param.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
                value={inputSearchValue}
                required="required"
                className="input-search"
              />
              <img
                alt="검색 돋보기"
                src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png"
              />
            </div>
            <div onClick={this._goToCart} className="itemcart">
              <img
                alt="장바구니"
                src="https://res.kurly.com/pc/ico/1908/ico_cart_x2_v2.png"
              />
              <span
                className="itemcart-count"
                style={{ display: !itemCartCount && "none" }}
              >
                {itemCartCount}
              </span>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
