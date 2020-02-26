import React, {Component} from 'react';

class Footer extends Component {
    constructor() {

    }


    render() {
        return(
            <footer>
                <div className="footer-top">
                    <div className="footer-top-left">
                        <span>고객행복센터</span>
                    </div>
                    <div className="footer-top-right">
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-auth">
                        <p>[인증범위] 마켓컬리 쇼핑몰 서비스 개발 · 운영</p>
                        <p>[유효기간] 2019.04.01 ~ 2022.03.31</p>
                    </div>
                    <div className="footer-bottom-sns">

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;