import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
// Material UI
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlashCardList from './containers/FlashCardList';
import FlashCard from './redux/FlashCard';

import { createStore } from 'redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {  

  constructor(props) {
    super(props);

    this.flashCardStore = createStore(FlashCard, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  render() {
    return (
      <Provider store={this.flashCardStore} >
        <MuiThemeProvider>
          <div className="App">
            <AppBar title="Algorithms" style={{position: 'fixed'}}></AppBar>
            <Drawer open={false}>
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
            <div className="App-MainContainer">
              <FlashCardList></FlashCardList>
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
