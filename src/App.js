import React, { Component } from 'react';

import './App.css';
// Material UI
import AppBar from 'material-ui/AppBar';
import FlashCardsList from './containers/FlashCardsList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      text: ''
    }
  }

  render() {
    return (
      <div className="App">
        <AppBar title="Algorithms" style={{position: 'fixed'}}></AppBar>
        <div className="App-MainContainer">
          <FlashCardsList></FlashCardsList>          
        </div>        
      </div>
    );
  }
}

export default App;
