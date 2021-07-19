import React, { Component } from "react";
import "./index.css";
import News from "./News";
import Messages from "./Messages";
import MyLink from "../../components/MyLInk";
import { Switch, Route, Redirect } from "react-router-dom";

export default class About extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>我是首页内容</h2>
        <div className="nav">
          <MyLink className="navLink" to="/home/news">
            news
          </MyLink>
          <MyLink className="navLink" to="/home/messages">
            messages
          </MyLink>
        </div>

        <div className="content">
          {/* 注册路由 Switch在一个以上才进行使用 单一匹配*/}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/messages" component={Messages} />
            {/* 算是兜底的 前面的都没有匹配上 那么就按照redirect的指示  */}
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}
