import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from'./components/TodoItemList';

/**
 * 각 컴포넌트(Form, TodoItemList)끼리 직접 데이터를 주고받는 것은
 * 매우 비효율적. (일종의 안티패턴)
 * 대신, 부모 컴포넌트(App)를 통하여 상태를 공유하는것이 바람직하다.
 */
class App extends Component {

  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false }
    ]
  }

  /**
   * 1. 텍스트 내용 바뀌면 state 업데이트
   * 2. 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
   * 3. 인풋에서 Enter 누르면 버튼을 클릭한것과 동일한 작업진행하기
   */

   handleChange = (e) => {
     this.setState({
       input: e.target.value
     });
   }

   handleCreate = () => {
     const { input, todos } = this.state;
     this.setState({
       input: '',
       //배열 비교를 통해 리렌더링 방지하는 최적화를 위하여 concat 사용해 배열값 변경
       todos: todos.concat({
         id: this.id++,
         text: input,
         checked: false
       })
     });
   }

   handleKeyPress = (e) => {
     if(e.key === 'Enter'){
      this.handleCreate();
     }
   }

   handleToggle = (id) =>{
     const { todos } = this.state;

     const index = todos.findIndex(todo => todo.id === id);
     const selected = todos[index];

     //배열을 복사
     //전개 연산자를 사용하면 shallow clone이 적용되기 때문에 배열객체는 바뀌지만,
     //그 안의 값들은 기존의 값을 재사용하기 때문에 오버헤드 x
     const nextTodos = [...todos];

     nextTodos[index] = {
       ...selected,
       checked: !selected.checked
     };

     this.setState({
       todos: nextTodos
     });
   }

   handleRemove = (id) => {
     const { todos } = this.state;
     this.setState({
       todos: todos.filter(todo => todo.id !== id)
     });
   }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
    
    return (
      //jsx를 props로 전달가능!
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
