import React, { Component } from "react";
import "./WhyKurly.scss";

export default class WhyKurly extends Component {
  render() {
    return (
      <div className="why-kurly">
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
      </div>
    );
  }
}
