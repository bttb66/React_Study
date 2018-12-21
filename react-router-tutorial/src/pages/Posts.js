import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages';

const Posts = ( { match }) => {
    //componet 대신 render속성을 활용하여 인라인 렌더링 실행
    return (
        <div>
            <h2>Post list</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            <Route exact path={`${match.url}`} render={()=>(<h3>Please select any post</h3>)}></Route>
            <Route path={ `${match.url}/:id`} component={Post}/>
        </div>
    );
}

export default Posts;