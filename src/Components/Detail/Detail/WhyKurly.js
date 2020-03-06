import React, { Component } from "react";
import "./WhyKurly.scss";

export default class WhyKurly extends Component {
  render() {
    return (
      <div className="why-kurly-table">
        <table>
          <tbody>
            <tr>
              <th>포장단위별 용량(중량), 수량, 크기</th>
              <td>2조각/450g 내외</td>
              <th>관련법상 표시사항</th>
              <td>해당 사항 없음</td>
            </tr>
            <tr>
              <th>생산자, 수입품의 경우 수입자를 함께 표기</th>
              <td>제품 별도 라벨 표기 참조</td>
              <th>상품구성</th>
              <td>조각 무</td>
            </tr>
            <tr>
              <th>농수산물의 원산지 표시에 관한 법률에 따른 원산지</th>
              <td>국산</td>
              <th>보관방법 또는 취급방법</th>
              <td>냉장 보관</td>
            </tr>
            <tr>
              <th>
                제조연월일(포장일 또는 생산연도), 유통기한 또는 품질유지기한
              </th>
              <td>제품 별도 라벨 표기 참조</td>
              <th>소비자상담 관련 전화번호</th>
              <td>마켓컬리 고객행복센터(1644-1107)</td>
            </tr>
          </tbody>
        </table>
        <div className="why-kurly">
          <h3>WHY KURLY</h3>
          <div className="contents-box">
            <div className="contents">
              <img
                src="https://res.kurly.com/pc/ico/1910/01_check.svg"
                alt="icon"
              />
              <div className="title">깐깐한 상품위원회</div>
              <div className="content">
                전국 각지와 해외의 훌륭한 생산자가
                <br />
                믿고 선택하는 파트너, 마켓컬리.
                <br />
                2천여 개가 넘는 컬리 단독 브랜드, 스펙의
                <br />
                Kurly Only 상품을 믿고 만나보세요.
                <br />
              </div>
            </div>
            <div className="contents">
              <img
                src="https://res.kurly.com/pc/ico/1910/02_only.svg"
                alt="icon"
              />
              <div className="title">차별화된 Kurly Only 상품</div>
              <div className="content">
                나와 내 가족이 먹고 쓸 상품을 고르는 <br />
                마음으로 매주 상품을 직접 먹어보고, <br />
                경험해보고 성분, 맛, 안정성 등 다각도의 <br />
                기준을 통과한 상품만을 판매합니다. <br />
              </div>
            </div>
            <div className="contents">
              <img
                src="https://res.kurly.com/pc/ico/1910/03_cold.svg"
                alt="icon"
              />
              <div className="title">신선한 풀콜드체인 배송</div>
              <div className="content">
                온라인 업계 최초로 산지에서 문 앞까지
                <br />
                상온, 냉장, 냉동 상품을 분리 포장 후<br />
                최적의 온도를 유지하는 냉장 배송 시스템,
                <br />
                풀콜드체인으로 상품을 신선하게 전해드립니다.
                <br />
              </div>
            </div>
          </div>
          <div className="contents-box">
            <div className="contents">
              <img
                src="https://res.kurly.com/pc/ico/1910/04_price.svg"
                alt="icon"
              />
              <div className="title">고객, 생산자를 위한 최선의 가격</div>
              <div className="content">
                매주 대형 마트와 주요 온라인 마트의 가격
                <br />
                변동 상황을 확인해 신선식품은 품질을
                <br />
                타협하지 않는 선에서 최선의 가격으로,
                <br />
                가공식품은 언제나 합리적인 가격으로
                <br />
              </div>
            </div>
            <div className="contents">
              <img
                src="https://res.kurly.com/pc/ico/1910/05_eco.svg"
                alt="icon"
              />
              <div className="title">환경을 생각하는 지속 가능한 유통</div>
              <div className="content">
                친환경 포장재부터 생산자가 상품에만 <br />
                집중할 수 있는 직매입 유통구조까지, <br />
                지속 가능한 유통을 고민하며 컬리를 있게
                <br />
                하는 모든 환경(생산자, 커뮤니티, 직원)이 <br />
                더 나아질 수 있도록 노력합니다. <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
