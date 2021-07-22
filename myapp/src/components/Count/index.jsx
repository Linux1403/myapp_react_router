/*
练习Hooks
*/

import React,{Fragment} from "react";
import ReactDOM  from "react-dom";

export default function Count() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log("@@@@@@");
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return (()=>{
        clearInterval(timer)
    })
  }
  , []);
  //如果这里没有传入第二个参数的话 那么会发现定时器会呈指数似的增长
  // 传入一个空数组的话 相当于就是componentDidMount
  // 传入东西的话 相当于就是谁变了就会监听到 相当于componentDidUpdate

  const myRef = React.useRef()


  function add() {
    //   setCount(count+1)
    setCount((count) => count + 1);
    console.log(count);
  }

  function unmount(){
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  function show(){
      alert(myRef.current.value)

  }

  return (
    <Fragment>
      <h2>当前的和为：{count}</h2>
      <input ref={myRef}></input>
      <button onClick={add}>点击我加1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </Fragment>
  );
}
