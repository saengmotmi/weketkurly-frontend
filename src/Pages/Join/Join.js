import React, { Component } from "react";
import "./Join.scss";

class Join extends Component {
  render() {
    return (
      <join>
        <div className="contents">
          <div className="page-location">
            <a href="https://www.google.com/">홈</a>
            <span className="page-symbol"> > </span>
            <strong>회원가입</strong>
          </div>

          <div className="page-article">
            <div className="page-article2">
              <div className="head-section">
                <h2 className="join-title">회원가입</h2>
              </div>
              <div className="head-notification1">
                <p>*필수입력사항</p>
              </div>
              <div className="write-board2">
                <div className="ghost-tr"></div>
                <tr className="first-tr">
                  <td className="id-write col1">
                    <span>아이디*</span>
                  </td>
                  <td className="id-write col2">
                    <div className="col2-2">
                      <input
                        className="typing"
                        type="text"
                        placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                      ></input>
                      <a
                        href="https://www.google.com/"
                        className="normal-button colbutton"
                      >
                        중복확인
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="pw-write col1">비밀번호*</td>
                  <td className="pw-write col2">
                    <input
                      className="typing"
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="pw-confirm col1">비밀번호확인*</td>
                  <td className="pw-confirm col2">
                    <input
                      className="typing"
                      type="password"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="name col1">이름*</td>
                  <td className="name col2">
                    <input
                      className="typing"
                      type="text"
                      placeholder="고객님의 이름을 입력해주세요"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="email col1">이메일*</td>
                  <td className="email col2">
                    <div className="col2-2">
                      <input
                        className="typing"
                        type="text"
                        placeholder="예: marketkurly@kurly.com"
                      ></input>
                      <a
                        href="https://www.google.com/"
                        className="normal-button colbutton"
                      >
                        이메일 중복확인
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="cell col1">휴대폰*</td>
                  <td className="cell col2">
                    <div className="col2-2">
                      <input
                        className="typing"
                        type="number"
                        placeholder="숫자만 입력해주세요"
                      ></input>
                      <a
                        href="https://www.google.com/"
                        className="normal-button-gray colbutton"
                      >
                        인증번호받기
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="give-number col1"></td>
                  <td className="give-number col2">
                    <div className="col2-2">
                      <input className="typing" type="text"></input>
                      <a
                        href="https://www.google.com/"
                        className="normal-button-white colbutton"
                      >
                        인증번호 확인
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="address2 col1">배송주소</td>
                  <td>
                    <div className="col2-2">
                      <a
                        href="https://www.google.com/"
                        className="normal-button address"
                      >
                        <img
                          className="dotbogi"
                          src="http://drive.google.com/uc?export=view&id=15ckyyBIcZTccgf0DppAKqaj3idKyCoya"
                          alt=""
                        />
                        <span>주소 검색</span>
                      </a>
                    </div>
                    <p className="address-hint">
                      배송가능여부를 확인할수 있습니다.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="sex col1">성별</td>
                  <td className="sex col2">
                    <label className="label-radio">
                      <input
                        className="sex-bullion"
                        type="radio"
                        name="sex-bullion"
                      ></input>
                      <span>남자</span>
                    </label>
                    <label className="label-radio">
                      <input
                        className="sex-bullion"
                        type="radio"
                        name="sex-bullion"
                      ></input>
                      <span>여자</span>
                    </label>
                    <label className="label-radio">
                      <input
                        className="sex-bullion"
                        type="radio"
                        name="sex-bullion"
                      ></input>
                      <span>선택안함</span>
                    </label>
                  </td>
                </tr>
                <tr className="birth-tr">
                  <td className="birth col1">생년월일</td>
                  <td>
                    <div className="birth col2">
                      <div className="birth-inputs col2">
                        <input
                          className="birth-input year"
                          placeholder="YYYY"
                        ></input>
                        <span>/</span>
                        <input
                          className="birth-input month"
                          placeholder="MM"
                        ></input>
                        <span>/</span>
                        <input
                          className="birth-input day"
                          placeholder="DD"
                        ></input>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="ghost-tr">
                  <td className="birth col1"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="extra-info col1">추가입력사항</td>
                  <td className="extra col2">
                    <label className="label-radio">
                      <input type="radio" name="reco-bullion"></input>
                      <span>추천인 아이디</span>
                    </label>
                    <label className="label-radio">
                      <input type="radio" name="reco-bullion"></input>
                      <span>참여 이벤트명</span>
                    </label>
                  </td>
                </tr>
              </div>

              <div className="agree-board">
                <div className="agree-head">
                  <h3>이용약관동의*</h3>
                  <p className="agree-note">
                    선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                    서비스를 이용할 수 있습니다.
                  </p>
                </div>
                <div className="agree-neck">
                  <label>
                    <input type="checkbox"></input>
                    <span className="agree-explanation">전체동의</span>
                  </label>
                </div>
                <div className="agree-body">
                  <div className="agree-body-line">
                    <label>
                      <input type="checkbox"></input>
                      <span className="agree-explanation">
                        이용약관
                        <span className="agree-gray-guide">(필수)</span>
                      </span>
                      <a href="https://www.google.com/" className="clasuse">
                        약관보기>
                      </a>
                    </label>
                  </div>
                  <div className="agree-body-line">
                    <label>
                      <input type="checkbox"></input>
                      <span className="agree-explanation">
                        개인정보처리방침
                        <span className="agree-gray-guide">(필수)</span>
                      </span>
                      <a href="https://www.google.com/" className="clasuse">
                        약관보기>
                      </a>
                    </label>
                  </div>
                  <div className="agree-body-line">
                    <label>
                      <input type="checkbox"></input>
                      <span className="agree-explanation">
                        개인정보처리방침
                        <span className="agree-gray-guide">(선택)</span>
                      </span>
                      <a href="https://www.google.com/" className="clasuse">
                        약관보기>
                      </a>
                    </label>
                  </div>
                  <div className="agree-body-line">
                    <label>
                      <input type="checkbox" className="info-share"></input>
                      <span className="agree-explanation">
                        무료배송, 할인쿠폰 등 혜택/정보 수진
                        <span className="agree-gray-guide">(선택)</span>
                      </span>
                    </label>

                    <div className="subscription">
                      <div className="subscript-detail">
                        <label>
                          <input type="checkbox" className="info-share"></input>
                          <span className="agree-explanation">SMS</span>
                        </label>

                        <label>
                          <input type="checkbox" className="info-share"></input>
                          <span className="agree-explanation">이메일</span>
                        </label>
                      </div>
                      <div className="benefit-info">
                        <img
                          className="benefit-info"
                          src="https://res.kurly.com/pc/img/1901/img_event_check_x2.png"
                          alt=""
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="agree-body-line">
                    <label>
                      <input type="checkbox"></input>
                      <span className="agree-explanation">
                        본인은 만 14세 이상입니다.
                        <span className="agree-gray-guide">(필수)</span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="ghost-tr"></div>
              </div>
              <div className="final-join">
                <button type="submit" className="final-button-join">
                  가입하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </join>
    );
  }
}
export default Join;
