import React, { Component } from "react";
import "./ProductDetail.scss";

export default class ProductDetail extends Component {
  render() {
    return (
      <div className="detail">
        <img
          className="detail-main-img"
          alt="메인 이미지"
          src="//img-cf.kurly.com/shop/data/goodsview/20180802/gv10000028525_1.jpg"
        />
        <h3>달콤한 대추 속에 숨은 고소한 브라질너트</h3>
        <h1>
          [선물세트]
          <br />
          유기샘 브라질너트 바삭대추
        </h1>
        <div className="line" />
        <p>
          매일 꼬박꼬박 챙겨먹을 수 있는 견과 제품은 많지만, 소중한 분께
          챙겨드릴 수 있는 제품은 의외로 많지 않아요. 정성들여 만든 모양과
          고급스러운 맛이 돋보이는 선물세트를 컬리가 준비했어요. 커다란 땅콩처럼
          생긴 브라질너트는 약간 무른 듯 부드러운 식감을 가진 견과류에요. 단 2알
          만으로도 풍부한 셀레늄을 섭취할 수 있는 브라질너트와 비타민 B군,
          사포닌, 식이섬유가 풍부한 대추가 만나 달달고소한 영양간식이
          되었답니다. <br />
          <br />
          오랜 기간 친환경 견과류를 고집해온 유기샘은 체계적이면서도 위생적인
          제조 공정을 거치는 것으로 잘 알려져 있어요. 상품의 원재료도 생산자와
          직접 계약하여 꼼꼼히 품질을 확인한 뒤 수급하지요. 어린이부터 할머니,
          할아버지까지 건강하게 먹을 수 있도록 식품첨가물은 단 한 가지도 넣지
          않아 더 믿고 먹을 수 있답니다.
        </p>

        {/* <div className = "kurly-check-point">
                        <div className = "line-left" />
                        <h3>Kurly's Check Point</h3>
                        <div className = "line-right" />
                    </div> */}

        {/* <div className = "check-point-img" >
                        <img src = "https://img-cf.kurly.com/shop/data/goodsview/20190730/gv10000057639_1.jpg" alt = "Kurly's Check Point" />
                    </div> */}

        <div className="kurly-pick">
          <div className="line-left" />
          <h3>Kurly's Pick</h3>
          <div className="line-right" />
        </div>

        {/* <div className = "pick-img">
                        <img src = "https://img-cf.kurly.com/shop/data/goodsview/20190730/gv40000057640_1.jpg" alt = "Kurly's Pick" />
                    </div> */}

        <div className="txt">
          <div className="txtTitle">유기샘 브라질너트 바삭대추</div>
          <div className="txtContents">
            <b>・ 구성</b>
            <span> : 1박스(100g X 3개입)</span>
            <br />
            <b>・ 특징</b>
            <span>
              : 커다란 땅콩처럼 생긴 브라질너트를 PET 용기에 담아 보관이
              편리해요.
            </span>
            <br />
            <b>・ 테이스팅 노트</b>
            <span>
              : 건대추로 브라질너트를 감싼 뒤 작게 잘라 한 입에 먹기 좋아요.
              바삭하면서도 오독오독한 식감과 함께 달콤하고 고소한 맛이에요.
            </span>
            <br />
          </div>
        </div>

        <div className="kurly-tip">
          <h3>Kurly's Tip</h3>
          <div className="contents">
            <div className="check">구입 전 확인하세요</div>
            <div className="content">
              ・ 선물세트를 넣을 수 있는 전용 쇼핑백을 함께 보내드립니다.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
