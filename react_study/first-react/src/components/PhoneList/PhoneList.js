import React from "react";
import PhoneItem from "../PhoneItem";
import "./PhoneList.css";

const PhoneList=() => {
    return(
        <div className="phone_list">
            <PhoneItem/>
            <PhoneItem/>
            <PhoneItem/>
        </div>
    );
};
export default PhoneList;