import React, { Component } from "react";

export default class CardList extends Component {
  render() {
    const { cardName } = this.props;
    return (
      <div className="card-select">
        <div className="card">
          <div className="list">
            <select className="card-list">
              <div>{cardName}</div>
              <option value={cardName} />
            </select>
            <select className="card-install-list">
              <option value="1">{/* {cardInstallmentMonth} */}</option>
            </select>
          </div>
        </div>
        {/* <div>{cardDescription}</div> */}
      </div>
    );
  }
}
