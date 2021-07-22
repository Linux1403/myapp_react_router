import React, { Component } from "react";
import "./index.css";
import Count from "../Count";
import PubSub from "pubsub-js";

export default class index extends Component {
  state = {
    hasError: false,
  };

  // 经过打包 才能正常使用
  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true,
    };
  }
  componentDidCatch() {
    console.log("组件出错");
  }
  render() {
    return (
      <div className="parent">
        <h2>王一博</h2>
        {/* <A render={(motto)=>{return <Count motto={motto}></Count>}}>  </A> */}
        {this.state.hasError ? (
          <h2>网络不稳</h2>
        ) : (
          <A
            render={(motto) => {
              return <Count motto={motto}></Count>;
            }}
          ></A>
        )}
        <A></A>
        <Yang></Yang>
      </div>
    );
  }
}

class A extends Component {
  state = {
    motto: "做一个对于社会有用的人",
    // stu:'putao'
    stu: [
      { id: "111", name: "苹果" },
      { id: "222", name: "香蕉" },
    ],
  };
  message = () => {
    PubSub.publish("greet", "小可爱 你好");
  };

  render() {
    // const { motto } = this.state;
    return (
      <div className="child">
        <h2>坚持将热爱做到极致</h2>
        {/* 有点相当于Vue的插槽 */}
        {/* {this.props.render(motto)} */}
        {this.state.stu.map((stuObj) => {
          return <li key={stuObj.id}>水果：{stuObj.name}</li>;
        })}
        <button onClick={this.message}>收到消息</button>
      </div>
    );
  }
}

class Yang extends Component {
  state = {
    greet: "",
  };
  // 组件挂在完成之后 进行订阅
  componentDidMount() {
    this.token = PubSub.subscribe("greet", (msg, data) => {
      console.log("杨洋");
      console.log(msg, data);
      this.setState({
        greet: data,
      });
    });
  }
  // 组件写在之前取消订阅
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    return (
      <div className="child">
        <h2>{this.state.greet}</h2>
      </div>
    );
  }
}
