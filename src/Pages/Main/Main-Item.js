import React, {Component} from 'react';

class MainItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {key, no, name, price, original_price,
            thumbnail_image_url, sticker_image_url, cN} = this.props

        return(
            <li className={cN}>
                <div style={{position: "relative"}}>
                    <div className="sale-box">
                        <p style={{fontSize: "13px"}}>SAVE</p>
                        <p><span>20</span>%</p>
                    </div>
                    <img src={thumbnail_image_url} alt="goods" />
                </div>
                <div style={{wordBreak: "break-all"}}>
                    <p>{name}</p>
                    <p style={{fontWeight: "bold"}}>{price}원</p>
                    { price === original_price 
                        ? null
                        : <p style={{textDecoration: "line-through", color: "#ccc"}}>{original_price}원</p>
                    }
                </div>
            </li>
        );
    }
}

export default MainItem;