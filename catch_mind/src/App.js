import React, { Component } from 'react';
import 'App.css';
import { Grid, Image, Rail } from 'semantic-ui-react';
import Canvas from 'components/Canvas';
import Palette from 'components/Palette';
import CanvasTemplate from 'components/CanvasTemplate';
import Prompt from 'components/Prompt';
import Chat from 'components/Chat';
class App extends Component {

  state = {
    color: '#343a40',
    loading: false,
    avatarUrl: '',
    nickname: null 
  }

  handleColorChange = (color) => {
    this.setState({
      color: color
    });
  }

  render() {
    const { color, setUser, user } = this.state;
    const { handleColorChange } = this;

    if (!user) {
      return (
        <div className="App">
        <Prompt
          setUser={setUser}
        />
        </div>
      );
    }else {
      return (
        <div className="App">
          <nav>
            <Chat/>
          </nav>
          <section>
            <CanvasTemplate
              palette={(<Palette
                  colors={['#343a40', '#f03e3e', '#12b886', '#228ae6']}
                  onSelect={handleColorChange}
                  selected={color}
                />)}
              canvas={(<Canvas
                color={color}
              />)}
            />
          </section>
        </div>
      );
    }
  }
}

export default App;
