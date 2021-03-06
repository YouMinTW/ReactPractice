import React from 'react';
import './App.css';

import MyComponent from './MyComponent/MyComponent';

class App extends React.Component {

  state = {
   counter : { count : 0, bomb : false },
   showPic : false
  }

  // 使用PreState
  incrementHandler = () => { 
    if( this.state.counter.count < 9 )
    { 
      this.setState(
        prevState => ( { counter: { count: prevState.counter.count + 1 , bomb :false } } )
      );
    } else { 
      this.setState(
        prevState => ( { counter: { count: prevState.counter.count + 1 , bomb :true } } )
      );
    }
   }

  decrementHandler = () => { 
    if( this.state.counter.count > 10 )
    { 
      this.setState(
        prevState => ( { counter: { count: prevState.counter.count - 1 , bomb :true } } )
      );
    } else { 
      if(this.state.counter.count > 0)
      {
        this.setState(
          prevState => ( { counter: { count: prevState.counter.count - 1 , bomb :false } } )
        );
      } else {
        alert("沒粽子啦")
      }
    }
  }

  resetHandler = () =>{ 
    this.setState( { counter : { count : 0 } } ); }

  togglePicHandler = () => {
    this.setState(
      prevState => ({showPic: !prevState.showPic})
   );
  }

  render() {
    
    let picSrc = "粽子";
    if ( this.state.showPic ) {
      picSrc = <img src = "http://p6.qhimg.com/dr/250__/t01e8735903540fce6b.png"  alt="看不到就算了" height = "80" />;
    }
   
   const stages=[
    { stage:1 , mission: this.incrementHandler , name: "去吧" },
    { stage:2 , mission: this.decrementHandler , name : "回來吧！" },
    { stage:3 , mission: this.resetHandler , name : "消失吧！" },
    { stage:4 , mission: this.togglePicHandler , name : "變形吧！" },
    { stage:5 , mission: this.incrementHandler , name : "點爆吧！" ,msg:`還有 ${10 -this.state.counter.count} 次` }
    ];
    
    let riceballTemplate = stages.map((Stage)=>{
      return <MyComponent key = { Stage.stage } stage = { Stage.stage } mission = { Stage.mission } name = { Stage.name } theFlag = { this.state.counter.bomb }>{Stage.msg}</MyComponent>
    });
    return (
      <div>
        <h1>粽子節，數粽子 - { picSrc }:{ this.state.counter.count }</h1>
        {/* 用map function不知道這樣會不會影響到效能，會不會只要有任一child component 改變，就重新跑map function 然後render 整個riceballTemplate 不管其他child component沒有發生狀態改變 */}
        { riceballTemplate }
      </div>
    )
  }
}


export default App;
