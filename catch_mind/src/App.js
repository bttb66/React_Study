import React, { Component } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Palette from './components/Palette';
import CanvasTemplate from './components/CanvasTemplate';
class App extends Component {

  state = {
    color: '#343a40'
  }

  handleColorChange = (color) => {
    this.setState({
      color: color
    });
  }

  render() {
    const { color } = this.state;
    const { handleColorChange } = this;

    return (
      <div className="App">
      <CanvasTemplate
        palette={(<Palette
            colors={['#343a40', '#f03e3e', '#12b886', '#228ae6']}
            onSelect={handleColorChange}
            selected={color}
          />)}
        canvas={(<Canvas
          color={color}
        />)}
        >
      </CanvasTemplate>
        
      </div>
    );
  }
}

export default App;
