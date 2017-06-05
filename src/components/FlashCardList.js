import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import CardInput from '../components/CardInput';

export default class FlashCardsList extends React.Component {

  render() {
    return (
      <div>
        <CardInput
          onTouchTap={this.props.inputSubmit}
        ></CardInput>
        <Paper
          zDepth={1} style={{
            marginTop: 10,
            display: 'block',
            overflow: 'auto'
          }}>
          <List>
            <Subheader>Flash Cards</Subheader>
            {this.props.flashCards.items.map((v, ind) => {
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