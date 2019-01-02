// action객체를 만드는 action 생성자들을 선언 (action creators)

import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

/*
 * 변화는 언제나 순수함수로 이루어져야 한다 (리덕스 3가지 원칙)
 * 순수함수 = 외부의 상태를 변경하지 않으면서 동일한 인자에 대하여 항상 같은값을 리턴하는 함수
 * 따라서, setColor의 경우, 랜덤하게 색상을 반환하는 방식의 액션은 불가능하다.
 */
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});

