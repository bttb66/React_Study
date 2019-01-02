import React, { Component }from 'react';
import CounterContainer from './CounterContainer';

class App extends Component{
    render(){
        return(
            <div>
              카운터
                <CounterContainer/>
            </div>
        );
    }
}

export default App;