import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttribute } from './Utils';


describe('App Component', () => {
  it('It should render without errors', () => {
    const component = shallow(<App />)
    console.log(component)
    const heading = findByTestAttribute(component, 'heading')
    expect(heading.length).toBe(1);
  });
});

describe('App Component', () => {
  it('It should render without errors', () => {
    const component = shallow(<App />)
    const heading = findByTestAttribute(component, 'heading')
    expect(heading.length).toBe(1);
  });
});
