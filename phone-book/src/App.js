import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2 //렌더링 되는것과 상관 없는 값는 state에 넣어줄 필요 x
  state = {
    information:[
        {
            id: 0,
            name: '주지훈',
            phone: '010-0000-0000'
        },
        {
            id: 1,
            name: '박세원',
            phone: '010-6666-6666'
        }
    ]
}

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
        information : information.concat({id: this.id++, ...data})
    });
  }

  handleRemove  = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

handleUpdate = (id, data) => {
  const { information } = this.state;
  this.setState({
    information : information.map(
      info => id === info.id
        ? { ...info, ...data } //새 객체를 만들어 기존의 값과 전달받은 data 덮어씀
        : info //기존 값 유지
    )
  })
}

  render() {
    const { information } = this.state;
    return (
      <div>
       <PhoneForm 
          onCreate={this.handleCreate}
       />
       <PhoneInfoList
          data={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
       />
      </div>
    );
  }
}

export default App;

