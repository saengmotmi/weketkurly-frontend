import React, { Component } from "react";
import Nav from "../../Components/Nav";
import List from "../../Components/List/List";
import PageBtn from "../../Components/PageBtn";
import Footer from "../../Components/Footer";
import "./OrderList.scss";

export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: []
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/data/order.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          order: res.order
        });
      });
  };

  render() {
    const orderlist = this.state.order.map(el => {
      return (
        <List
          key={el.no}
          no={el.no}
          product_name={el.product_name}
          status={el.status}
          thumb={el.thumb}
          review_button_flag={el.review_button_flag}
        />
      );
    });
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
                456원
                <img
                  src="https://res.kurly.com/pc/service/common/1905/ico_arrow_56x56.png"
                  alt="자세히 보기"
                />
              </div>
              <div className="remove">소멸 예정 0원</div>
            </li>
            <li className="cupon">
              <h2>쿠폰</h2>
              <div>
                0개
                <img
                  src="https://res.kurly.com/pc/service/common/1905/ico_arrow_56x56.png"
                  alt="자세히 보기"
                />
              </div>
            </li>
            <li className="pass">
              <h2>컬리패스</h2>
              <div>
                알아보기
                <img
                  src="https://res.kurly.com/pc/service/common/1905/ico_arrow_56x56.png"
                  alt="자세히 보기"
                />
              </div>
            </li>
          </ul>
        </div>
        {/* 마이컬리 */}
        <div className="contents">
          <aside className="my-kurly">
            <h2>마이컬리</h2>
            <ul>
              <li className="list">
                <span>주문내역</span>
              </li>
              <li className="_list">
                <span>늘 사는 것</span>
              </li>
              <li className="_list">
                <span>상품후기</span>
              </li>
              <li className="_list">
                <span>적립금</span>
              </li>
              <li className="_list">
                <span>쿠폰</span>
              </li>
              <li className="_list">
                <span>개인정보수정</span>
              </li>
            </ul>
            <div className="help">
              <span>도움이 필요하신가요?</span>
              <div>1:1 문의하기</div>
            </div>
          </aside>
          <article>
            <div className="order-list">
              <div className="title-bar">
                <h2>주문내역</h2>
                <span className="sub">
                  지난 3년간의 주문 내역 조회가 가능합니다
                </span>
              </div>
              <div>
                <select>
                  <option>전체기간</option>
                  <option>2020년</option>
                  <option>2019년</option>
                  <option>2018년</option>
                </select>
              </div>
            </div>
            {/* 상품 컴포넌트 */}
            <ul className="list-detail">{orderlist}</ul>
            <PageBtn />
          </article>
        </div>
        <Footer />
      </div>
    );
  }
}
