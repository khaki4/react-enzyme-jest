import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should render App', () => {
    const wraaper = shallow(<App />);
    console.log(wraaper.debug());
  })
});