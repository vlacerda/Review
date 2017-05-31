import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      searchVal: ''
    }
  }

  handleClick = () => {
    this.props.onTouchTap.call(null, this.state.searchVal)
    this.value('');
  }

  componentDidMount = () => {
    this.value(this.props.value)
  }

  value = (val) => {
    this.setState({
      searchVal: val
    })
  }

  render() {
    return (      
      <div>
        <TextField 
          value={this.state.searchVal} 
          onChange={ (e, newValue) => this.value(newValue) }
          hintText="Search for a store, restaurant, bar..." 
        ></TextField>
        <FlatButton label="Search" onTouchTap={this.handleClick}></FlatButton>
      </div>
    )
  }
}