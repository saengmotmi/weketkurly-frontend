import React, { Component } from "react";
import "./ProductDetail.scss";

export default class ProductDetail extends Component {
  render() {
    return (
      <div className="detail">
        <img
          className="detail-main-img"
          alt="메인 이미지"
          src="https://img-cf.kurly.com/shop/data/goodsview/20200304/gv10000083980_1.jpg"
        />
        <h3>한 번에 사용하기 좋은</h3>
        <h1>조각무 2조각</h1>
        <div className="line" />
        <p>
          달큰하고 아릿한 무는 찌개, 조림, 볶음 등 다양한 메뉴에 활용하기 좋은
          식재료예요. 무를 구매할 때마다, 필요한 양보다 훨씬 더 많은 양이 남거나
          버려져 곤란했던 경험 있으실 텐데요. 매번 껍질을 벗기고 조각내어
          보관하는 번거로운 과정 없이, 무척 간편하게 사용할 수 있는 조각무
          제품을 준비했어요. 한 끼 식사에 바로 활용할 수 있게끔 껍질을 깨끗하게
          제거하고, 2조각으로 잘라 진공 패키지에 담았습니다. 무 한 개를 통째로
          구매하기 망설여졌던 소가구도 이제 고민 없이 조각무를 선택해 보세요.
        </p>

        <div className="kurly-check-point">
          <div className="line-left" />
          <h3>Kurly's Check Point</h3>
          <div className="line-right" />
        </div>

        <div className="check-point-img">
          <img
            src="https://img-cf.kurly.com/shop/data/goodsview/20200304/gv30000083981_1.jpg"
            alt="Kurly's Check Point"
          />
        </div>

        <div className="kurly-pick">
          <div className="line-left" />
          <h3>Kurly's Pick</h3>
          <div className="line-right" />
        </div>

        {/* <div className = "pick-img">
                        <img src = "https://img-cf.kurly.com/shop/data/goodsview/20190730/gv40000057640_1.jpg" alt = "Kurly's Pick" />
                    </div> */}

        <div className="txt">
          <div className="txtTitle">조각무 2조각</div>
          <div className="txtContents">
            <b>・ 중량</b>
            <span> : 450g(2조각)</span>
            <br />
            <b>・ 특징</b>
            <span>
              : 국내산 무의 껍질을 벗긴 다음, 2조각으로 잘라 진공 포장한
              제품이에요. 한 끼 식사에 활용하기 좋은 소용량으로, 바로 조리할 수
              있어 편리하답니다.
            </span>
            <br />
            <b>・ 세척법</b>
            <span>
              : 이미 손질되어 있으므로, 흐르는 물에 가볍게 헹궈 바로 사용하세요.
            </span>
            <br />
            <b>・ 보관법</b>
            <span>
              : 0~10°C에서 냉장 보관하세요. 포장지 개봉 후에는 비닐봉지나 용기에
              담아 밀폐 보관해 주세요.
            </span>
          </div>
        </div>

        {/* <div className="kurly-tip">
          <h3>Kurly's Tip</h3>
          <div className="contents">
            <div className="check">구입 전 확인하세요</div>
            <div className="content">
              ・ 선물세트를 넣을 수 있는 전용 쇼핑백을 함께 보내드립니다.
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
