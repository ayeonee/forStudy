import React, {useState} from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import "./App.css";
import { dummyData, nextId, setNextId } from "./lib/dummyData.js";
import useInput from "./lib/useInput";

//custom hook 적용
const App = () =>{
  const [data, setData] =useState(dummyData);
  const [name, setName, onChangeName]= useInput("");
  const [phone, setPhone, onChangePhone] =useInput("");

  const handleSubmit = () =>{
    if(name===""||phone==="") return;

    setData({      
        ...data,  
        [nextId] : {    
          id: String(nextId),
          name,
          phone
        }
      });
    //setData함수만으로는 전화번호부목록이 추가된 후 input값을 빈값으로 바꿔주지 못함. setName, setPhone으로 빈 값 설정.
    setName("");     
    setPhone("");

    setNextId();   
  };

  const handleRemove = id =>{
    const {[id]:_, ...dummyData} = data;
    setData(dummyData);
  };

  return (
    <div className="container">
      <InputBox
        name={name}
        phone={phone}
        onChangeName={onChangeName}
        onChangePhone={onChangePhone}
        onSubmit={handleSubmit}
      />
      <PhoneList list={data} deleteItem={handleRemove} />
    </div>
  );
}

// 기존 방식
// class App extends Component{
//   state={
//     dummyData,
//     name : "",
//     phone : ""
//   };

//   //input 값을 관리하는 함수
//   handleInput = e =>{
//     this.setState({
//       [e.target.name] : e.target.value
//     });
//   };

//   //값을 dummy에 저장하기
//   handleSumit=()=>{
    // const { dummyData, name, phone } = this.state;
    // if(name===""||phone==="") return;

    // this.setState({
    //   dummyData:{       
    //     ...dummyData,   //spread 문법으로 기존에 있던 내용 모두 넣음.
    //     [nextId] : {    //새로 입력 받은 값 추가.
    //       id:nextId,
    //       name,
    //       phone
    //     }
    //   },
    //   name:"",    //input 태그의값 모두 지워줌. 
    //   phone:""
    // });

    // setNextId();    //nextId 값 1 증가
//   };

//   //값을 삭제하기
//   handleRemove = id =>{
  //   const {[id]:_, ...dummyData} = this.state.dummyData;    //제거하고 싶은 아이템을 _ 라는 변수에 할당하고, 이 아이템을 제외한 나머지들을 dummyData에 저장함. 
  //   this.setState({dummyData});   
  // };
  
  // render(){
  //   const {handleInput, handleSumit,handleRemove }=this;
  //   const {dummyData, name, phone} =this.state;

  //   return (
  //     <div className="container">
  //       <InputBox 
  //         name={name}
  //         phone={phone}
  //         onChange={handleInput}
  //         onSubmit={handleSumit}
  //       />
  //       <PhoneList list={dummyData} deleteItem={handleRemove}/>
  //     </div>
  //   );
  // }
// }


export default App;