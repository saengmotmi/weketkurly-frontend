import React, { Component } from "react";
import Table from "./Table";
import PageBtn from "./PageBtn";

export default class Qa extends Component {
  render() {
    return (
      <div className="qa">
        <div className="product-review">
          <div className="">
            <h2>PRODUCT Q&A</h2>
            <ul>
              <li>
                <div className="ico" />
                <div>
                  상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과
                  다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
                </div>
              </li>
              <li>
                <div className="ico" />
                <div>
                  배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리
                  내 <strong>1:1 문의</strong>에 남겨주세요.
                </div>
              </li>
            </ul>
          </div>
          <div>
            <select>
              <option value="1">최근등록순</option>
              <option value="2">좋아요많은순</option>
              <option value="3">조회많은순</option>
            </select>
          </div>
        </div>

        {/* review */}
        <Table />
        <div className="qa-btn">
          <div>
            <button className="write-all-view">전체보기</button>
          </div>
          <div>
            <button className="write-qa-hover">상품문의</button>
          </div>
        </div>
        <PageBtn />
      </div>
    );
  }
}
