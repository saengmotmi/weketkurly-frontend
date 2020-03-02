import React, { Component } from "react";
import "./ItemCart.scss";

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0,
      itemCount: 0,
      data: {
        products: [
          {
            no: "48808",
            name: "[우주] 지중해산 참다랑어 오도로 200g(냉동)",
            ea: 1,
            min_ea: 1,
            max_ea: 999,
            original_price: 23500,
            price: 23500,
            point: 0,
            sale_type: 0,
            sold_out: false,
            additional_information: "",
            tags: { star_delivery: false, names: [], types: [] },
            star_delivery: false,
            names: [],
            types: [],
            is_pet: false,
            thumbnail_image_url:
              "https://img-cf.kurly.com/shop/data/goods/1582077878844i0.jpg",
            is_package: false,
            products: null
          },
          {
            no: "48807",
            name: "[우주] 지중해산 참다랑어 배꼽살 200g(냉동)",
            ea: 1,
            min_ea: 1,
            max_ea: 999,
            original_price: 27500,
            price: 27500,
            point: 0,
            sale_type: 0,
            sold_out: false,
            additional_information: "",
            tags: { star_delivery: false, names: [], types: [] },
            star_delivery: false,
            names: [],
            types: [],
            is_pet: false,
            thumbnail_image_url:
              "https://img-cf.kurly.com/shop/data/goods/1582078436554i0.jpg",
            is_package: false,
            products: null
          }
        ],
        delivery_fee: 3000,
        delivery_fee_point: 0,
        free_shipping_condition: 40000,
        kurly_pass_use_type: "N",
        header_message:
          "‘입금확인’ 상태일 때는 주문내역 상세 페이지에서 직접 주문취소가 가능합니다.↵‘입금확인’ 이후 상태에는 고객행복센터로 문의해주세요.",
        footer_message: "",
        product_changed_message: "",
        product_changed_message_type: 0,
        free_shipping_products: ["3056", "3057"],
        is_member_dc: false
      }
    };
  }

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  componentDidMount() {}

  render() {
    const itemProductArr =
      this.state.data.products !== 0 ? (
        this.state.data.products.map((param, idx) => {
          return (
            <tr
              key={idx}
              className="item-table-row"
              style={{ borderBottom: "2px solid #ddd" }}
            >
              <td align="left">
                <label>
                  <input type="checkbox" />
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
                  <button style={{ borderRight: "1px solid #ddd" }}>-</button>
                  <span>{param["ea"]}</span>
                  <button style={{ borderLeft: "1px solid #ddd" }}>+</button>
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
        <button
          onClick={() => {
            for (let i = 0; i < 10; i++) {
              this.setState(
                {
                  [i % 5]: this.state[i % 5] ? this.state[i % 5] + 1 : 1
                },
                () => {
                  console.log(i, i % 5, this.state);
                }
              );
            }
          }}
        >
          test
        </button>
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
              <td style={{ width: "375px" }}>
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

export default ItemCart;
