import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render(){
    return(
      <div className="app">
        <div className='app-title'> Countdown to december 25, 2017 </div>
        <div>
          <div className='clock-days'> 14 days </div>
          <div className='clock-hours'> 30 hours </div>
          <div className='clock-minutes'> 15 minutes </div>
          <div className='clock-seconds'> 20 seconds </div>
        </div>
        <div>
          <input placeholder='new date' />
          <button> Submit </button>
        </div>
      </div>
    )
  }
}

export default App;
