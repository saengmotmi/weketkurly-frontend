import React, { Component } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import "./OrderList.scss";

export default class OrderList extends Component {
  render() {
    return (
      <div className="OrderList">
        <Nav />
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
        {/* 마이컬리 */}
        <div className="contents">
          <aside className="my-kurly">
            <h2>마이컬리</h2>
            <ul>
              <li>
                <span>주문내역</span>
                <div className="arrow" />
              </li>
              <li>
                <span>늘 사는 것</span>
                <div className="arrow" />
              </li>
              <li>
                <span>상품후기</span>
                <div className="arrow" />
              </li>
              <li>
                <span>적립금</span>
                <div className="arrow" />
              </li>
              <li>
                <span>쿠폰</span>
                <div className="arrow" />
              </li>
              <li>
                <span>개인정보수정</span>
                <div className="arrow" />
              </li>
            </ul>
            <div className="help">
              <span>도움이 필요하신가요?</span>
              <div>1:1 문의하기</div>
            </div>
          </aside>

          <article>
            <div className="title-bar">
              <div>
                <h2>주문내역</h2>
                <span className="sub">
                  지난 3년간의 주문 내역 조회가 가능합니다
                </span>
              </div>
              <select>
                <option>전체기간</option>
                <option>2020년</option>
                <option>2019년</option>
                <option>2018년</option>
              </select>
            </div>
            <div className="product">
              <h3 className="data">2020.02.08(19시 34분)</h3>
              <ul>
                <li className="list">
                  <div className="product-name">
                    [네떼] 파프리카샐러드 65g 외 5건
                  </div>
                  <div>
                    <div className="thumb" />
                    <div>
                      <dl>
                        <dt>주문번호</dt>
                        <dd>1581158003681</dd>
                      </dl>
                      <dl>
                        <dt>걸제금액</dt>
                        <dd>31,880원</dd>
                      </dl>
                      <dl>
                        <dt>주문산택</dt>
                        <dd>배송완료</dd>
                      </dl>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
