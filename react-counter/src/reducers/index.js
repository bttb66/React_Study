import * as types from 'actions/ActionTypes';
// import number from './number';
// import color from './color';
// import { combineReducers } from 'redux';
// import { combineReducers } from 'redux';


//초기상태 정의
const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
};

/* 
 * state와 action을 파라미터로 받는 리듀서 함수를 정의. 
 * state가 undefined일 때 (스토어가 생성될 때) state의 기본값을 initialState로 사용.
 * action.types에 따라 다른 작업을 수행하고, 새 상태를 만들어 반환.
 * 이 때 주의할 점은, state를 직접 수정하면 안되고, 기존 상태값에 원하는 값을 덮어쓴 새로운 객체를 만들어 반환해야한다.
 */

 //리듀서 함수 정의
function counter(state = initialState, action){
    //레퍼런스 생성
    const { counters } = state;

    switch(action.type){
        case types.CREATE:
            return {
                counters: 
                [
                    ...counters,
                    {
                        color: 'black',
                        number: 0
                    }
                ]
            }
        case types.REMOVE:
        // state 내부의 배열을 변경하는 경우, push()/pop()등을 통해 변경하면 안되고,
        // slice()와 같은 메소드를 통하여 새로운 배열을 생성해야한다!
            return {
                counters: counters.slice(0, counters.length-1)
            };
        case types.INCREMENT:
            
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case types.DECREMENT:
            return{
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case types.SET_COLOR:
            return{
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
            
        default:
            return state;
    }
}

// const reducers = combineReducers({
//     numberData: number,
//     colorData: color
// });

 export default counter;