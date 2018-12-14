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
    expect(toJson(tree)).toMatchSnapshot()
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

describe('<App /> mount rendering', () => {
  it('should contain 1 element', () => {
    const wraaper = mount(<App />);
    expect(wraaper.find('p').exists()).toBe(true);
    // wraaper.unmount();
    // expect(wraaper.find('ul').children().length).toBe(3);
    // expect(wraaper.find('ul').hasClass('kevin')).toBe(true);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
    // tree.unmount()
  });
});

describe('<Link />', () => {
  it('link component accepts address props', () => {
    const wrapper = shallow(<Link address='www.google.com' />);
    expect(wrapper.instance().props.address).toBe('www.google.com');
  });

  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address='www.google.com' />);
    expect(wrapper.props().href).toBe('www.google.com');
  });

  it('returns null with true hide prop', () => {
    const wrapper = shallow(<Link hide={false} /> );
    expect(wrapper.find('a').length).toBe(1);
    wrapper.setProps({ hide: true }); // test how components behave over time with changing props.
    expect(wrapper.get(0)).toBeNull(); // get method simply returns the node at the given index of the current wrapper. toBeNull method from Jest to make sure that this node that we are returning is actually null.
  });
});