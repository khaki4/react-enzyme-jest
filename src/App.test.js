import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import toJson from 'enzyme-to-json';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should contain 1 element', () => {
    const wraaper = shallow(<App />);
    expect(wraaper.find('p').exists()).toBe(true);
    // expect(wraaper.find('ul').children().length).toBe(3);
    // expect(wraaper.find('ul').hasClass('kevin')).toBe(true);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot()
  });

});