import React, { Component } from "react";
import "./index.css";

const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;

export default class Context extends Component {
  state = {
    username: "王一博",
    age: 23,
  };
  render() {
    const { username, age } = this.state;
    return (
      <div className="parent">
        <h2>我是Context组件</h2>
        <h3>我的名字是{username}</h3>
        {/* 这里的Provider必须写value= */}
        <Provider value={{ username, age }}>
          <B></B>
        </Provider>
        {/* <B username={this.state.username}></B> */}
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h2>我是B组件</h2>
        <h3>我从Context组件得到的名字是---{}</h3>
        <C></C>
        {/* <h3>我从Context组件得到的名字是----{this.props.username}</h3> */}
        {/* <C username={this.props.username}></C> */}
      </div>
    );
  }
}

class C extends Component {
  // 必须加static
  static contextType = MyContext;
  render() {
    console.log("这里是context");
    console.log(this.context);
    return (
      <div className="grand">
        <h2>我是C组件</h2>
        {/* 这个只适用于类组件 */}
        <h3>我从Context组件的到的名字是---{this.context.username}</h3>

        {/* 这个适用于两者 */}
        <h3>名字：
          <Consumer>
              {/* 由于这里已经用{}  里边所有都算js表达式*/}
            {(value) => {
                // 这里直接返回字符串 就用模板字符串
              return `${value.username}`;
            }}
          </Consumer>
        </h3>

        {/* <h3>我从Context组件的到的名字是---{this.props.username}</h3> */}
      </div>
    );
  }
}
