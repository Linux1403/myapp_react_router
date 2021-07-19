import React, { Component } from "react";
import Detail from "./Detail";
import { Link, Route } from "react-router-dom";

export default class Messages extends Component {
  state = {
    msgArr: [
      {
        id: "001",
        title: "王一博消息1",
      },
      {
        id: "002",
        title: "杨洋的消息2",
      },
      {
        id: "003",
        title: "蓝忘机消息3",
      },
    ],
  }
 
  pushRead=(id,title)=>{
    this.props.history.push(`/home/messages/detail/${id}/${title}`)
  }
  replaceRead=(id,title)=>{
    this.props.history.replace(`/home/messages/detail/${id}/${title}`)
  }
  render() {
    const { msgArr } = this.state;
    return (
      <div>
          {/* 方法一 params  */}
        <ul>
          {msgArr.map((item) => {
            return (
                // 传参 params
              <li key={item.id}>
                <Link to={`/home/messages/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link>
                <button onClick={()=>{this.pushRead(item.id,item.title)}}>push查看</button> 
                <button onClick={()=>{this.replaceRead(item.id,item.title)}}>place查看</button>
              </li>
            );
          })}
        </ul>
        <hr></hr>

        <Route
          path="/home/messages/detail/:id/:title"
          component={Detail}
        ></Route>
       

        {/* 方法二 search */}
        {/* <ul>
            {
                msgArr.map(item=>{
                    return (
                        <li key={item.id}>
                            <Link to={`/home/messages/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
        <Route path='/home/messages/detail' component={Detail}></Route>
       */}

       {/* 方法三 state  HashRouter会对这个产生影响 因为他不使用history 没办法保存state */}
       {/* <ul>
         {
           msgArr.map(item=>{
             return (
               <li key={item.id}>
                 <Link replace to={{pathname:'/home/messages/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
               </li>
             )
           })
         }
       </ul>
       <Route path="/home/messages/detail" component={Detail}></Route> */}
      </div>
    );
  }
}
