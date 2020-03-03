import React, { Component } from "react";
import ItemCartChild from "./ItemCartChild";
import "./ItemCart.scss";

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <>
        <ItemCartChild data={this.state.data} />
      </>
    );
  }
}

export default ItemCart;
