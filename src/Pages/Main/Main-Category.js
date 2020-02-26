import React, {Component} from 'react';
import MainItem from './Main-Item';

class MainCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mdButtonSelect: 0,
            buttonStyle: {
                border: "1px solid #5f0081",
                backgroundColor: "#5f0080",
                color: "#fff"
            }
        }
    }

    _mdClick = (idx) => {
        this.setState({
            mdButtonSelect: idx 
        });
    }

    _mdItemClick = () => {}

    render() {
        const {key, section_id, section_type, title, products, categories} = this.props
        
        const productsArr = products
            ? products.map((param, idx) => { return <MainItem
                key={idx}
                cN="products-item"
                no={param['no']}
                name={param['name']}
                price={param['price']}
                original_price={param['original_price']}
                thumbnail_image_url={param['thumbnail_image_url']}
                sticker_image_url={param['sticker_image_url']} />})
            : null

        const categoryList = categories
            ? categories.map((param, idx) => {return <button
                key={idx} style={(idx === this.state.mdButtonSelect)
                    ? this.state.buttonStyle
                    : null }
                className="md-cate-button"
                onClick={() => this._mdClick(idx)}>{param['name']}</button> })
            : null

        return(
            <div className={section_id}
                style={{width: "1050px"}}>
                <p className="main-font">{title}</p>
                {title === 'MD의 추천'
                    ? <div className="md-cate-div">{categoryList}</div>
                    : null
                }
                <ul className="goods-item">
                    {productsArr}
                </ul>
            </div>
        );
    }
}

export default MainCategory;