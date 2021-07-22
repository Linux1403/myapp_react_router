import React, { Component } from "react";
// 或者这里引入Purecomponent 这样就不用自己写shouldComponentUpdate了
//因为自己写的话 可能会有传很多个值的情况 这样判断就比较麻烦
import "./index.css";

export default class Optimistic extends Component {
  state = {
    name: "王一博",
    // age:23
  };
  Yang = () => {
    this.setState({
      name:'王一博'
    //   age:29
    });
  };
  shouldComponentUpdate=(nextProps,nextState)=>{
  console.log("这里是王一博的shouldComponentupdate")
  console.log(this.state,this.props)
  console.log(nextState,nextProps)
  if(this.state.name!==nextState.name) return true
  else return false
 
  }
  render() {
    const { name } = this.state;
    console.log("王一博的render");
    return (
      <div className="parent">
        <h2>最可爱的人---{name}---</h2>
        <button onClick={this.Yang}>杨洋呢</button>
        <br></br>
        <Yang name={name}></Yang>
      </div>
    );
  }
}

class Yang extends Component {
 
  render() {
    console.log("杨洋的render");
    const { name } = this.props;
    return (
      <div className="child">
        <h2>最可爱的人---{name}--</h2>
      </div>
    );
  }
}
