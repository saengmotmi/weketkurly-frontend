import React, { Component } from "react";
import "./ItemCart.scss";

class ItemCart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0,
      dataProps: this.props.data,
      itemList: [
        ...this.props.data.products.map(param => {
          return {
            name: param["name"],
            price: param["price"],
            ea: param["ea"]
          };
        })
      ]
    };
  }

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  _itemCount = e => {
    if (e.target.textContent === "+") {
      const editTargetIdx = e.target.id.split(".")[0]; // number
      const editTarget = this.state.itemList[editTargetIdx]; // object

      const tempArr = [...this.state.itemList];
      const tempObj = { ...editTarget };

      tempObj.ea = tempObj.ea + 1;
      tempArr[editTargetIdx] = tempObj;

      this.setState({ itemList: tempArr }, () => {
        console.log(
          "test: ",
          editTargetIdx,
          editTarget,
          editTarget["ea"],
          this.state.itemList
        );
      });
    } else if (e.target.textContent === "-") {
      this.setState({});
    }
    // console.log(this.state.itemList);
  };

  componentDidMount() {
    this.setState({
      itemCount: this.state.dataProps.products.length
      // itemList: [...this.state.dataProps.products]
      // itemList: {
      //   ...this.state.itemList,
      //   name: this.state.dataProps.products["name"],
      //   price: this.state.dataProps.products["price"],
      //   ea: this.state.dataProps.products["ea"]
      // }
    });
  }

  render() {
    const { data } = this.props;

    console.log(this.state.itemList);

    const itemProductArr =
      data.products !== 0 ? (
        data.products.map((param, idx) => {
          return (
            <tr
              key={idx}
              className="item-table-row"
              style={{ borderBottom: "2px solid #ddd" }}
            >
              <td
                align="left"
                style={{ display: "flex", alignItems: "center" }}
              >
                <label for={"chk" + idx}>
                  <input
                    id={"chk" + idx}
                    onClick={() => console.log(this.event)}
                    checked="true"
                    type="checkbox"
                  />
                </label>
                <img src={param["thumbnail_image_url"]} alt="" />
              </td>
              <td align="left">
                <p className="item-table-row-title">{param["name"]}</p>
                <p className="item-table-row-price">
                  {this.numberWithCommas(param["price"])}원
                </p>
              </td>
              <td className="item-table-row-count">
                <div>
                  <button
                    id={`${idx}.${param["price"]}.${param["ea"]}`}
                    onClick={this._itemCount}
                    style={{ borderRight: "1px solid #ddd" }}
                  >
                    -
                  </button>
                  <span>
                    {this.state.itemList
                      ? String(this.state.itemList[idx]["ea"])
                      : null}
                  </span>
                  <button
                    id={`${idx}.${param["price"]}.${param["ea"]}`}
                    onClick={this._itemCount}
                    style={{ borderLeft: "1px solid #ddd" }}
                  >
                    +
                  </button>
                </div>
              </td>
              <td></td>
              <td>X</td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colspan="4">장바구니에 담긴 상품이 없습니다</td>
        </tr>
      );

    return (
      <div className="item">
        <div style={{ padding: "20px 40px 10px" }}></div>
        <div className="item-title">
          <p id="title">장바구니</p>
          <p id="title-desc">
            주문하실 상품명 및 수량을 정확하게 확인해 주세요.
          </p>
        </div>
        <div className="item-content">
          <table className="item-table">
            <tr className="item-table-header">
              <td
                style={{
                  width: "375px"
                }}
              >
                <label>
                  <input type="checkbox" />
                </label>
                <span>
                  전체선택({`${this.state.itemCount}/${this.state.itemCount}`})
                </span>
              </td>
              <td style={{ width: "432px" }}>
                <span>상품 정보</span>
              </td>
              <td style={{ width: "115px" }}>
                <span>수량</span>
              </td>
              <td style={{ width: "115px" }}>
                <span>상품금액</span>
              </td>
            </tr>
            {itemProductArr}
            <tr>
              <td align="left" colspan="4">
                <div className="item-wrapper-btn">
                  <label>
                    <input type="checkbox" />
                  </label>
                  <span style={{ paddingRight: "15px" }}>
                    전체선택({`${this.state.itemCount}/${this.state.itemCount}`}
                    )
                  </span>
                  <button>선택 삭제</button>
                  <button style={{ width: "120px" }}>품절 상품 삭제</button>
                </div>
              </td>
            </tr>
          </table>
          <div className="item-price">
            <div>
              <span className="item-price-desc">상품금액</span>
              <span className="item-price-price">원</span>
            </div>
            <span className="item-price-oper">-</span>
            <div>
              <span className="item-price-desc">상품할인금액</span>
              <span className="item-price-price">원</span>
            </div>
            <span className="item-price-oper">+</span>
            <div>
              <span className="item-price-desc">배송비</span>
              <span className="item-price-price">
                원<p>원 추가주문 시, 무료배송</p>
              </span>
            </div>
            <span className="item-price-oper">=</span>
            <div style={{ backgroundColor: "#f7f7f7" }}>
              <span className="item-price-desc">결제예정금액</span>
              <span className="item-price-price">원</span>
            </div>
          </div>
          <button className="order-btn btn-off">주문하기</button>
          <div className="item-bottom-desc">
            <p>
              ‘입금확인’ 상태일 때는 주문내역 상세 페이지에서 직접 주문취소가
              가능합니다.
            </p>
            <p>‘입금확인’ 이후 상태에는 고객행복센터로 문의해주세요.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCart2;
