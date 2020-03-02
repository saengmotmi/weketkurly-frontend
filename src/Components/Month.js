import React, { Component } from "react";

export default class Month extends Component {
  render() {
    const { cardInstallmentMonth } = this.props;
    return (
      <>
        <option>{cardInstallmentMonth}</option>
      </>
    );
  }
}
