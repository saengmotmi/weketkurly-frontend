import React, {Component} from 'react';

class MainItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const {key, no, name, price, original_price,
            thumbnail_image_url, sticker_image_url, cN} = this.props

        return(
            <li className={cN}>
                <div style={{position: "relative"}}>
                    {price !== original_price
                        ? <div className="sale-box">
                            <p style={{fontSize: "13px"}}>SAVE</p>
                            <p><span>{100 - (price / original_price) * 100}</span>%</p>
                        </div>
                        : null
                    }                    
                    <img src={thumbnail_image_url} alt="goods" />
                </div>
                <div style={{wordBreak: "break-all"}}>
                    <p>{name}</p>
                    <p style={{fontWeight: "bold"}}>{this.numberWithCommas(price)}원</p>
                    { price === original_price 
                        ? null
                        : <p style={{textDecoration: "line-through", color: "#ccc"}}>{this.numberWithCommas(original_price)}원</p>
                    }
                </div>
            </li>
        );
    }
}

export default MainItem;