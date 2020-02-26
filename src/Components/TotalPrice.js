import React, { Component } from 'react';

export default class TotalPrice extends Component {
    render() {
        return (
            <div className = "total-price-point">
                <div className = "total-price">
                    <span className = "total">총 상품금액: </span>
                    <b className = "price">{this.props.price}</b>
                    <span className = "won">원</span>
                </div>
                <div className = "point">
                    {/* <div className = "point-before-login">
                        <div className = "save-icon">적립</div>
                        <div>로그인 후, 적립혜택 제공</div>
                    </div> */}
                    <div className = "point-after-login">
                        <div className = "save-icon">적립</div>
                        <span className = "each">구매 시</span>
                        <span className = "won-save">{this.props.point}원 적립</span>
                    </div>
                </div>
            </div>
        )
    }
}