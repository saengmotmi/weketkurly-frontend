import React, { Component } from "react";
import Nav from "../../Components/Layout/Nav";
import Footer from "../../Components/Layout/Footer";
import "./Join.scss";

class Join extends Component {
  constructor() {
    super();

    this.state = {
      IDFocusMode: false,
      PWFocusMode: false,
      PWConfirmFocusMode: "flase",
      guideIDFirstClass: "guide-id-first1",
      guidePWFirstClass: "guide-pw-first1",
      guidePWSecondClass: "guide-pw-second1",
      guidePWThirdClass: "guide-pw-third1",
      guidePWCFirstClass: "guide-pwc-first1",
      ID: "",
      PW: "",
      PWConfirm: "",
      name: "",
      year: "",
      month: "",
      day: "",
      email: "",
      cellPhone: "",
      address: "경기도 화성시 동탄순환대로 20길",
      sex: "",
      birthYear: "",
      birthMonth: "",
      birthDay: "",
      birth: "",
      necessary1: "",
      necessary2: "",
      necessary3: "",
      necessaryAll: "",
      again: false,
      infoChecked: false
    };
  }
  IDPopup = () => {
    this.setState({
      IDFocusMode: true
    });
  };
  PWPopup = () => {
    this.setState({
      PWFocusMode: true
    });
  };
  PWConfirmPopup = () => {
    this.setState({
      PWConfirmFocusMode: true
    });
  };
  handleID = e => {
    this.setState({
      ID: e.target.value
    });
    // console.log(e.target.value);
    // console.log(e.target.value.length);
    if (e.target.value.length < 6) {
      this.setState({
        guideIDFirstClass: "guide-id-first2"
      });
    } else if (e.target.value.length >= 6) {
      this.setState({
        guideIDFirstClass: "guide-id-first3"
      });
    }
    console.log(e.target.value);
  };
  handlePW = e => {
    this.setState({
      PW: e.target.value
    });
    if (e.target.value.length >= 10) {
      this.setState({
        guidePWFirstClass: "guide-pw-first2"
      });
    } else {
      this.setState({
        guidePWFirstClass: "guide-pw-first1"
      });
    }

    let check_num = /[0-9]/;
    let check_eng = /[a-zA-Z]/;
    let check_spc = /[~!@#$%^&*()_+|<>?:{}]/;
    // let check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; 한글체크
    if (
      (check_num.test(e.target.value) && check_eng.test(e.target.value)) ||
      (check_eng.test(e.target.value) && check_spc.test(e.target.value)) ||
      (check_spc.test(e.target.value) && check_num.test(e.target.value))
    ) {
      this.setState({
        guidePWSecondClass: "guide-pw-second2"
      });
    } else {
      this.setState({
        guidePWSecondClass: "guide-pw-second1"
      });
    }

    if (/(\d)\1\1/.test(e.target.value)) {
      this.setState({
        guidePWThirdClass: "guide-pw-third2"
      });
    } else {
      this.setState({
        guidePWThirdClass: "guide-pw-third1"
      });
    }

    console.log(e.target.value);
  };
  handlePWConfirm = e => {
    this.setState({
      PWConfirm: e.target.value
    });
    if (this.state.PW === e.target.value) {
      this.setState({
        guidePWCFirstClass: "guide-pwc-first2"
      });
    }
    console.log(e.target.value);
  };

  handleName = e => {
    this.setState({
      name: e.target.value
    });
    console.log(e.target.value);
  };
  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
    console.log(e.target.value);
  };
  handleCellPhone = e => {
    this.setState({
      cellPhone: e.target.value
    });
    console.log(e.target.value);
  };
  yearLimit = e => {
    if (e.target.value <= 9999.1) {
      this.setState({
        year: e.target.value
      });
    }
    console.log("year는 ", e.target.value);
  };
  monthLimit = e => {
    if (e.target.value <= 99.1) {
      this.setState({
        month: e.target.value
      });
    }
    console.log("month는 ", e.target.value);
  };
  dayLimit = e => {
    if (e.target.value <= 99.1) {
      this.setState(
        {
          day: e.target.value,
          birth:
            (this.state.year + "" + this.state.month + "" + e.target.value) * 1
        },
        () => {
          console.log("this.state.birth는 ", this.state.birth);
          //콜백함수로 콘솔확인
        }
      );
    }
    console.log("day는 ", e.target.value);
  };
  man = () => {
    let sexBullion = document.getElementsByName("sexBullion");
    console.log(sexBullion[0]);
    if (sexBullion[0].checked === true) {
      this.setState(
        {
          sex: sexBullion[0].value
        },
        () => {
          console.log("this.state.sex는 ", this.state.sex);
          //콜백함수로 콘솔확인
        }
      );
    }
  };
  woman = () => {
    let sexBullion = document.getElementsByName("sexBullion");
    if (sexBullion[1].checked === true) {
      this.setState(
        {
          sex: sexBullion[1].value
        },
        () => {
          console.log("this.state.sex는 ", this.state.sex);
          //콜백함수로 콘솔확인
        }
      );
    }
  };
  nothing = () => {
    let sexBullion = document.getElementsByName("sexBullion");
    if (sexBullion[2].checked === true) {
      this.setState(
        {
          sex: sexBullion[2].value
        },
        () => {
          console.log("this.state.sex는 ", this.state.sex);
          //콜백함수로 콘솔확인
        }
      );
    }
  };
  necessary1 = () => {
    let nece1 = document.getElementsByClassName("nece1");
    console.log(nece1[0]);
    if (nece1[0].checked === true) {
      this.setState(
        {
          necessary1: true
        },
        () => {
          console.log("필수약관동의1", this.state.necessary1);
        }
      );
    } else {
      this.setState(
        {
          necessary1: false
        },
        () => {
          console.log("필수약관동의1", this.state.necessary1);
        }
      );
    }
    if (
      this.state.necessary1 === true &&
      this.state.necessary2 === true &&
      this.state.necessary3 === true
    ) {
      this.setState(
        {
          necessaryAll: true
        },
        () => {
          console.log("necessaryAll은 ", this.state.necessaryAll);
        }
      );
    } else {
      this.setState(
        {
          necessaryAll: false
        },
        () => {
          console.log("necessaryAll은 ", this.state.necessaryAll);
        }
      );
    }
  };
  necessary2 = () => {
    let nece2 = document.getElementsByClassName("nece2");
    console.log(nece2[0]);
    if (nece2[0].checked === true) {
      this.setState(
        {
          necessary2: true
        },
        () => {
          console.log("필수약관동의2", this.state.necessary2);
        }
      );
    } else {
      this.setState(
        {
          necessary2: false
        },
        () => {
          console.log("필수약관동의2", this.state.necessary2);
        }
      );
    }
    if (
      this.state.necessary1 === true &&
      this.state.necessary2 === true &&
      this.state.necessary3 === true
    ) {
      this.setState(
        {
          necessaryAll: true
        },
        () => {
          console.log("necessaryAll은 ", this.state.necessaryAll);
        }
      );
    } else {
      this.setState(
        {
          necessaryAll: false
        },
        () => {
          console.log("necessaryAll은 ", this.state.necessaryAll);
        }
      );
    }
  };
  necessary3 = () => {
    let nece3 = document.getElementsByClassName("nece3");
    console.log(nece3[0]);
    if (nece3[0].checked === true) {
      this.setState(
        {
          necessary3: true
        },
        () => {
          console.log("필수약관동의3", this.state.necessary3);
        }
      );
    } else {
      this.setState(
        {
          necessary3: false
        },
        () => {
          console.log("필수약관동의3", this.state.necessary3);
        }
      );
    }
    if (
      this.state.necessary1 === true &&
      this.state.necessary2 === true &&
      this.state.necessary3 === true
    ) {
      this.setState(
        {
          necessaryAll: true
        },
        () => {
          console.log("necessaryAll은 ", this.state.necessaryAll);
        }
      );
    } else {
      this.setState(
        {
          necessaryAll: false
        },
        () => {
          console.log("necessaryAll은 ", this.state.necessaryAll);
        }
      );
    }
  };
  neceAll = () => {
    if (
      this.state.necessary1 === true &&
      this.state.necessary2 === true &&
      this.state.necessary3 === true
    ) {
      this.setState(
        {
          necessaryAll: true
        },
        () => {
          console.log("necessaryAll은 ", this.state.necessaryAll);
        }
      );
    } else {
      this.setState(
        {
          necessaryAll: false
        },
        () => {
          console.log("necessaryAll은 ", this.state.necessaryAll);
        }
      );
    }
  };
  joinFetch = () => {
    fetch("http://10.58.7.245:8000/users/sign-up", {
      method: "POST",
      body: JSON.stringify({
        account: this.state.ID,
        password: this.state.PW,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.cellPhone,
        gender: this.state.sex,
        birthday: this.state.birth,
        address: this.state.address
      })
    })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          alert("가입되었습니다!");
          this.props.history.push("/joincomplete");
        } else {
          alert("다시 시도하여 주십시오!");
        }
        console.log(response.data);
        return response;
      })
      .then(response => {});

    console.log("account는", this.state.ID);
    console.log("password는", this.state.PW);
    console.log("name는", this.state.name);
    console.log("email는", this.state.email);
    console.log("phone는", this.state.cellPhone);
    console.log("gender는", this.state.sex);
    console.log("birthday는", this.state.birth);
    console.log("address는", this.state.address);
  };
  IDDuplication = () => {
    fetch("http://10.58.7.245:8000/users/check-account", {
      method: "POST",
      body: JSON.stringify({
        account: this.state.ID
      })
    })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          alert("사용할수 있는 ID입니다!");
        } else {
          alert("사용할수 없는 ID입니다!");
        }
        console.log(response.data);
        return response;
      })
      .then(response => {});
  };

  emailDuplication = () => {
    fetch("http://10.58.7.245:8000/users/check-email", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email
      })
    })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          alert("사용할수 있는 이메일입니다!");
        } else {
          alert("사용할수 없는 이메일입니다!");
        }
        console.log(response.data);
        return response;
      })
      .then(response => {});
    console.log("email 중복확인 ", this.state.ID);
  };
  goHome = () => {
    this.props.history.push("/");
  };
  goJoinComplete = () => {
    this.props.history.push("/joincomplete");
  };
  infoCheck = () => {
    let infoShare = document.getElementsByClassName("info-share");
    console.log(infoShare[0]);
    if (infoShare[0].checked === true) {
      this.setState({
        infoChecked: true
      });
    } else {
      this.setState({
        infoChecked: false
      });
    }
  };

  render() {
    return (
      <form action="#">
        <Nav />
        <div className="join-start">
          <div className="contents">
            <div className="page-location">
              <div className="homeMenu" onClick={this.goHome}>
                홈
              </div>
              <span className="page-symbol"> > </span>
              <strong>회원가입</strong>
            </div>

            <div className="page-article2">
              <div className="head-section">
                <h2 className="join-title">회원가입</h2>
              </div>
              <div className="head-notification1">
                <p>*필수입력사항</p>
              </div>
              <div className="write-board2">
                <div className="ghost-tr"></div>
                <table>
                  <tbody>
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
                            onFocus={this.IDPopup}
                            onChange={this.handleID}
                            value={this.state.ID}
                            required
                          ></input>
                          <div
                            className="normal-button colbutton"
                            onClick={this.IDDuplication}
                          >
                            중복확인
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* 상황연산자1 */}
                {this.state.IDFocusMode === true ? (
                  <table>
                    <tbody>
                      <tr className="guide-tr">
                        <td className="give-number col1"></td>
                        <td className="give-number col2">
                          <div className="col2-2">
                            <div className="guide-box">
                              <div className={this.state.guideIDFirstClass}>
                                6자 이상의 영문 혹은 영문과 숫자를 조합
                              </div>
                              <div className="guide-id-second">
                                아이디 중복확인
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}

                <table>
                  <tbody>
                    <tr>
                      <td className="pw-write col1">비밀번호*</td>
                      <td className="pw-write col2">
                        <input
                          className="typing"
                          type="password"
                          placeholder="비밀번호를 입력해주세요"
                          onFocus={this.PWPopup}
                          onChange={this.handlePW}
                          value={this.state.PW}
                          required
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {this.state.PWFocusMode === true ? (
                  <table>
                    <tbody>
                      <tr className="guide-tr">
                        <td className="give-number col1"></td>
                        <td className="give-number col2">
                          <div className="col2-2">
                            <div className="guide-box">
                              <div className={this.state.guidePWFirstClass}>
                                10자 이상 입력
                              </div>
                              <div className={this.state.guidePWSecondClass}>
                                영문/숫자/특수문자(공백제외)만 허용하며, 2개이상
                                조합
                              </div>
                              <div className={this.state.guidePWThirdClass}>
                                동일한 숫자 3개 이상 연속 사용 불가
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}
                <table>
                  <tbody>
                    <tr>
                      <td className="pw-confirm col1">비밀번호확인*</td>
                      <td className="pw-confirm col2">
                        <input
                          className="typing"
                          type="password"
                          placeholder="비밀번호를 한번 더 입력해주세요"
                          onFocus={this.PWConfirmPopup}
                          onChange={this.handlePWConfirm}
                          value={this.state.PWConfirm}
                          required
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {this.state.PWConfirmFocusMode === true ? (
                  <table>
                    <tbody>
                      <tr className="guide-tr-pwc">
                        <td className="give-number col1"></td>
                        <td className="give-number col2-pwc">
                          <div className="col2-2">
                            <div className="guide-box">
                              <div className={this.state.guidePWCFirstClass}>
                                동일한 비밀번호를 입력해주세요
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}
                <table>
                  <tbody>
                    <tr>
                      <td className="name col1">이름*</td>
                      <td className="name col2">
                        <input
                          className="typing"
                          type="text"
                          placeholder="고객님의 이름을 입력해주세요"
                          onChange={this.handleName}
                          value={this.state.Name}
                          required
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td className="email col1">이메일*</td>
                      <td className="email col2">
                        <div className="col2-2">
                          <input
                            className="typing"
                            type="text"
                            placeholder="예: marketkurly@kurly.com"
                            onChange={this.handleEmail}
                            required
                          ></input>
                          <div
                            className="normal-button colbutton"
                            onClick={this.emailDuplication}
                          >
                            이메일 중복확인
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td className="cell col1">휴대폰*</td>
                      <td className="cell col2">
                        <div className="col2-2">
                          <input
                            className="typing"
                            type="number"
                            placeholder="숫자만 입력해주세요"
                            onChange={this.handleCellPhone}
                            required
                          ></input>
                          <div className="normal-button-gray colbutton">
                            인증번호받기
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td className="give-number col1"></td>
                      <td className="give-number col2">
                        <div className="col2-2">
                          <input
                            className="typing"
                            type="text"
                            onChange={this.handleCellPhone}
                          ></input>
                          <div className="normal-button-white colbutton">
                            인증번호 확인
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td className="address2 col1">배송주소</td>
                      <td>
                        <div className="col2-2">
                          <div className="normal-button address">
                            <img
                              className="dotbogi"
                              src="http://drive.google.com/uc?export=view&id=15ckyyBIcZTccgf0DppAKqaj3idKyCoya"
                              alt=""
                            />
                            <span>주소 검색</span>
                          </div>
                        </div>
                        <p className="address-hint">
                          배송가능여부를 확인할수 있습니다.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td className="sex col1">성별</td>
                      <td className="sex col2">
                        <label className="label-radio">
                          <input
                            className="sex-bullion"
                            type="radio"
                            name="sexBullion"
                            value="남자"
                            onChange={this.man}
                          ></input>
                          <span>남자</span>
                        </label>
                        <label className="label-radio">
                          <input
                            className="sex-bullion"
                            type="radio"
                            name="sexBullion"
                            value="여자"
                            onChange={this.woman}
                          ></input>
                          <span>여자</span>
                        </label>
                        <label className="label-radio">
                          <input
                            className="sex-bullion"
                            type="radio"
                            name="sexBullion"
                            value="선택안함"
                            onChange={this.nothing}
                          ></input>
                          <span>선택안함</span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr className="birth-tr">
                      <td className="birth col1">생년월일</td>
                      <td>
                        <div className="birth col2">
                          <div className="birth-inputs col2">
                            <input
                              className="birth-input year"
                              placeholder="YYYY"
                              type="number"
                              maxLength="4"
                              onChange={this.yearLimit}
                              value={this.state.year}
                            ></input>
                            <span>/</span>
                            <input
                              className="birth-input month"
                              placeholder="MM"
                              maxLength="2"
                              onChange={this.monthLimit}
                              value={this.state.month}
                            ></input>
                            <span>/</span>
                            <input
                              className="birth-input day"
                              placeholder="DD"
                              maxLength="4"
                              onChange={this.dayLimit}
                              value={this.state.day}
                            ></input>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr className="ghost-tr">
                      <td className="birth col1"></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
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
                  </tbody>
                </table>
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
                    <span className="agree-explanation" onClick={this.allAgree}>
                      전체동의
                    </span>
                  </label>
                </div>
                <div className="agree-body">
                  <div className="agree-body-line">
                    <label>
                      <input
                        className="nece1"
                        type="checkbox"
                        onChange={this.necessary1}
                        required
                      ></input>
                      <span className="agree-explanation">
                        이용약관
                        <span className="agree-gray-guide">(필수)</span>
                      </span>
                      <div className="clasuse">약관보기></div>
                    </label>
                  </div>
                  <div className="agree-body-line">
                    <label>
                      <input
                        className="nece2"
                        type="checkbox"
                        onChange={this.necessary2}
                        required
                      ></input>
                      <span className="agree-explanation">
                        개인정보처리방침
                        <span className="agree-gray-guide">(필수)</span>
                      </span>
                      <div className="clasuse">약관보기></div>
                    </label>
                  </div>
                  <div className="agree-body-line">
                    <label>
                      <input type="checkbox"></input>
                      <span className="agree-explanation">
                        개인정보처리방침
                        <span className="agree-gray-guide">(선택)</span>
                      </span>
                      <div className="clasuse">약관보기></div>
                    </label>
                  </div>
                  <div className="agree-body-line">
                    <label>
                      <input
                        type="checkbox"
                        className="info-share"
                        onClick={this.infoCheck}
                      ></input>
                      <span className="agree-explanation">
                        무료배송, 할인쿠폰 등 혜택/정보 수신
                        <span className="agree-gray-guide">(선택)</span>
                      </span>
                    </label>

                    <div className="subscription">
                      <div className="subscript-detail">
                        <label>
                          <input
                            type="checkbox"
                            className="info-share"
                            // checked={this.state.infoChecked}
                          ></input>
                          <span className="agree-explanation">SMS</span>
                        </label>

                        <label>
                          <input
                            type="checkbox"
                            className="info-share"
                            // checked={this.state.infoChecked}
                          ></input>
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
                      <input
                        className="nece3"
                        type="checkbox"
                        onChange={this.necessary3}
                        required
                      ></input>
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
                <button
                  type="button"
                  className="final-button-join"
                  onClick={this.joinFetch}
                >
                  가입하기
                </button>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <Footer />
      </form>
    );
  }
}
export default Join;
