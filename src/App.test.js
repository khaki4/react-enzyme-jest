import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import toJson from 'enzyme-to-json';
import App, { Link } from './App';

configure({ adapter: new Adapter() });

describe('<App /> shallow rendering', () => {
  it('should contain 1 element', () => {
    const wraaper = shallow(<App />);
    expect(wraaper.find('p').exists()).toBe(true);
    // expect(wraaper.find('ul').children().length).toBe(3);
    // expect(wraaper.find('ul').hasClass('kevin')).toBe(true);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('updates className with new State', () => {
    const wapper = shallow(<App />);
    expect(wapper.find('.blue').length).toBe(1);
    expect(wapper.find('.red').length).toBe(0);
    wapper.setState({ mainColor: 'red' });
    expect(wapper.find('.blue').length).toBe(0);
    expect(wapper.find('.red').length).toBe(1);
  });
  it('on button click changes p text', function () {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    expect(wrapper.find('.button-state').text()).toBe('No!');

    button.simulate('click')
    expect(wrapper.find('.button-state').text()).toBe('Yes!');
  });

  it('on input change, title changes text', function () {
    const wrapper = shallow(<App />);
    const input = wrapper.find('input');
    expect(wrapper.find('h2').text()).toBe('');
    input.simulate('change', { currentTarget: { value: 'kevin' }});
    expect(wrapper.find('h2').text()).toBe('kevin');
  });
});
