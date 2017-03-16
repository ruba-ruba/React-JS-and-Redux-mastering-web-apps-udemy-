import React, { Component } from 'react';
import './app.css'
import { FormControl, FormGroup, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null
    }
  }

  search(){
    const BASE_URL = 'https://api.spotify.com/v1/search';
    const FETCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;
    fetch(FETCH_URL, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        this.setState({artist})
      })
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
        <Profile
          artist={this.state.artist}
        />
      </div>
    )
  }
}

export default App;