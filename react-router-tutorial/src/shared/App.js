import React, { Component }from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from 'pages';

class App extends Component{
    render(){
        /*
        * exact를 붙여야 정확히 지정경로와 일치하는 경우에만 컴포넌트를 보여줌
        * 지정해주지 않는 경우, 지정경로가 포험된 경우에도 컴포넌트를 보여줌..
        */
        return(
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        );
    }
}

export default App;