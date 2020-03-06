import React, { Component } from "react";

export default class EventList extends Component {
  render() {
    const { img, alt } = this.props;
    return (
      <ul>
        <li>
          <img src={img} alt={alt} />
        </li>
      </ul>
    );
  }
}
