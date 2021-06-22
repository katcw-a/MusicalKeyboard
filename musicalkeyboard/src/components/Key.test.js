import Keyboard from './Keyboard';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Key from './Key';

var keys = [];
for (var i = 0; i < 15; i++){
  keys.push({
    id: i,
    row: "first", 
    character: "q", 
    file: "Empty"
  });
  i++;
  keys.push({
    id: i,
    row: "second", 
    character: "q", 
    file: "Empty"
  });
  i++;
  keys.push({
    id: i,
    row: "third", 
    character: "q", 
    file: "Empty"
  });
}

describe('Key', () => {

  it('renders Keys & Rows in Key Component', () => {
    const wrapper = shallow(<Key keys={keys}/>);
    expect(wrapper.find(".Key")).toHaveLength(3);
    expect(wrapper.find(".Key-inline")).toHaveLength(keys.length);
  });
});
