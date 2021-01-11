import React from "react";
import styled from "styled-components";

const Count = styled.div`
    padding : 5px 0;
    width : 200px;
    text-align : center;
    border : 1px solid black;
    font-size : 2rem;
`;

// const Number = props =>{    //props : number가 담긴 객체
//     return <Count>{props.number}</Count>;
// };

//Destructing Assignment 문법으로 더간단하게
const Number=({number})=>{
    return <Count>{number}</Count>;
};

export default Number;