import React, {Component} from 'react'
import Nav from '../../Components/Nav'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slideStyle: {
                width: "100px",
                height: "auto"
            },
            mainSlideData: [
                {backgroundImage:"url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1580447940.jpg)", width: "1900px", height: "370px", position: "absolute", display: "block"},
                {backgroundImage:"url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1582282408.jpg)", width: "1900px", height: "370px", position: "absolute", display: "none"},
                {backgroundImage:"url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1582103250.jpg)", width: "1900px", height: "370px", position: "absolute", display: "none"},
                {backgroundImage:"url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1582009582.jpg)", width: "1900px", height: "370px", position: "absolute", display: "none"},
                {backgroundImage:"url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1581925303.jpg)", width: "1900px", height: "370px", position: "absolute", display: "none"},
                {backgroundImage:"url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1581671914.jpg)", width: "1900px", height: "370px", position: "absolute", display: "none"},
                {backgroundImage:"url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1580262479.jpg)", width: "1900px", height: "370px", position: "absolute", display: "none"},
                {backgroundImage:"url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1569230790.jpg)", width: "1900px", height: "370px", position: "absolute", display: "none"},
                {backgroundImage:"url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1580465698.jpg)", width: "1900px", height: "370px", position: "absolute", display: "none"},
                {backgroundImage:"url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1580376394.jpg)", width: "1900px", height: "370px", position: "absolute", display: "none"},
                {backgroundImage:"url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1581302984.jpg)", width: "1900px", height: "370px", position: "absolute", display: "none"}
            ]
        }
    }

    // componentDidMount() {
    //     setInterval(() => {
    //         console.log('in');
    //         for (let i=0; i < this.state.mainSlideData.length; i++) {
    //             console.log(i, this.state.mainSlideData[i].display);
    //             console.log(this);
    //             this.setState({mainSlideData: this.state.mainSlideData.filter((param) => param['display'] !== 'block')}); // [a.target.id]: value <- 객체에 키값으로 접근하는 방법
    //             this.setState({mainSlideData: this.state.mainSlideData.concat({a: 'b'})});
    //             console.log(this.state.mainSlideData);
    //         }
    //     }, 1000)
    // }

    render() {
        const mainSlideList = this.state.mainSlideData.map((param, idx) => { return (
            <div key={idx} style={param} />
        )});

        return(
            <Main>
                {console.log('in')}
                <Nav />
                <div className="main-slide" style={this.state.slideStyle}>
                    {mainSlideList}
                </div>
                <div>
                    <span>이 상품 어때요?</span>
                    <div>
                        <img src="https://img-cf.kurly.com/shop/data/goods/1562566197539l0.jpg" alt="메이플 시럽"/>
                    </div>
                </div>
            </Main>
        );
    }
}

export default Main;