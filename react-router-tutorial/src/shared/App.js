import React, { Component }from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu'
class App extends Component{
    render(){
        /*
        * 1. exact를 붙여야 정확히 지정경로와 일치하는 경우에만 컴포넌트를 보여줌
        *    지정해주지 않는 경우, 지정경로가 포험된 경우에도 매칭됨
        * 2. Swtich : 첫번째로 매칭되는 컴포넌트만 보여줌
        */
        return(
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}

export default App;