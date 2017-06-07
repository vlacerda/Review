import React from 'react';
import {shallow} from 'enzyme';
import CardInput from './CardInput';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

test('CardInput sends the input data to the onTouchTap callback', () => {

  expect.assertions(1)
  let testState = {
    title: 'TEST',
    text: 'Working'
  };
  const callback = jest.fn()

  const cardInput = shallow(<CardInput onTouchTap={callback} />)  
  cardInput.setState(testState);
  cardInput.find(RaisedButton).simulate('touchTap');
  expect(callback.mock.calls[0][0]).toEqual(testState);

});
