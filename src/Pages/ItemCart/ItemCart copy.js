import React, { Component } from "react";
import "./ItemCart.scss";

class ItemCart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProps: this.props.data,
      priceItemAll: 0,
      itemCount: 0,
      checkedCount: 0,
      chkChecked: true,
      itemList: [
        ...this.props.data.products.map(param => {
          return {
            name: param["name"],
            price: param["price"],
            ea: param["ea"],
            max_ea: param["max_ea"],
            min_ea: param["min_ea"],
            checked: true
          };
        })
      ]
    };
  }

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  _itemCount = e => {
    const editTargetIdx = e.target.id.split(".")[0]; // number
    const editTarget = this.state.itemList[editTargetIdx]; // object

    const tempArr = [...this.state.itemList];
    const tempObj = { ...editTarget };

    if (e.target.textContent === "+" && tempObj.ea < tempObj.max_ea) {
      tempObj.ea = tempObj.ea + 1;
      tempArr[editTargetIdx] = tempObj;

      this.setState({ itemList: tempArr });
    } else if (e.target.textContent === "-" && tempObj.ea > tempObj.min_ea) {
      tempObj.ea = tempObj.ea - 1;
      tempArr[editTargetIdx] = tempObj;

      this.setState({ itemList: tempArr });
    }
  };

  _itemCheck = e => {
    const editTargetIdx = parseInt(e.target.id); // number
    const editTarget = this.state.itemList[editTargetIdx]; // object

    const tempArr = [...this.state.itemList]; // itemList 복사
    const tempObj = { ...editTarget }; // 접근할 객체 복사

    let tempChkAll = [];
    let tempAllBoolean = 1;
    let tempCheckedCount = this.state.checkedCount;

    // 개별 체크 상태 뒤집어줌
    if (tempObj.checked === true) {
      tempCheckedCount = tempCheckedCount - 1;
    } else {
      tempCheckedCount = tempCheckedCount + 1;
    }
    tempObj.checked = !tempObj.checked;
    tempArr[editTargetIdx] = tempObj;

    // 전부 체크 여부 레디 1
    const isChkAll = tempArr.map(param => {
      return tempChkAll.push(param.checked);
    });

    // 전부 체크 여부 레디 2
    for (let i of tempChkAll) {
      tempAllBoolean = Boolean(tempAllBoolean * i);
    }

    // 전부 체크 상태에서 -1 눌렸으면
    if (editTargetIdx === -1) {
      // 전체선택 체크박스인가?
      if (this.state.chkChecked === true) {
        for (let i = 0; i < tempArr.length; i++) {
          tempArr[i].checked = false;
        }
        this.setState({
          itemList: tempArr,
          chkChecked: !this.state.chkChecked,
          checkedCount: 0
        });
      } else {
        for (let i = 0; i < tempArr.length; i++) {
          tempArr[i].checked = true;
        }
        this.setState({
          itemList: tempArr,
          chkChecked: !this.state.chkChecked,
          checkedCount: this.state.itemCount
        });
      }
    } else if (editTargetIdx !== -1) {
      if (tempAllBoolean === false) {
        this.setState({
          itemList: tempArr,
          chkChecked: false,
          checkedCount: tempCheckedCount
        });
      } else {
        this.setState({
          itemList: tempArr,
          chkChecked: true,
          checkedCount: tempCheckedCount
        });
      }
    }
  };

  _priceCalc = () => {
    const tempArr = [...this.state.itemList]; // itemList 복사

    let priceResult = 0;

    for (let i of tempArr) {
      if (i.checked === true) {
        priceResult += i.ea * i.price;
      }
      // this.setState({ priceItemAll: priceResult });
    }

    return this.numberWithCommas(priceResult);
  };

  componentDidMount() {
    this.setState({
      itemCount: this.state.dataProps.products.length,
      checkedCount: this.state.dataProps.products.length
    });
  }

  render() {
    const { data } = this.props;

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
                <input
                  id={idx + "chk"}
                  onClick={this._itemCheck}
                  checked={this.state.itemList[idx].checked ? true : false}
                  type="checkbox"
                />
                <label for={idx + "chk"} />
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
              <td>
                {this.numberWithCommas(
                  this.state.itemList[idx]["ea"] *
                    this.state.itemList[idx]["price"]
                )}
              </td>
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
                <input
                  id="-1chk"
                  onClick={this._itemCheck}
                  checked={this.state.chkChecked}
                  type="checkbox"
                />
                <label for="-1chk" />
                <span>
                  전체선택(
                  {`${this.state.checkedCount}/${this.state.itemCount}`})
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
                  <input
                    id="-1chk"
                    onClick={this._itemCheck}
                    checked={this.state.chkChecked}
                    type="checkbox"
                  />
                  <label for="-1chk" />
                  <span style={{ paddingRight: "15px" }}>
                    전체선택(
                    {`${this.state.checkedCount}/${this.state.itemCount}`})
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
              <span className="item-price-price">{this._priceCalc()}원</span>
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
