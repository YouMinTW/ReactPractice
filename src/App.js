import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyButton from './MyButton/MyButton';

class App extends React.Component {
  state = {
    count : 0,
    // stage : [ 1, 2, 3, 4, 5 ] ,
    switchPicSrc : "粽子",
    bomb : false
  }

  // setState 的使用-同步 or 非同步？、updater
  incrementHandler = () => { this.setState( { count : this.state.count + 1 } ) }

  decrementHandler = () => { 
    this.state.count > 0 ?
      this.setState( { count : this.state.count - 1 } ) : 
      alert("沒粽子啦");  }

  resetHandler = () => this.setState( { count : 0 } )

  switchPicHandler = () => { 
    this.state.switchPicSrc === "粽子" ?  this.setState( { switchPicSrc: <img src = "http://p6.qhimg.com/dr/250__/t01e8735903540fce6b.png" height = "80" /> } ) : this.setState( { switchPicSrc: "粽子" } ); }
  // 幾次都是改一個按鈕，改全部按鈕，思考中
  reverseBombHandler = () => { 
    this.incrementHandler();
    this.state.count < 1  ? this.setState( { bomb : false } ) :  this.setState( { bomb : true } ); }
  
  render() {
    return (
      <div>
        <h1>粽子節，數粽子 - { this.state.switchPicSrc }:{this.state.count}</h1>
        <MyButton stage = "1" mission = { this.incrementHandler } name = "去吧！"></MyButton>
        <MyButton stage = "2" mission = { this.decrementHandler } name = "回來吧！"></MyButton>
        <MyButton stage = "3" mission = { this.resetHandler } name = "消失吧！"></MyButton>
        <MyButton stage = "4" mission = { this.switchPicHandler } name = "變形吧！"></MyButton>
        <MyButton stage = "5" mission = { this.reverseBombHandler } name = "點爆吧！" theFlag = { this.state.bomb }>還有 { 10 - this.state.count } 次 </MyButton>
      </div>
    )
  }
}


export default App;
