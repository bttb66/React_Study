import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component{
    render(){
        const { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    //remove 클릭하면 DOM의 부모(todo-item)의 클릭이벤트인 onToggle까지 실행됨
                    // onToggle이 실행되지 않도록 stopPropagation 호출
                    e.stopPropagation();
                    onRemove(id);
                }}>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                }
            </div>
        );
    }    
}

export default TodoItem;
