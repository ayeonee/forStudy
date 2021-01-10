import React, { Component } from 'react';

class App extends Component{
  state = { number : 0} //state 선언

  // 1. state를 업데이트하는 함수 전달
  countUP=()=>{
    //setState : 전달되는 값을 업데이트해주는 함수.
    this.setState(
      ({number})=>({
        number: number+1
      })
    );
  }

  //2. setState 함수 앞에서 state 값 받고 이를 전달.
  countDown=()=>{
    const{number}=this.state;
    this.setState({number : number-1});
  }

  render(){
    return (
      <div>
        <div>
          <button onClick={this.countUP}>+</button>
          <button onClick={this.countDown}>-</button>
        </div>
        {this.state.number}
      </div>
    )
  }
}

export default App;