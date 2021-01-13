import React from "react";
import PhoneItem from "../PhoneItem";
import styled from "styled-components";

const PhoneWrapper = styled.div`
    display : flex;
    flex-direction : column;
    padding-bottom : 50px;
    `;

const PhoneList=({list, deleteItem}) => {
    return(
        <PhoneWrapper>
            {/*<PhoneItem {...list["0"]}/>
            <PhoneItem id={list["0"].id} name={list["0"].name} phone={list.["0"].phone} 과 같음*/}
            {/*list 수정 시 일일이 추가해야하므로 map, Object.values 적용*/}
            {Object.values(list).map(item=>{
                return <PhoneItem {...item} key={item.id} onClick={deleteItem}/>;
                //데이터 갯수만큼 PhoneItem 컴포넌트 생성. 데이터 값을 props(name, phone, id)로 전달. key : id 값같이 컴포넌트의 고유값  지정.(map 같이 반복적으로 컴포넌트 생성해줄 때 필수적으로 넣어야함.)
            })} 

        </PhoneWrapper>
    );
};
export default PhoneList;