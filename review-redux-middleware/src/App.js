import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from 'modules/counter';
import * as postActions from 'modules/post';

class App extends Component {
    componentDidMount(){
        //컴포넌트가 처음 마운트될 때 현재 number를 postId로 사용하여 포스트 불러옴
        const { number, PostActions } = this.props;
        PostActions.getPost(number);
    }

    componentWillReceiveProps(nextProps){
        const { PostActions } = this.props;

        //현재 number와 새로 받을 number가 다를경우 요청 시도
        if(this.props.number !== nextProps.number){
            PostActions.getPost(nextProps.number);
        }
    }

    render() {
        const { CounterActions, number, post, error, loading } = this.props;

        
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
                {loading && <h2>로딩중,,,</h2>}
                {error 
                    ? <h1>에러발생!</h1>
                    : (
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.title}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.error
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);