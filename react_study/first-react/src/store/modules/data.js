//데이터를 관리하는 리듀서 함수
import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const APPEND_DATA = 'data/APPEND_DATA';
const REMOVE_DATA = 'data/REMOVE_DATA';

export const appendData=createAction(APPEND_DATA, data => data);
export const removeData=createAction(REMOVE_DATA, id=> id);

const initialState={
    "0" : {
        id : "0",
        name : "Ayeon",
        phone : "010-3671-2150"
    }, 

    "1" : {
        id: "1",
        name : "Gaeul",
        phone : "010-4674-5294"
    },

    "2" : {
        id: "2",
        name : "Hanbit",
        phone : "010-4917-5347"
    },

    "3" : {
        id: "3",
        name : "Yunji",
        phone : "010-5513-6459"
    },

    "4" : {
        id: "4",
        name : "Chehyeon",
        phone : "010-7184-4723"
    }
};

var nextId = Object.keys(initialState).length;

export default handleActions({
    [APPEND_DATA] : (state, action) =>
    produce(state, draft =>{
        draft[nextId]={
            id: nextId,
            ...action.payload   
        };
        nextId++;
    }),
    [REMOVE_DATA] : (state, action)=>
    produce(state,draft=>{
        delete draft[action.payload];
    })
}, initialState);