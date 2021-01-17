// import {useState} from 'react';

// const useInput=(initialValue) => {
//     const [value, setValue] =useState(initialValue);   //useState 활용하여 상태값과 그 값을 바꿔주는 함수 선언함.

//     //input 값 변경되었을 때 실행시키는 함수.
//     const onChange = e =>{
//         //Destructing Assignment
//         const { target : {value}}=e;
//         setValue(value);
//     }

//     //상태값, 그 값을 바꿔주는 함수, input 값이 변경되었을 때 실행시켜줄 함수 반환 
//     return [value, setValue, onChange];
// }

// export default useInput;