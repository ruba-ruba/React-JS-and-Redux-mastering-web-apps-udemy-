import React, { Component } from 'react';
import './app.css'
import { FormControl, FormGroup, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }    
  }

  search(){
    console.log('this.state', this.state);
  }

  render(){
    return(
      <div className='app'>
        <div className="app-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl 
              type="text"
              placeholder="search for artist"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph='search'></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className='Profile'>
          <div> Artist Picture</div>
          <div> Artist Name</div>
          <div className="Gallary">
            Gallary
          </div>
        </div>
      </div>
    )
  }
}

export default App;