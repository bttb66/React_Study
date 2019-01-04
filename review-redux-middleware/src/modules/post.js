import { handleActions } from 'redux-actions';

import axios from 'axios';

function getPostAPI(postId){
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'gET_POST_FAILURE';

export const getPost = (postId) => dispatch => {
    //요청이 시작됨을 알림
    dispatch({type: GET_POST_PENDING});
    
    //요청을 시작
    return getPostAPI(postId).then(
        (response) => {
            //요청이 성공한 경우, 서버 응답내용을 payload로 설정하여 GET_POST_SUCCESS액션을 디스패치함
            dispatch({
                type: GET_POST_SUCCESS,
                payload: response
            });
        }
    ).catch(error => {
        //요청이 실패한 경우, 서버 응답내용을 payload로 설정하여 GET_POST_FAILURE액션을 디스패치함
        dispatch({
            type: GET_POST_FAILURE,
            payload: error
        })
    })
}

const initialState = {
    pending: false,
    error: false,
    data: {
        title: '',
        body: ''
    }
}

export default handleActions({
    [GET_POST_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        };
    },
    [GET_POST_SUCCESS]: (state, action) => {
        const { title, body } = action.payload.data;

        return {
            ...state,
            pending: false,
            data: {
                title: title,
                body: body
            }
        }
    },
    [GET_POST_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState);

