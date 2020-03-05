import React, { Component } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import "./JoinComplete.scss";

class JoinComplete extends Component {
  constructor() {
    super();
    this.state = {
      ID: "",
      PW: ""
    };
  }
  goHome = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="JoinComplete">
          <div className="outer">
            <div className="member-join-complete">
              <div className="complete-contents">
                <div className="roof">
                  <p className="notification">회원가입이 완료되었습니다.</p>
                </div>
                <div>
                  <div className="info-line">
                    <div className="col1">아이디</div>
                    <div className="col2">sangjin42</div>
                  </div>
                  <div className="info-line">
                    <div className="col1">이름</div>
                    <div className="col2">안상진</div>
                  </div>
                  <div className="info-line">
                    <div className="col1">이메일</div>
                    <div className="col2">sangjin42@naver.com</div>
                  </div>
                  <div className="bottom-button-box">
                    <button className="left-button">
                      <div className="benefit">
                        신규 혜택 100원 상품 보러가기
                      </div>
                    </button>
                    <button className="right-button">
                      <div onClick={this.goHome}>마이페이지로 이동</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default JoinComplete;
