import React, { Component, Fragment } from "react";

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  _getApi = () => {
    fetch("https://api.kurly.com/v2/carts")
      .then(res => {
        return res.json();
      })
      .then(res =>
        this.setState({
          data: res
        })
      );
  };

  componentDidMount = () => {
    this._getApi();
  };

  render() {
    return (
      <Fragment>
        <p>장바구니</p>
      </Fragment>
    );
  }
}

export default ItemCart;
