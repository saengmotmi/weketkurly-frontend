import React, {Component} from 'react'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: {
                test2: {
                    testClassName: "a",
                    testClassNameArr: ['a', 'b']
                }
            },
            data: {
                category: [],
                categorySub: []
            },
            // visibleProfile: 'none',
            // visibleCategory: 'none'
            visibleProfile: false,
            visibleCategory: false
        }
    }

    _visible = (name) => {
        if (name === "profile-listdown") {
            this.setState({
                visibleProfile: !this.state.visibleProfile
            });
        } else if (name  === "category-listdown") {
            this.setState({
                visibleCategory: !this.state.visibleCategory
            });
        }
        // this.setState({
        //                 visibleCategory: !this.state.visibleCategory
        //             },()=>console.log(this.state.visibleCategory));
    }

    _test = () => {
        this.setState({
            [this.state.test.test2.testClassName]: "바꿨다" //this.state에 testClassName을 key로 갖는 쌍이 하나 생김 
        });
        this.setState({

        })
        console.log(this.state);
        console.log(this.state.test.test2.testClassName);
    }

    render() {
        return(
            <header>
                <div>
                    <div>
                        <span onClick={this._test} className={this.state.testClassName}>테스트{this.state.test.test2.testClassName}</span>
                    </div>
                    {/* 최상단 */}
                    <img alt="좌상단 배너" src="https://res.kurly.com/pc/service/common/1908/delivery_190819.gif" />
                    <div>
                        <ul>
                            <li onMouseEnter={() => this._visible('profile-listdown')}
                                onMouseOut={() => this._visible('profile-listdown')}>오종택님</li>
                                <ul style={this.state.visibleProfile? {display: "block"}:{display: "none"}}>
                                    <li>주문 내역</li>
                                    <li>늘 사는 것</li>
                                    <li>상품후기</li>
                                    <li>적립금</li>
                                    <li>쿠폰</li>
                                    <li>개인 정보 수정</li>
                                    <li>로그아웃</li>
                                </ul>
                            <li>고객센터</li>
                            <li>배송지역 검색</li>
                        </ul>
                    </div>
                </div>
                <div>
                    {/* 로고 */}
                    <img alt="로고" src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" />
                </div>
                <div>
                    {/* 카테고리 & 검색 & 장바구니 */}
                    <ul>
                        <li>
                            <div style={{border: 'solid'}}
                                onMouseOver={() => this._visible('category-listdown')}
                                onMouseOut={() => this._visible('category-listdown')}>
                                <img alt="카테고리" style={{display:"inline-block"}} src="https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png" />
                                <div style={{padding: '1px'}} /> 
                                <div style={{display: 'block'}}><div>전체 카테고리</div>
                                    <div style={this.state.visibleCategory? {display: "block"}:{display: "none"}}>
                                    {/* <div style={{display: this.state.visibleCategory}}> */}
                                        <ul>
                                            <li>채소</li>
                                            <li>과일·견과·쌀</li>
                                                <li>국산과일</li>
                                                <li>수입과일</li>
                                                <li>냉동·건과일</li>
                                                <li>견과류</li>
                                                <li>쌀·잡곡</li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>신상품</li>
                        <li>베스트</li>
                        <li>알뜰쇼핑</li>
                        <li>이벤트</li>
                        <div>
                            <input type="text" />
                            <img alt="검색 돋보기" src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png" />
                        </div>
                        <img alt="장바구니" src="https://res.kurly.com/pc/ico/1908/ico_cart_x2_v2.png" />
                    </ul>
                </div>
            </header>
        );
    }
}

export default Nav;