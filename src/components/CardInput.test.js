import React from 'react';
import {shallow} from 'enzyme';
import CardInput from './CardInput';

test('CardInput sends the input data to the onTouchTap callback', () => {

  expect.assertions(1)
  let testState = {
    title: 'TEST',
    text: 'Working'
  };

  const callback = (state) => {
    expect(state).toEqual(testState);
  }

  const cardInput = shallow(<CardInput onTouchTap={callback} />)  
  cardInput.setState(testState)
  cardInput.find('RaisedButton').simulate('touchTap');
});
