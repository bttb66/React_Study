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

    state = {
        // 수정btn 클릭 시 editing -> true로 toggle
        // editing이 true이면 기존 text형태의 값들을 input 형태로 보여줌
        editing: false,
        //input 값은 유동적이므로 input값을 담기 위해 각 필드의 값도 state에 설정
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const {info, onRemove } = this.props;
        onRemove(info.id);
    }

    //editing 값 toggle
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing : !editing });
    }

    //input 값 변경(onChange 이벤트 발생) 시 호출
    handleChange = (e) => {
        console.log(111);
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    /**
     * editing 값 변경 시 적용되는 로직
     * 수정 누른 경우(false -> true) 기존 값 input에 setting
     * 수정 적용한 경우(true -> false) input 값을 부모에게 전달
     */
    componentDidUpdate(prevProps, prevState){
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing){
            //editing 값이 false -> true로 전환된 경우
            // info의 값을 state에 설정
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.editing && !this.state.editing){
            //editing 값이 true -> false로 전환된 경우
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        // 수정상태 x, info값 같다면 리렌더링x
        if(!this.state.editing
            && !nextState.editing
            && nextProps.info !== this.props.info){

            return false;
        }
        // 나머지 경우엔 리렌더링
        return true;
    }

    render(){
        console.log('render PhoneInfo' + this.props.info.id);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        //수정모드
        if (editing) {
            return ( 
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }


       //일반 모드 
       // 비구조 할당 사용 (info가 undefined일 경우 불가능)
        const {
            name, phone, id
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;