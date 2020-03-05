import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Components/Layout/Nav";
import EventView from "../../Components/EventMain/EventView";
import SaleEventList from "../../Components/SaleEventList";
import Welcome from "../../Components/EventMain/Welcome";
import Free from "../../Components/EventMain/Free";
import Reserve from "../../Components/EventMain/Reserve";
import Invite from "../../Components/EventMain/Invite";
import Recommend from "../../Components/EventMain/ Recommend";
import EventList from "../../Components/EventList";
import Footer from "../../Components/Layout/Footer";
import "./EventMain.scss";

class EventMain extends Component {
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

  // 버튼 누르면 해당 영역으로 이동
  MoveToGift = () => {
    window.scrollTo(0, 845, "smooth");
  };

  MoveToFreeDelivery = () => {
    window.scrollTo(0, 2800, "smooth");
  };

  MoveToPoint = () => {
    window.scrollTo(0, 3705, "smooth");
  };

  // 회원가입 페이지로 이동 (Router)
  goToJoin = () => {
    this.props.history.push("/join");
    window.scrollTo(0, 0);
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

    return (
      <div className="EventMain">
        <Nav />
        <EventView
          goToJoin={this.goToJoin}
          MoveToFreeDelivery={this.MoveToFreeDelivery}
          MoveToGift={this.MoveToGift}
          MoveToPoint={this.MoveToPoint}
        />
        <Welcome
          eventList={
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
                })
          }
        />
        <Free scroll={scroll} />
        <Reserve scrollValue={scrollValue} />
        <Invite scrollEvent={scrollEvent} />
        <div className="special" />
        <Recommend
          bestList={
            best.length === 0
              ? null
              : this.state.best.map(el => {
                  return <EventList img={el.img} alt={el.alt} key={el.alt} />;
                })
          }
        />
        <Footer />
      </div>
    );
  }
}

export default withRouter(EventMain);
