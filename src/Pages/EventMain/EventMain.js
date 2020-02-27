import React, { Component } from "react";
import Nav from "../../Components/Nav";
import SaleEventList from "../../Components/SaleEventList";
import EventList from "../../Components/EventList";
import Footer from "../../Components/Footer";
import "./EventMain.scss";

export default class EventMain extends Component {
  constructor() {
    super();
    this.state = {
      scroll: false,
      scrollValue: false,
      scrollEvent: false,
      scrollTop: 0,
      event: [],
      best: []
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll);

    fetch("http://localhost:3000/data/event.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          event: res.event
        });
      });

    fetch("http://localhost:3000/data/best.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          best: res.best
        });
      });
  };

  onScroll = e => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    console.log(scrollTop);
    if (scrollTop > 2329 && scrollTop < 3112) {
      this.setState({
        scroll: true,
        scrollTop: scrollTop
      });
    } else {
      this.setState({
        scroll: false
      });
    }

    if (scrollTop > 2329 && scrollTop < 3112) {
      this.setState({
        scrollValue: true,
        scrollTop: scrollTop
      });
    } else {
      this.setState({
        scrollValue: false
      });
    }

    if (scrollTop > 4120 && scrollTop < 4875) {
      this.setState({
        scrollEvent: true,
        scrollTop: scrollTop
      });
    } else {
      this.setState({
        scrollEvent: false
      });
    }
  };

  render() {
    const { scroll, scrollValue, scrollEvent, event, best } = this.state;
    const eventList =
      event.length === 0
        ? null
        : this.state.event.map(el => {
            return <SaleEventList img={el.img} alt={el.alt} />;
          });

    const bestList =
      best.length === 0
        ? null
        : this.state.best.map(el => {
            return <EventList img={el.img} alt={el.alt} />;
          });

    return (
      <div className="EventMain">
        <Nav />
        <div className="event-view">
          {/* img */}
          <div className="event-img">
            <div className="button">가입하고 혜택 받기 ></div>
          </div>
          {/* btn */}
          <div className="join-btn">
            <div className="bg">
              <button className="welcome-gift" />
              <button className="free-delivery" />
              <button className="point" />
            </div>
          </div>
        </div>

        <div className="no1">
          <img
            src="https://res.kurly.com/images/event/join/191023/pc/img_benefit1.png"
            alt="혜택1"
          />
          <div className="list-goods">
            <ul>
              <div className="list">{eventList}</div>
            </ul>
            <div className="list-txt">
              ・ 부정한 방법(중복 가입 또는 중복 참여, 명의 도용 등)으로 신규
              가입 이벤트를 이용할 경우, 주문 완료 후에도 주문이 취소될 수
              있습니다.
            </div>
          </div>
        </div>

        <div className="no2">
          <img
            src="https://res.kurly.com/images/event/join/191113/pc/img_benefit2.png"
            alt=""
          ></img>
          <span className={scroll ? "free-move" : "free"}>무료배송!</span>
        </div>

        <div className="no3">
          <span className={scrollValue ? "discount " : "discount-move"}>
            5%
          </span>
        </div>

        <div className="no4">
          <div>
            <span className={scrollEvent ? "contents" : "contents-move"}>
              적립금 5천원!
            </span>
          </div>
        </div>

        <div className="special"></div>

        <div className="rec">
          <h4>
            컬리가 처음인 당신을 위한
            <span className="bold"> BEST 추천상품</span>
          </h4>
          <div className="best-list">{bestList}</div>
        </div>

        <div className="last-btn">
          <div className="rec">
            <button>
              추천상품 <span className="bold">더 보러가기</span>
            </button>
            <div className="arrow" />
          </div>
          <div className="join">
            <button>
              회원가입 <span className="bold">하러가기</span>
            </button>
            <div className="arrow" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
