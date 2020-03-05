import React, { Component } from "react";
import Nav from "../../Components/Layout/Nav";
import MyPage from "../../Components/OrderList/MyPage";
import MyKurly from "../../Components/OrderList/MyKurly";
import MyOrderList from "../../Components/OrderList/MyOrderList";
import Footer from "../../Components/Layout/Footer";
import "./OrderList.scss";

export default class OrderList extends Component {
  render() {
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
