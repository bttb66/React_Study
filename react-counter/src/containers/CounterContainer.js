import Counter from 'components/Counter';
import * as actions from 'actions';
import { connect } from 'react-redux';
import { getRandomColor} from 'utils/index';

import { dispatch } from 'rxjs/internal/observable/range';

// store안의 state값을 props로 연결해줌
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

/*
 * 액션 생성자를 사용하여 액션을 생성하고,
 * 해당 액션을 dispatch하는 함수를 만든 후, 이를 props로 연결해줌
 */
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});


/* connect함수를 활용하여 컨테이너 컴포넌트를 store에 연결해줌
 * connect의 파라미터로 컴포넌트에 연결시킬 상태와, 액션함수들을 전달해주면,
 * 컴포넌트를 리덕스스토어에 연결시키는 또다른 함수를 반환해줌.
 * 이 과정에서 리턴된 함수 안에 Presentational Component(components/*)를 
 * 파라미터로 전달해주면 리덕스스토어에 연결된 새로운 컴포넌트가 생성됨.
 */
// Counter 컴포넌트의 Container 컴포넌트
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;