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
              <td>상품설명 및 상품이미지 참조</td>
              <th>관련법상 표시사항</th>
              <td>
                농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시{" "}
                <br />
                축산물 - 축산법에 따른 등급 표시, 쇠고기의 경우 이력관리에 따른
                표시 유무 <br />
                수산물 - 농수산물품질관리법상 유전자변형수산물 표시, 지리적 표시{" "}
                <br />
                수입식품에 해당하는 경우 “식품위생법에 따른 수입신고를 필함”의
                문구 <br />
              </td>
            </tr>
            <tr>
              <th>생산자, 수입품의 경우 수입자를 함께 표기</th>
              <td>농업회사법인 유기샘 주식회사</td>
              <th>상품구성</th>
              <td>상품설명 및 상품이미지 참조</td>
            </tr>
            <tr>
              <th>농수산물의 원산지 표시에 관한 법률에 따른 원산지</th>
              <td>브라질 너트 - 페루산 / 대추 - 국내산</td>
              <th>보관방법 또는 취급방법</th>
              <td>상온 보관</td>
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
