import React, { Component } from "react";
import "./Customer.scss";

export default class Customer extends Component {
  render() {
    const { moreBtn, onClickMore } = this.props;
    return (
      <>
        <div className="customer-center">
          <div className="customer-center-title">
            <h3>고객행복센터</h3>
            <div className="service">
              궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요?
            </div>
            <div className="help">
              문제가 되는 부분을 사진으로 찍어 아래 중 편하신 방법으로 접수해
              주시면 빠르게 도와드리겠습니다.
            </div>
          </div>
          <div className="contents">
            <div className="call">
              <div className="mark-title">
                <div className="mark" />
                <div className="mark-name">전화 문의 1644-1107</div>
              </div>
              <div className="mark-time">오전 7시~오후 7시 (연중무휴)</div>
            </div>

            <div className="kakao">
              <div className="mark-title">
                <div className="mark" />
                <div className="mark-name"> 카카오톡 문의</div>
              </div>
              <div className="mark-time">오전 7시~오후 7시 (연중무휴)</div>
              <div className="mark-contents">
                카카오톡에서 '마켓컬리'를 검색 후<br />
                대화창에 문의 및 불편사항을
                <br />
                남겨주세요.
              </div>
            </div>

            <div className="homepage">
              <div className="mark-title">
                <div className="mark" />
                <div className="mark-name"> 홈페이지 문의</div>
              </div>
              <div className="mark-time">
                24시간 접수 가능
                <br />
                로그인 > 마이컬리 > 1:1 문의
              </div>
              <div className="mark-contents">
                고객센터 운영 시간에 순차적으로
                <br />
                답변해드리겠습니다.
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="refund">
          <div className="refund-left">
            <div className="refund-notice">교환 및 환불 안내</div>
            <div className="txt">
              고객님의 단순 변심으로 인한 반품은 어려울 수 있으니 양해
              부탁드립니다.
            </div>
          </div>
          <div
            className="more-btn"
            onClick={onClickMore}
            style={{ display: moreBtn ? "none" : "block" }}
          >
            <span>자세히 보기</span>
            <img
              alt="arrow"
              src="https://res.kurly.com/pc/ico/2001/pc_arrow_open@2x.png"
            />
          </div>
          <div
            className="close-btn"
            onClick={onClickMore}
            style={{ display: moreBtn ? "block" : "none" }}
          >
            <span>닫기</span>
            <img
              alt="arrow"
              src="https://res.kurly.com/pc/ico/2001/pc_arrow_close@2x.png"
            />
          </div>
        </div>

        <div className="hide" style={{ display: moreBtn ? "block" : "none" }}>
          <div className="refund-info">
            <div className="title">01. 받으신 상품에 문제가 있는 경우</div>
            <div className="contents">
              <div className="hide-contents">
                상품이 표시·광고 내용과 다르거나 부패한 경우 등 상품에 문제가
                있는 정도에 따라 <br />
                재배송, 일부 환불, 전액 환불해드립니다.
              </div>
              <div className="hide-title">신선 / 냉장 / 냉동 식품 </div>
              <div className="hide-contents">
                상품을 받은 날부터 2일 이내에 상품 상태를 확인할 수 있는 사진을
                첨부해 1:1 문의 게시판에 남겨주세요. <br />
              </div>
              <div className="hide-title">
                유통기한 30일 이상의 식품 (신선 / 냉장 / 냉동 제외) 및 기타 상품
              </div>
              <div className="hide-contents">
                상품을 받은 날부터 3개월 이내 또는 문제가 있다는 사실을 알았거나
                알 수 있었던 날부터 30일 이내에 <br />
                상품의 상태를 확인할 수 있는 사진을 첨부해 1: 1 문의 게시판에
                남겨주세요.
              </div>
              <div className="hide-extra">
                ※상품에 문제가 있는 것으로 확인되면 배송비는 컬리가 부담합니다.
              </div>
            </div>
          </div>
          <div className="refund-info">
            <div className="title">02. 단순 변심, 주문 착오의 경우</div>
            <div className="contents">
              <div className="hide-title">신선 / 냉장 / 냉동 식품 </div>
              <div className="hide-contents">
                재판매가 불가한 상품의 특성상, 단순 변심, 주문 착오 시 교환 및
                반품이 어려운 점 양해 부탁드립니다. <br />
                상품에 따라 조금씩 맛이 다를 수 있으며, 개인의 기호에 따라 같은
                상품도 다르게 느끼실 수 있습니다.
              </div>
              <div className="hide-title">
                유통기한 30일 이상의 식품 (신선 / 냉장 / 냉동 제외) 및 기타 상품
              </div>
              <div className="hide-contents">
                상품을 받은 날부터 7일 이내에 1:1 문의 게시판에 남겨주세요.
              </div>
              <div className="hide-extra">
                ※ 단순 변심으로 인한 교환 또는 환불의 경우 고객님께서 배송비
                6,000원을 부담하셔야 합니다. <br />
                (주문 건 배송비를 결제하셨을 경우 3,000원)
              </div>
            </div>
          </div>
          <div className="refund-info">
            <div className="title">03. 교환·반품이 불가한 경우</div>
            <div className="contents">
              <div className="hide-extra">
                다음에 해당하는 교환·반품 신청은 처리가 어려울 수 있으니 양해
                부탁드립니다. <br />
                <br />- 소비자에게 책임 있는 사유로 상품이 멸실 또는 훼손된 경우{" "}
                <br />
                (포장지 훼손으로 인해 재판매가 불가능한 상품의 경우, 단순 변심에
                의한 반품이 어렵습니다.) <br />- 일부 예약 상품은 배송 3~4일
                전에만 취소하실 수 있습니다.
                <br /> 소비자의 주문에 따라 개별적으로 생산되는 상품이 이미 제작
                진행된 경우
              </div>
            </div>
          </div>
          <div className="line" />
        </div>
      </>
    );
  }
}
