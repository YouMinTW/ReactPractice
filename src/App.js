import React from 'react';
import './App.css';

import MyButton from './MyButton/MyButton';

class App extends React.Component {
  state = {
   counter : { count : 0, bomb : false },

  //  目前state中的method都還沒辦法用，還在思考怎麼透過state來pass method reference
   stage:[
     { level:1 , mission: this.incrementHandler , name: "去吧" },
     { level:2 , mission: this.decrementHandler , name : "回來吧！" },
     { level:3 , mission: this.resetHandler , name : "消失吧！" },
     { level:4 , mission: this.switchPicHandler , name : "變形吧！" },
     { level:5 , mission: this.bombHandler , name : "點爆吧！" }
   ],
  //  換圖片的寫法想再漂亮一點 
   switchPicSrc : "粽子",
  }

  // setState 的使用-同步 or 非同步？、updater
  incrementHandler = () => { 
    if( this.state.counter.count < 9 )
    { 
      this.setState( { counter : { count : this.state.counter.count + 1 , bomb : false } } );
    } else { 
      this.setState( { counter : { count : this.state.counter.count + 1 , bomb : true } } );
    }
   }

  decrementHandler = () => { 
    if( this.state.counter.count > 10 )
    { 
      this.setState( { counter : { count : this.state.counter.count - 1 , bomb : true } } );
    } else { 
      if(this.state.counter.count > 0)
      {
        this.setState( { counter : { count : this.state.counter.count - 1 , bomb : false } } );
      } else {
        alert("沒粽子啦")
      }
    }
  }

  resetHandler = () =>{ 
    this.setState( { counter : { count : 0 } } ); }

  switchPicHandler = () => { 
    this.state.switchPicSrc === "粽子" ?  this.setState( { switchPicSrc: <img src = "http://p6.qhimg.com/dr/250__/t01e8735903540fce6b.png"  alt="看不到就算了" height = "80" /> } ) : this.setState( { switchPicSrc: "粽子" } ); }

  render() {
    return (
      <div>
        <h1>粽子節，數粽子 - { this.state.switchPicSrc }:{ this.state.counter.count }</h1>
        <MyButton stage = { this.state.stage[0].level } mission = {  this.incrementHandler } name = { this.state.stage[0].name }  theFlag = { this.state.counter.bomb }/>
        <MyButton stage = { this.state.stage[1].level } mission = {  this.decrementHandler } name = { this.state.stage[1].name }/>
        <MyButton stage = { this.state.stage[2].level } mission = {  this.resetHandler } name = { this.state.stage[2].name }/>
        <MyButton stage = { this.state.stage[3].level } mission = {  this.switchPicHandler } name = { this.state.stage[3].name }/>
        <MyButton stage = { this.state.stage[4].level } mission = {  this.incrementHandler } name = { this.state.stage[4].name } theFlag = { this.state.counter.bomb }> 還有{ 10 - this.state.counter.count }次 </MyButton>
      </div>
    )
  }
}


export default App;
