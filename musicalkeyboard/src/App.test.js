import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

const app = 'Test App'
let wrapped = shallow(<App>{app}</App>);

describe('App', () => {
  it('should render the App componente', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('renders Keyboard in App', () => {
    expect(wrapped.find('Keyboard'));
  });
});