import React from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Components/Layout/Nav";
import Footer from "../../Components/Layout/Footer";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      ID: "",
      PW: ""
    };
  }
  handleID = e => {
    this.setState({
      ID: e.target.value
    });
    console.log(e.target.value);
  };
  handlePW = e => {
    this.setState({
      PW: e.target.value
    });
    console.log(e.target.value);
  };
  loginFetch = () => {
    fetch("http://10.58.2.245:8000/users/sign-in", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        account: this.state.ID,
        password: this.state.PW
      })
    })
      .then(response => {
        // console.log(response);
        // console.log(response.status);
        if (response.status === 200) {
          alert("정상 로그인 되었습니다");
          console.log(response);

          this.props.history.push("/");
        } else {
          console.log(this.props);
          alert("아이디 또는 비밀번호 오류입니다!");
          console.log(response);
          // this.props.history.push("/login");
        }
        return response.json;
        //response.json으로 하면 에러나서 json을 없애버림. 그런데 갑자기 붙여도 됨.
      })
      .then(response => {
        if (response.token) {
          localStorage.setItem("wetoken", response.token);
        }
      });
    //토큰이 있으면 로컬에 저장하기
    console.log(
      "account는 ",
      this.state.ID,
      "이고",
      "password는 ",
      this.state.PW
    );
  };
  goJoin = () => {
    this.props.history.push("/join");
  };
  goHome = () => {
    this.props.history.push("/");
  };
  //☞ 함수 들어갈 자리
  render() {
    //☞ 맵함수 구현할 자리
    return (
      <div>
        <Nav />
        <div className="login-outer">
          <div className="contents">
            <div className="login-top">로그인</div>
            <div className="input-area">
              <input
                className="id"
                placeholder="아이디를 입력해주세요"
                onChange={this.handleID}
              ></input>
            </div>
            <div className="input-area">
              <input
                className="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={this.handlePW}
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
              <div className="login-button" onClick={this.loginFetch}>
                로그인
              </div>
            </div>
            <div className="button">
              <div className="join-button" onClick={this.goJoin}>
                회원가입
              </div>
            </div>
          </div>
                    
        </div>{" "}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Login);
