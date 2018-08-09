import React, { Component } from 'react';

class PhoneInfo extends Component{
    //info 값 전달이 되지 않아 컴포넌트가 크래쉬되는 것 방지 위해 default 설정
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    render(){
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

       // 비구조 할당 사용 (info가 undefined일 경우 불가능)
        const {
            name, phone, id
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;