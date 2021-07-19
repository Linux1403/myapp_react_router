import './App.css';
import About from  './pages/About';
import Home from  './pages/Home';
import {Redirect, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import MyLink from './components/MyLInk';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header name="aaa"></Header>
      </div>

      <div className="nav">
        {/* 实现跳转组件 默认to是模糊匹配 精准匹配需要
        在注册路由的时候 用exact 不能随便开
        后面的path从头开始包含to里面的内容*/}
        <MyLink className="navLink" to="/home">Home</MyLink>
        <MyLink className="navLink" to="/about">About</MyLink>
      </div>

      <div className="content">
        {/* 注册路由 Switch在一个以上才进行使用 单一匹配*/}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          {/* 算是兜底的 前面的都没有匹配上 那么就按照redirect的指示  */}
          <Redirect to="/home"></Redirect>

        </Switch>
      </div>

    </div>
  );
}

export default App;
