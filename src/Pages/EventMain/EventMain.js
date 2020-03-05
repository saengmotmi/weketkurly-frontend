import React, { Component } from "react";
import Nav from "../../Components/Layout/Nav";
import SaleEventList from "../../Components/SaleEventList";
import EventList from "../../Components/EventList";
import Footer from "../../Components/Layout/Footer";
import "./EventMain.scss";

export default class EventMain extends Component {
  constructor() {
    super();
    this.state = {
      scroll: false,
      scrollValue: false,
      scrollEvent: false,
      scrollArrow: false,
      scrollSale: false,
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
    if (scrollTop > 2100 && scrollTop < 3112) {
      this.setState({
        scroll: true,
        scrollTop: scrollTop
      });
    } else {
      this.setState({
        scroll: false
      });
    }

    if (scrollTop > 3000 && scrollTop < 3900) {
      this.setState({
        scrollValue: true,
        scrollTop: scrollTop
      });
    } else {
      this.setState({
        scrollValue: false
      });
    }

    if (scrollTop > 3600 && scrollTop < 4850) {
      this.setState({
        scrollEvent: true,
        scrollTop: scrollTop
      });
    } else {
      this.setState({
        scrollEvent: false
      });
    }

    if (scrollTop > 905 && scrollTop < 2600) {
      this.setState({
        scrollArrow: true,
        scrollTop: scrollTop
      });
    } else {
      this.setState({
        scrollArrow: false
      });
    }

    if (scrollTop > 1000 && scrollTop < 2600) {
      this.setState({
        scrollSale: true,
        scrollTop: scrollTop
      });
    } else {
      this.setState({
        scrollSale: false
      });
    }
  };

  MoveToGift = () => {
    window.scrollTo(0, 845, "smooth");
  };

  MoveToFreeDelivery = () => {
    window.scrollTo(0, 2800, "smooth");
  };

  MoveToPoint = () => {
    window.scrollTo(0, 3705, "smooth");
  };

  render() {
    const {
      scroll,
      scrollValue,
      scrollEvent,
      scrollArrow,
      scrollSale,
      event,
      best
    } = this.state;
    const eventList =
      event.length === 0
        ? null
        : this.state.event.map(el => {
            return (
              <SaleEventList
                key={el.alt}
                img={el.img}
                alt={el.alt}
                scrollArrow={scrollArrow}
                scrollSale={scrollSale}
              />
            );
          });

    const bestList =
      best.length === 0
        ? null
        : this.state.best.map(el => {
            return <EventList img={el.img} alt={el.alt} key={el.alt} />;
          });

    return (
      <div className="EventMain">
        <Nav />
        <div className="event-view">
          {/* img */}
          <div className="event-img">
            <div className="img">
              <div className="button">가입하고 혜택받기 ></div>
            </div>
          </div>
          {/* btn */}
          <div className="join-btn">
            <div className="bg">
              <button className="welcome-gift" onClick={this.MoveToGift} />
              <button
                className="free-delivery"
                onClick={this.MoveToFreeDelivery}
              />
              <button className="point" onClick={this.MoveToPoint} />
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
          <div className="img">
            <span className={scroll ? "free-move" : "free"}>무료배송!</span>
          </div>
        </div>

        <div className="no3">
          <div className="img">
            <span className={scrollValue ? "discount-move" : "discount"}>
              5%
            </span>
          </div>
        </div>

        <div className="no4">
          <div className="img">
            <span className={scrollEvent ? "contents-move" : "contents"}>
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
              <span className="arrow" />
            </button>
            <div className="arrow" />
          </div>
          <div className="join">
            <button>
              회원가입 <span className="bold">하러가기</span>
              <span className="arrow" />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
