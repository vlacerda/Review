import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }
  }
  
  handleClick = () => {
    this.props.onTouchTap.call(null, this.state)
    this.setState({
      title: '',
      text: ''
    })
  }
  
  render() {
    return (
      <div>
        <TextField 
          className='title'
          value={this.state.title}
          onChange={ (e, newValue) => this.setState({title: newValue}) }
          hintText="Title of the flash card" 
        ></TextField>
        <br />
        <TextField
          className='text'
          hintText="The description of the flash card"
          floatingLabelText="Flash card description"
          multiLine={true}
          rows={3}
          value={this.state.text}
          onChange={ (e, newValue) => this.setState({text: newValue}) }
        />        
        
        <RaisedButton label="Add card" fullWidth={true} primary={true} onTouchTap={this.handleClick} />
      </div>
    )
  }
}

SearchBar.propTypes = {
  onTouchTap: PropTypes.func.isRequired
}