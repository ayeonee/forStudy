//input 값을 관리해주는 리듀서 함수

import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const SET_INPUT_VALUE = 'input/SET_INPUT_VALUE';
 
export const setInputValue = createAction(SET_INPUT_VALUE,data=>data);  //name과 value가 들어있는 객체를 받도록 명시

const initialState={
    name:"",
    phone:""
};

export default handleActions({
    [SET_INPUT_VALUE]: (state, action) =>
    produce(state, draft=>{
        const {name, value}=action.payload;
        draft[name]= value;
    })
}, initialState);