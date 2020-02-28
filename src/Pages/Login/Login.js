import React from "react";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      //☞ state값 들어갈 자리
    };
  } //☞ 함수 들어갈 자리
  render() {
    //☞ 맵함수 구현할 자리
    return (
      <div className="login-outer">
        <div className="contents">
          <div className="login-top">로그인</div>
          <div className="input-area">
            <input className="id" placeholder="아이디를 입력해주세요"></input>
          </div>
          <div className="input-area">
            <input
              className="password"
              placeholder="비밀번호를 입력해주세요"
            ></input>
          </div>
          <div className="middle-space">
            <label className="checkcheck">
              <input type="checkbox"></input>
              <div>보안접속</div>
            </label>
            <div>
              <div className="finding">
                <span>아이디찾기</span>
                <span className="line"></span>
                <span>비밀번호찾기</span>
              </div>
            </div>
          </div>
          <div className="button">
            <div className="login-button">로그인</div>
          </div>
          <div className="button">
            <div className="join-button">회원가입</div>
          </div>
        </div>
                  
      </div> //구현할 화면 태그 들어갈 자리
    );
  }
}

export default Login;
