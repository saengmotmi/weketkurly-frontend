import React, {Component} from 'react'
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';
import MainCategory from './Main-Category';
import './Main.scss'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount = () => {
        fetch('https://api.kurly.com/v2/home/recommendation') //API 주소
        .then((res) => { return res.json() })
        .then((res) => this.setState({
            data: res.data['section_list'].filter(item => item !== undefined
        )}));
    }

    render() {
        const mainCateList = this.state.data.length === 0
            ? null
            : this.state.data.map((param, idx) => { return <MainCategory
                key={idx}
                section_id={param['section_id']}
                section_type={param['section_type']}
                title={param['title']}
                products={param['products']}
                categories={param['categories']} /> // 배열
        });

        return(
            <div>
                {console.log(this.state.data)}
                <Nav />
                <main>
                    <img src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1582274479.jpg" alt="" />
                    <p>메인 이미지 슬라이드</p>
                    {mainCateList}
                    <img className="img-bottom"
                        src="https://img-cf.kurly.com/shop/data/main/15/pc_img_1568875999.png" alt="" />
                </main>
                <Footer />
            </div>
        );
    }
}

export default Main;