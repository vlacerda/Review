import React, { Component } from 'react';

import './App.css';
// Material UI
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlashCardsList from './containers/FlashCardsList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openDrawer: true
    }
  }

  render() {
    return (
      <div className="App">
        <AppBar title="Algorithms" style={{position: 'fixed'}}></AppBar>
        <Drawer open={this.state.openDrawer}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <div className="App-MainContainer">
          <FlashCardsList></FlashCardsList>          
        </div>        
      </div>
    );
  }
}

export default App;
