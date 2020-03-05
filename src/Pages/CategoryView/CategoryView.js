import React from "react";
import "../CategoryView/CategoryView";
import "./CategoryView";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import CategoryViewItem from "./CategoryViewItem";
import CategorySort from "./CategorySort";
import CategoryTitle from "./CategoryTitle";
// import CategoryPage from "./CategoryPage";
import "./CategoryView.scss";
class categoryView extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data2: [],
      cateNum2: "",
      cateNum1: 907

      /* cateNum1 -> CategoryViewItem 화면이 바뀐다  */
      /* cateNum1 -> CategoryTitle, CatergorySort의 주요변수를 바꾸도록한다 */
      /* 채907~베915, 건032, 생918, 주916, 가085, 베919, 반991 */
    };
  }
  componentDidMount() {
    fetch(
      `https://api.kurly.com/v1/categories/${this.state.cateNum1}?page_limit=99&page_no=1&delivery_type=0&sort_type=0&ver=1583215455143`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ data: res.data.products });
        // console.log("위쪽콘솔 ", this.state.data);
      });
  }
  miniNavNum = pid => {
    // console.log("프로덕트아이디는", pid);
    fetch(`https://api.kurly.com/v1/category/${this.state.cateNum1}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState(
          {
            cateNum2: pid
            //여기서 cateNum2를 미니네브의 맵함수 no로 연결한다
          },
          () => {
            console.log(
              "res.data.root_category.categories는",
              res.data.root_category.categories
            );
            // console.log(e.target.name);
            console.log("this.data2", this.data2);
            console.log(this.state.cateNum2);
            this.changeProductCardList();
          }
        );
      });
  };

  changeProductCardList() {
    fetch(
      `https://api.kurly.com/v1/categories/${this.state.cateNum2}?page_limit=99&page_no=1&delivery_type=0&sort_type=0&ver=1583215455143`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ data: res.data.products });
        // console.log("위쪽콘솔 ", this.state.data);
      });
  }
  /* Nav-본문4. data 바꾸기
  해당함수를 뒤이어 실행하여, 
  바뀐 cateNum의 url로부터 data를 저장한다. 
  이 data를 통해서 상품목록페이지를 바꾸는 것이다. 
  여기까지 this.state에 바뀐 정보가 즉 바뀐 data로 저장이 되었다. 
  이것을 다시 자식 컴퍼넌트로 보내야 한다. 
  */
  //☞ 함수 들어갈 자리
  render() {
    //맵함수 들어갈 자리
    return (
      <div className="category-view">
        <Nav />
        <div className="cate-outer">
          <div className="cate-nav">
            <CategoryTitle />
            <CategorySort bridge1={this.miniNavNum} />
          </div>
          <CategoryViewItem
            bridge2={this.state.cateNum}
            bridge3={this.state.data}
            // bridge4={}
          />
          {/* <CategoryPage /> */}
        </div>
        <Footer />
      </div>
      //구현할 화면 태그 들어갈 자리
      /* Nav-본문2. 부모 태그 본문에 삽입된 컴퍼넌트의 속성 bridge1을 통해, 
      부모에 있던 함수를 실행! */
      /* Nav-본문5. 바뀐 data를 자식 컴퍼넌트에 적용시키기 위해,
      부모 태그 내에 자식컴퍼넌트의 props을 준다. bridge3 
      해당 컴퍼넌트 categoryViewItem에 props을 부여받고 바뀐데이터화면을 뿌린다.
      */
    );
  }
}
export default categoryView;
