import React, { Component } from "react";
import "./EventView.scss";

export default class EventView extends Component {
  render() {
    const {
      goToJoin,
      MoveToFreeDelivery,
      MoveToGift,
      MoveToPoint
    } = this.props;

    return (
      <div className="event-view">
        {/* img */}
        <div className="event-img">
          <div className="img">
            <div className="button" onClick={goToJoin}>
              가입하고 혜택받기 >
            </div>
          </div>
        </div>

        {/* btn */}
        <div className="join-btn">
          <div className="bg">
            <button className="welcome-gift" onClick={MoveToGift} />
            <button className="free-delivery" onClick={MoveToFreeDelivery} />
            <button className="point" onClick={MoveToPoint} />
          </div>
        </div>
      </div>
    );
  }
}
