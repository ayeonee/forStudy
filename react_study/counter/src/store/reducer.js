//액션의 type을 상수로 선언. 패턴의 3번째 규칙 위반이지만 리듀서 함수가 한 개이므로 액션 타입만 작성. UPPERCASE로 적어야 함.
const INCREASE = "INCREASE";    
const DECREASE = "DECREASE";

//Action Creators : 액션 생성자. 함수 형태로 export해야 함.
export const increase = number => ({
    type : INCREASE,            
    payload : number
});

export const decrease = number => ({
    type : DECREASE,
    payload : number
});

//store의 초기값 지정
const initialState = {
    number : 0
};

//reducer : 액션 타입에 따라 특정 코드 실행 시킴
const reducer = (state = initialState, action) => {
    switch (action.type){
        case "INCREASE" : 
            return {number : action.payload};
        case "DECREASE" :
            return {number : action.payload};
        default :
            return state;
    }
};

export default reducer;