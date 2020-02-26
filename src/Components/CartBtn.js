import React, { Component } from 'react';

export default class CartBtn extends Component {
    render() {
        return (
            <div className = "btn">
                <div className = "cartBtn">
                    <button className = "alarmOff">재입고 알림</button>
                    <button className = "saveItem">늘 사는것</button>
                    <button className = "goToCart">장바구니 담기</button>
                </div>
            </div>
        )
    }
}