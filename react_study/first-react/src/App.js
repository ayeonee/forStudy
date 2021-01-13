import React, {Component} from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import "./App.css";
import { dummyData } from "./lib/dummyData.js";

class App extends Component{
  state={
    dummyData,
    name : "",
    phone : ""
  };

  //input 값을 관리하는 함수
  handleInput = e =>{
    this.setState({
      [e.target.name] : e.target.value
    });
  };
  
  render(){
    const {handleInput}=this;
    const {dummyData, name, phone} =this.state;

    return (
      <div className="container">
        <InputBox 
          name={name}
          phone={phone}
          onChange={handleInput}
        />
        <PhoneList list={dummyData} />
      </div>
    );
  }
}


export default App;