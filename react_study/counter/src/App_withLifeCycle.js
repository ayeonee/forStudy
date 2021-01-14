// import React, { Component } from 'react';
// import CountButton from "./components/CountButton";
// import Number from "./components/Number";
// import styled from "styled-components";

// const Wrapper = styled.div`
//   margin : 0 auto;
//   display : flex;
//   flex-direction : column;
//   align-items : center;
//   width : 100px;
//   margin-top : 100px;
// `;

// const ButtonWrapper =styled.div`
//   width : 100%;
//   display : flex;
//   justify-content : space-between;
//   margin-bottom : 50px;
// `;

// class App extends Component{
//   state = { number : 0} //state 선언

//   //컴포넌트 마운트 되기 전에 호출
//   constructor(props){
//     super(props);
//     console.log("constructor 호출");
//   }

//   //컴포넌트 마운트 된 직후 호출
//   componentDidMount(){
//     console.log("componentDidMount 호출");
//   }

//   //props 나 state가 갱신되어 렌더링이 발생하기 직전에 호출
//   shouldComponentUpdate(nextProps, nextState){
//     console.log("shouldComponentUpdate 호출");
//     if(nextState.number % 3===0) return false;
//     return true;
//   }

//   //render 메소드 호출된 뒤에 발생.
//   componentDidUpdate(prevProps, prevState){
//     console.log("componentDidUpdate 호출");
//   }
//   // 1. state를 업데이트하는 함수 전달
//   countUP=()=>{
//     //setState : 전달되는 값을 업데이트해주는 함수.
//     this.setState(
//       ({number})=>({
//         number: number+1
//       })
//     );
//   }

//   //2. setState 함수 앞에서 state 값 받고 이를 전달.
//   countDown=()=>{
//     const{number}=this.state;
//     this.setState({number : number-1});
//   }

//   render(){
//     const {number} = this.state;

//     console.log("render 호출");
//     return (
//       <Wrapper>
//         <ButtonWrapper>
//           <CountButton onClick={this.countUP} text="+"/>
//           <CountButton onClick={this.countDown} text="-"/>
//         </ButtonWrapper>
//         <Number number={number}/>
//       </Wrapper>
//     );
//   }
// }

// export default App;