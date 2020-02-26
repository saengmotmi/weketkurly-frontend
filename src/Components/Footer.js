import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {


    render() {
        return(
            <footer>
                <div className="footer-top">
                    <div className="footer-top-left">
                        <span><b>고객행복센터</b></span>
                        <div className="custom">
                            <h3>1644-1107</h3>
                            <div>
                                <p>365고객센터</p>
                                <p>오전7시 - 오후7시</p>
                            </div>
                        </div>
                        <div className="custom">
                            <h3>카카오톡 문의</h3>
                            <div>
                                <p>365고객센터</p>
                                <p>오전7시 - 오후7시</p>
                            </div>
                        </div>
                        <div className="custom">
                            <h3>1:1 문의</h3>
                            <div>
                                <p>24시간 접수 가능</p>
                                <p>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top-right">
                        <ul>
                            <li>컬리소개</li>
                            <li>컬리소개영상</li>
                            <li>인재채용</li>
                            <li>이용약관</li>
                            <li><b>개인정보처리방침</b></li>
                            <li>이용안내</li>
                        </ul>
                        <ul>
                            <li>법인명(상호) : 주식회사 컬리</li>
                            <li> 사업자등록번호 : 261-81-23567 사업자 정보 확인</li><br />
                            <li>통신판매업 : 제 2018-서울강남-01646호</li>
                            <li>개인정보보호책임자 : 이지훈</li><br />
                            <li>주소 : 서울시 도산대로 16길 20, 이래빌딩 B1 ~ 4F</li>
                            <li>대표이사 : 김슬아</li><br />
                            <li>입점문의 : 입점문의하기</li>
                            <li>제휴문의 : business@kurlycorp.com</li><br />
                            <li>채용문의 : recruit@kurlycorp.com</li><br />
                            <li>팩스: 070 - 7500 - 6098</li>
                            <li>이메일 : help@kurlycorp.com</li><br />
                            <li>© KURLY CORP. ALL RIGHTS RESERVED</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div>
                        <div className="footer-bottom-auth">
                            <img src="" alt="인증마크" />
                            <p>[인증범위] 마켓컬리 쇼핑몰 서비스 개발 · 운영</p>
                            <p>[유효기간] 2019.04.01 ~ 2022.03.31</p>
                        </div>
                        <div>
                            <img src="" alt="LGU+" />
                            <p>고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한</p>
                            <p>LG U+ 구매안전(에스크로) 서비스를 이용하실 수 있습니다. 서비스 가입사실 확인</p>
                        </div>
                    </div>
                    <div className="footer-bottom-sns">
                        <ul>
                            <li>
                                <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="instagram" />
                            </li>
                            <li>
                                <img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="facebook" />
                            </li>
                            <li>
                                <img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="naver blog" />
                            </li>
                            <li>
                                <img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="naver post" />
                            </li>
                            <li>
                                <img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="youtube" />
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;