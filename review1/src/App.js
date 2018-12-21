import React, { Component } from 'react';
import Header from'./Header';

class App extends Component{

  state = ({
    count : 0,
  })

  clickHandler = ()=>{
    this.setState(prevState => {
      return {count : ++prevState.count};
    })
  }

  render(){
      return(
          <div clssName="App">
              <Header
                count={this.state.count}
                onClick={this.clickHandler}
              />
          </div>
      );
  }
}

export default App;
