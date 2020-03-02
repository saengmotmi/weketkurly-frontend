import React, { Component } from "react";

export default class CardList extends Component {
  render() {
    const { cardName, handleOnClick } = this.props;
    return (
      <>
        <option value={cardName} onClick={handleOnClick}>
          {cardName}
        </option>
      </>
    );
  }
}
