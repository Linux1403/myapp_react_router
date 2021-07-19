import React, { Component } from "react";
import './index.css'
import { withRouter } from "react-router-dom";

class Header extends Component {
  forward = () => {
    this.props.history.goForward();
  };
  back = () => {
    this.props.history.goBack();
  };
  go = () => {
    this.props.history.go(2);
  };
  render() {
    console.log(this.props);
    return (
      <div className="header">
        <h1>react-router示例</h1>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.back}>后退</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}

// 将一般组件通过withrouter  可以使其成为类似路由组件
export default withRouter(Header);
