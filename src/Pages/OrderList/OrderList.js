import React, { Component } from "react";
import Nav from "../../Components/Layout/Nav";
import MyPage from "../../Components/OrderList/MyPage";
import MyKurly from "../../Components/OrderList/MyKurly";
import MyOrderList from "../../Components/OrderList/MyOrderList";
import List from "../../Components/List/List";
import PageBtn from "../../Components/PageBtn";
import Footer from "../../Components/Layout/Footer";

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
        <MyPage />
        <div className="contents">
          <MyKurly />
          <MyOrderList />
        </div>
        <Footer />
      </div>
    );
  }
}
