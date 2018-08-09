import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    static defaultProps = {
        data: []
    }

    /**
     * 리액트는 배열을 렌더링할 때 값을 통하여 업데이트 성능 최적화.
     * 배열 렌더링시 key 값을 따로 지정해주지 않으면, 
     * 배열의 idx값이 자동으로 key로 설정됨.(key값이 가변적)
     * 이러한 경우, 중간에 값을 삽입하게 되면 업데이트 성능 저하 발생.
     * 따라서 key값에 고정값을 부여하는것이 좋다.
     */
    render() {
        const { data } = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info} />)
        );

        return(
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;