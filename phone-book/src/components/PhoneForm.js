import React, { Component } from 'react';

class PhoneForm extends Component{
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        //prevent page reloading 
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            name:'',
            phone: ''
        });
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="이름"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder="전화번호"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;