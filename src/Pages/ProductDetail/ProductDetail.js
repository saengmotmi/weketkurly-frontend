import React, { Component } from 'react';
import DetailSlide from '../../Components/DetailSlide'
import WhyKurly from '../../Components/WhyKurly'

import './ProductDetail.scss';


export default class ProductDetail extends Component {
    render() {
        return (
            <div className = "ProductDetail">
                <div className = "product-top">
                    <div className = "product-img">
                        <img src = "https://res.kurly.com/mobile/service/goodsview/1910/bg_375x482.png" alt = "상품 대표 이미지" />
                    </div>
                
                    {/* 상품 구매 정보 */}
                    <div className = "product-info">
                        <div className = "product-title">
                            <div className = "title">
                                <p>[선물세트] 유기샘 브라질너트 바삭대추 세트</p>
                                <div className = "share-icon"></div>
                            </div>
                            <span>달콤한 대추 속에 숨은 고소한 브라질 너트 (1박스/3입)</span>
                        </div>

                        <div className = "priceBar">
                            <span className = "price">37,000</span>
                            <span className = "won">원</span>
                        </div>
                        
                        <div className = "accumulate">
                            <span className = "befor-login-point">로그인 후, 적립혜택이 제공됩니다.</span>
                            {/* <div className = "after-login-point">
                                <span className = "save-point">일반 0.5%</span>
                                <span className = "each">개당</span>
                                <span className = "won-save">68원 적립</span>
                            </div> */}
                        </div>

                        <div className = "goodsInfo">
                            <dl>
                                <dt>판매단위</dt>
                                <dd>1박스</dd>
                            </dl>
                            <dl className = "list">
                                <dt>중량/용량</dt>
                                <dd>75g</dd>
                            </dl>
                            <dl className = "list">
                                <dt>배송구분</dt>
                                <dd>샛별배송/택배배송</dd>
                            </dl>
                            <dl className = "list">
                                <dt>원산지</dt>
                                <dd>브라질너트 : 페루산 / 대추 : 국내산</dd>
                            </dl>
                            <dl className = "list">
                                <dt>포장타입</dt>
                                <dd>
                                    <div>상온/종이포장</div>
                                    <div className = "delivery">택배배송은 에코포장이 스티로폼으로 대체됩니다.</div>
                                </dd>
                            </dl>
                            <dl className = "list">
                                <dt>알레르기정보</dt>
                                <dd>
                                    <div>- 호두, 땅콩, 대두와 같은 시설에서 제조</div>
                                </dd>
                            </dl>
                            <dl className = "list">
                                <dt>구매수량</dt>
                                <div className = "option">
                                    <button className = "leftBtn">-</button>
                                    <input type = "number"></input>
                                    <button className = "rightBtn">+</button>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>


                {/* 가격정보 */}
                <div className = "total-price-cart">
                    <div className = "total-price-point">
                        <div className = "total-price">
                            <span className = "total">총 상품금액: </span>
                            <span className = "price">37,000</span>
                            <span className = "won">원</span>
                        </div>
                        <div className = "point">
                            {/* <div className = "point-before-login">
                                <div className = "save-icon">적립</div>
                                <div>로그인 후, 적립혜택 제공</div>
                            </div> */}
                            <div className = "point-after-login">
                                <div className = "save-icon">적립</div>
                                <span className = "each">구매 시</span>
                                <span className = "won-save">68원 적립</span>
                            </div>
                        </div>
                    </div>
                    

                    {/* 상품 담기 버튼 */}
                    <div className = "btn">
                        <div className = "cartBtn">
                            <button className = "alarmOff">재입고 알림</button>
                            <button className = "saveItem">늘 사는것</button>
                            <button className = "goToCart">장바구니 담기</button>
                        </div>
                    </div>
                </div>
                
                

                <div className = "slide">
                    <div className = "related-product">
                        <div></div>
                        <h3>RELATED PRODUCT</h3>
                    </div>

                    <div className = "slideBtn">
                        <button className = "left-btn" />
                        <div>
                            <ul>
                                <DetailSlide />
                                <DetailSlide />
                                <DetailSlide />
                                <DetailSlide />
                                <DetailSlide />
                            </ul>
                        </div>
                        <button className = "right-btn"></button>
                    </div>
                </div>


                {/* tab */}
                <div className = "tab">
                    <ul>
                        <li className = "tabOn">상품설명</li>
                        <li className = "tabOff">상품이미지</li>
                        <li className = "tabOff">상세정보</li>
                        <li className = "tabOff">고객후기(1)</li>
                        <li className = "tabOff">상품문의(2)</li>
                        <div className = "line" />
                    </ul>
                </div>


                {/* detail */}
                <div className = "detail">
                    <img className = "detail-main-img" alt = "메인 이미지" src = "//img-cf.kurly.com/shop/data/goodsview/20180802/gv10000028525_1.jpg" />
                    <h3>달콤한 대추 속에 숨은 고소한 브라질너트</h3>
                    <h1>
                        [선물세트]<br />
                        유기샘 브라질너트 바삭대추
                    </h1>
                    <div className = "line" />
                    <p>
                        바삭하고 달콤한 쿠키 한 입이면, 나른한 시간을 채우기에 충분하죠. 
                        컬리가 준비한 댄케이크의 싱글서브 버터쿠키는 조금씩 꺼내어 즐길 수 있는 편리한 쿠키예요. 
                        바깥의 종이 박스를 열면, 캡슐 커피를 닮은 자그마한 패키지가 나타나는데요. 
                        바로 이 패키지 안에 고소한 버터쿠키가 들어 있답니다. 
                        한 번에 즐기기 꼭 알맞은 양 만큼씩 포장했기에, 하나씩 뜯어 깔끔하게 즐길 수 있지요. 
                        손잡이가 달린 종이 박스에 포장해 보내드리니, 주변에 선물하는 용도로 활용해도 좋아요. 
                    </p>
                    
                    <div className = "kurly-check-point">
                        <div className = "line-left" />
                        <h3>Kurly's Check Point</h3>
                        <div className = "line-right" />
                    </div>


                    <div className = "check-point-img" >
                        <img src = "https://img-cf.kurly.com/shop/data/goodsview/20190730/gv10000057639_1.jpg" alt = "Kurly's Check Point" />
                    </div>

                    <div className = "kurly-pick">
                        <div className = "line-left" />
                        <h3>Kurly's Pick</h3>
                        <div className = "line-right" />
                    </div>

                    <div className = "pick-img">
                        <img src = "https://img-cf.kurly.com/shop/data/goodsview/20190730/gv40000057640_1.jpg" alt = "Kurly's Pick" />
                    </div>

                    <p className = "txt">
                        <div className = "txtTitle">
                            싱글서브 버터쿠키 18입
                        </div>
                        <div className = "txtContents">
                            <b>・중량</b>
                            <span> : 1박스(18g X 18개입/ 쿠키 개수 총 54개)</span><br />
                            <b>・특징</b>
                            <span> : 자그마한 패키지에 버터쿠키가 3개씩 들어 있어 하나씩 뜯어먹기 편리해요. 18개로 소분된 패키지를 한 박스에 담아 보내드려요.</span> <br />
                            <b>・테이스팅 노트</b>
                            <span> : 지나치게 달지 않고, 고소한 버터의 풍미가 은은하게 퍼지는 쿠키예요. 묵직하기 보다는 입 안에서 파사삭 부서지는 식감입니다. </span><br />
                        </div>
                    </p>
                </div>

                {/* tab */}
                <div className = "tab">
                    <ul>
                        <li className = "tabOff">상품설명</li>
                        <li className = "tabOn">상품이미지</li>
                        <li className = "tabOff">상세정보</li>
                        <li className = "tabOff">고객후기(1)</li>
                        <li className = "tabOff">상품문의(2)</li>
                        <div className = "line" />
                    </ul>
                </div>

                <img className = "detail-info" src = "https://img-cf.kurly.com/shop/data/goodsview/20190730/gv40000057642_1.jpg" alt = "detail-info" />


                {/* tab */}
                <div className = "tab">
                    <ul>
                        <li className = "tabOff">상품설명</li>
                        <li className = "tabOff">상품이미지</li>
                        <li className = "tabOn">상세정보</li>
                        <li className = "tabOff">고객후기(1)</li>
                        <li className = "tabOff">상품문의(2)</li>
                        <div className = "line" />
                    </ul>
                </div>

                <div className = "why-kurly">
                    <h3>
                        WHY KURLY
                    </h3>
                    <div className = "why-kurly-contents-1">
                        <WhyKurly />
                        <WhyKurly />
                        <WhyKurly />
                    </div>
                    <div className = "why-kurly-contents-2">
                        <WhyKurly />
                        <WhyKurly />
                    </div>
                </div>
            
                <div className = "full-line" />

                <div className = "customer-center">
                    <div className = "customer-center-title">
                        <h3>고객행복센터</h3>
                        <div className = "service">궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요?</div>
                        <div className = "help">문제가 되는 부분을 사진으로 찍어 아래 중 편하신 방법으로 접수해 주시면 빠르게 도와드리겠습니다.</div>
                    </div>
                    <div className = "contents">
                        <div className = "call">
                            <div className = "mark-title">
                                <div className = "mark" />
                                <div className = "mark-name">전화 문의 1644-1107</div>
                            </div>
                            <div className = "mark-time">오전 7시~오후 7시 (연중무휴)</div>
                        </div>

                        <div className = "kakao">
                            <div className = "mark-title">
                                <div className = "mark" />
                                <div className = "mark-name"> 카카오톡 문의</div>
                            </div>
                            <div className = "mark-time">오전 7시~오후 7시 (연중무휴)</div>
                            <div className = "mark-contents">
                                카카오톡에서 '마켓컬리'를 검색 후<br />
                                대화창에 문의 및 불편사항을<br />
                                남겨주세요. 
                            </div>
                        </div>

                        <div className = "hompage">
                            <div className = "mark-title">
                                <div className = "mark" />
                                <div className = "mark-name"> 홈페이지 문의</div>
                            </div>
                            <div className = "mark-time">
                                24시간 접수 가능<br />
                                로그인 > 마이컬리 > 1:1 문의
                            </div>
                            <div className = "mark-contents">
                                고객센터 운영 시간에 순차적으로<br />
                                답변해드리겠습니다.<br />
                            </div>
                        </div>
                    </div>
                </div>


                <div className = "refund">
                    <div className = "refund-left">
                        <div className = "refund-notice">교환 및 환불 안내</div>
                        <div className = "txt">고객님의 단순 변심으로 인한 반품은 어려울 수 있으니 양해 부탁드립니다.</div>
                    </div>
                    <div className = "more">
                        <span>자세히 보기</span>
                        <img alt = "arrow" src = "https://res.kurly.com/pc/ico/2001/pc_arrow_open@2x.png" />
                    </div>
                </div>

                 {/* tab */}
                 <div className = "tab">
                    <ul>
                        <li className = "tabOff">상품설명</li>
                        <li className = "tabOff">상품이미지</li>
                        <li className = "tabOff">상세정보</li>
                        <li className = "tabOn">고객후기(1)</li>
                        <li className = "tabOff">상품문의(2)</li>
                        <div className = "line" />
                    </ul>
                </div>


                <div className = "review">
                    <div className = "product-review">
                        <div className = "">
                            <h2>PRODUCT REVIEW</h2>
                            <ul>
                                <li>
                                    <div className = "ico" />
                                    <div>상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</div>
                                </li>
                                <li>
                                    <div className = "ico" />
                                    <div>배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 <strong>1:1 문의</strong>에 남겨주세요.</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <select>
                                <option value = "1">최근등록순</option>
                                <option value = "2">좋아요많은순</option>
                                <option value = "3">조회많은순</option>
                            </select>
                        </div>
                    </div>

                    {/* review */}
                    <div className = "form">
                        <table className = "tableHeader">
                            <tbody>
                                <tr>
                                    <th className = "number">번호</th>
                                    <th className = "title">제목</th>
                                    <th className = "userName">작성자</th>
                                    <th className = "date">작성일</th>
                                    <th className = "help">도움</th>
                                    <th className = "watch">조회</th>
                                </tr>
                            </tbody>
                        </table>
                        <table className = "tableBody">
                            <tbody>
                                <tr>
                                    <th className = "number">공지</th>
                                    <th className = "title"><div>금주의 Best 후기 안내</div></th>
                                    <th className = "userName">Marketkurly</th>
                                    <th className = "date">2019-11-01</th>
                                    <th className = "help"><span>0</span></th>
                                    <th className = "watch"><span>64138</span></th>
                                </tr>
                            </tbody>
                        </table>
                        <table className = "tableBody">
                            <tbody>
                                <tr>
                                    <th className = "number">공지</th>
                                    <th className = "title"><div>금주의 Best 후기 안내</div></th>
                                    <th className = "userName">Marketkurly</th>
                                    <th className = "date">2019-11-01</th>
                                    <th className = "help"><span>0</span></th>
                                    <th className = "watch"><span>64138</span></th>
                                </tr>
                            </tbody>
                        </table>
                        <table className = "tableBody">
                            <tbody>
                                <tr>
                                    <th className = "number">공지</th>
                                    <th className = "title"><div>금주의 Best 후기 안내</div></th>
                                    <th className = "userName">Marketkurly</th>
                                    <th className = "date">2019-11-01</th>
                                    <th className = "help"><span>0</span></th>
                                    <th className = "watch"><span>64138</span></th>
                                </tr>
                            </tbody>
                        </table>
                        <table className = "tableBody">
                            <tbody>
                                <tr>
                                    <th className = "number">공지</th>
                                    <th className = "title"><div>금주의 Best 후기 안내</div></th>
                                    <th className = "userName">Marketkurly</th>
                                    <th className = "date">2019-11-01</th>
                                    <th className = "help"><span>0</span></th>
                                    <th className = "watch"><span>64138</span></th>
                                </tr>
                            </tbody>
                        </table>
                        <table className = "tableBody">
                            <tbody>
                                <tr>
                                    <th className = "number">공지</th>
                                    <th className = "title"><div>금주의 Best 후기 안내</div></th>
                                    <th className = "userName">Marketkurly</th>
                                    <th className = "date">2019-11-01</th>
                                    <th className = "help"><span>0</span></th>
                                    <th className = "watch"><span>64138</span></th>
                                </tr>
                            </tbody>
                        </table>
                        <table className = "tableBody">
                            <tbody>
                                <tr>
                                    <th className = "number">공지</th>
                                    <th className = "title"><div>금주의 Best 후기 안내</div></th>
                                    <th className = "userName">Marketkurly</th>
                                    <th className = "date">2019-11-01</th>
                                    <th className = "help"><span>0</span></th>
                                    <th className = "watch"><span>64138</span></th>
                                </tr>
                            </tbody>
                        </table>
                        <table className = "tableBody">
                            <tbody>
                                <tr>
                                    <th className = "number">공지</th>
                                    <th className = "title"><div>금주의 Best 후기 안내</div></th>
                                    <th className = "userName">Marketkurly</th>
                                    <th className = "date">2019-11-01</th>
                                    <th className = "help"><span>0</span></th>
                                    <th className = "watch"><span>64138</span></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className = "write">
                        <button class = "write-btn">후기쓰기</button>
                    </div>

                    <div className = "page-btn">
                        <button className = "first-page" />
                        <button className = "before" />
                        <button className = "num">1</button>
                        <button className = "num">2</button>
                        <button className = "num">3</button>
                        <button className = "num">4</button>
                        <button className = "num">5</button>
                        <button className = "num">6</button>
                        <button className = "num">7</button>
                        <button className = "num">8</button>
                        <button className = "num">9</button>
                        <button className = "num">10</button>
                        <button className = "next" />
                        <button className = "last-page" />
                    </div>

                </div>
                
            </div>
        )        
    }
}
