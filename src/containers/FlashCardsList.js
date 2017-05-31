import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import * as actions from '../actions/FlashCard';

//My Components
import CardInput from '../components/CardInput';
//Reducers
import FlashCardReducer from '../reducers/FlashCard';
import { createStore } from 'redux';

export default class FlashCardsList extends React.Component {

  flashCardStore = createStore(FlashCardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  constructor(props) {
    super(props);

    this.state = {
      flashCards: []
    }

    this.flashCardStore.subscribe( () => {
      this.setState({flashCards: this.flashCardStore.getState()});
    } )
  }

  onTouchTap = (state) => {
    this.flashCardStore.dispatch(Object.assign({
      type: actions.ADD_CARD
    }, state));    
  }

  render = () => {
    return (
      <div>
        <CardInput
          onTouchTap={this.onTouchTap}
        ></CardInput>
        <Paper
          zDepth={1} style={{
            marginTop: 10,
            display: 'block',
            overflow: 'auto'
          }}>
          <List>
            <Subheader>Flash Cards</Subheader>
            {this.state.flashCards.map((v, ind) => {
              return (<ListItem
                key={ind}
                primaryText={v.title}
                secondaryText={v.text}
                secondaryTextLines={2}
              />)
            })}
          </List>
        </Paper>
      </div>
    )
  }
}