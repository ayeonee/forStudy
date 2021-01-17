//두 개의 리듀서 함수를 하나의 리듀서로 합쳐 export
import input from './modules/input';
import data from './modules/data';
import { combineReducers} from 'redux';

export default combineReducers({
    input, data
})