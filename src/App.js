import React, { Component } from 'react';

import './App.css';
// Material UI
import AppBar from 'material-ui/AppBar';
//My Components
import SearchBar from './components/SearchBar';
//Reducers
import VenueReducer from './reducers/Venue';
import { createStore } from 'redux';


const venueStore = createStore(VenueReducer)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      id: 0
    }
  }

  onTouchTap = (value) => {  
    let id = this.state.id + 1;
    venueStore.dispatch({
      type: 'main.SEARCH_VENUE', 
      text: value,
      id: this.state.id + 1
    });

    this.setState({id: id})
  }

  render() {
    return (
      <div className="App">
        <AppBar title="Search"></AppBar>
        <SearchBar
          value={this.state.searchVal}
          onTouchTap={this.onTouchTap}
        ></SearchBar>

        <ul>
          {venueStore.getState().map(v => <li key={v.id}>{JSON.stringify(v)}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
