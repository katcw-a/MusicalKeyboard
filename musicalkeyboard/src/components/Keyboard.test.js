import Keyboard from './Keyboard';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Key from './Key';

var keys = [];
for (var i = 0; i < 6; i++){
  keys.push({
    id: i,
    row: "first", 
    character: "q", 
    file: "Empty"
  });
}

describe('Keyboard', () => {

  it('renders Key in Keyboard', () => {
    const wrapper = shallow(<Keyboard keys={keys}/>);
    expect(wrapper.find(Key)).toHaveLength(1);
  });
});
