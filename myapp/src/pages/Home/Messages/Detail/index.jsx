import React, { Component } from "react";
// import qs from "querystring";

const DetailObj = [
  {
    id: "001",
    content: "将热爱做到极致",
  },
  {
    id: "002",
    content: "陪你走天下",
  },
  {
    id: "003",
    content: "我想带一人 回云深不知处 藏起来",
  }
  
];

export default class Detail extends Component {
  
  render() {
      // 方法一 params
    console.log("传过来的值")
    console.log(this.props);
    const { id, title } = this.props.match.params
    console.log(id+'  '+title)
    const findResultObj = DetailObj.find((detailItem) => {
      return detailItem.id === id;
    });
     return (
      <div>
        <h5>id:{id}</h5>
        <h5>title:{title}</h5>
        <h5>content:{findResultObj.content}</h5>
        
      </div>
    );


    // 方法二 search  不帮忙加工为对象 需要自己进行处理
    // console.log("传过来的值")
    // console.log(this.props);
    // const {search} = this.props.location
    // const {id,title} = qs.parse(search.slice(1))
    // const findResultObj = DetailObj.find((detailItem) => {
    //     return detailItem.id === id
    // })
    // return (
    //     <div>
    //         <h5>id:{id}</h5>
    //         <h5>title:{title}</h5>
    //         <h5>content:{findResultObj.content}</h5>
    //     </div>
    // )
    // 方法三 state
    // console.log("传过来的值");
    // console.log(this.props);
    // const { id, title } = this.props.location.state;
    // const findResultObj = DetailObj.find((detailItem) => {
    //   return detailItem.id === id;
    // });
    // return (
    //   <div>
    //     <h5>id:{id}</h5>
    //     <h5>title:{title}</h5>
    //     <h5>content:{findResultObj.content}</h5>
    //   </div>
    // );
  }
}
