import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';
import moment from 'moment';
import * as api from './lib/api';

class App extends Component {
  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }

  getAPOD = async (date) => {
    if(this.state.loading) return;

    this.setState({
      loading: true
    });

    try {
      const response = await api.getAPOD(date);
      
      const { date: retrievedDate, url, media_type: mediaType } = response.data;
      
      if(!this.state.maxDate){
        this.setState({
          maxDate: retrievedDate
        })
      }

      this.setState({
        date: retrievedDate,
        mediaType,
        url
      })
    } catch (e) {
      console.log(e);
    }

    this.setState({
      loading: false
    });
  }
  
  componentDidMount(){
    this.getAPOD();
  }

  handlePrev  = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(prevDate);
    this.getAPOD(prevDate);
  }

  handleNext  = () => {
    const { date, maxDate } = this.state;
    if(date === maxDate) return;
    
    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    console.log(nextDate);
    this.getAPOD(nextDate);
  }

  render() {
    const { url, mediaType, loading } = this.state;

    return (
      <div>
        <ViewerTemplate 
          spaceNavigator={
            <SpaceNavigator
              onPrev={this.handlePrev}
              onNext={this.handleNext}
            />
          }
          viewer={(
            <Viewer
              url={url}
              mediaType={mediaType}
              loading={loading}/>
          )}
        />
      </div>
    );
  }
}

export default App;
