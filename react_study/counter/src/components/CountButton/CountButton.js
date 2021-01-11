import React from "react";
import styled from "styled-components";

const Button = styled.button`
    font-size: 20px;
    font-weight: 700;
    width : 50px;
    padding : 10px 0;
    border : 1px solid black;
    background : white;

    & + &{
        margin-left : 10px;
    }
`;

const CountButton = ({onClick, text}) => {  //onClick, text 속성이 있는 Props 받아옴. 
    return <Button onClick={onClick}>{text}</Button>;
}

export default CountButton;
