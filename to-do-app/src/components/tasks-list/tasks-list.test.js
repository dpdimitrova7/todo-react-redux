import React from 'react';
import { shallow } from 'enzyme';
import TasksList from './tasks-list.component'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { findByTestAttribute } from '../../Utils';

let store;

const setUp = (props={}) => {
  const mockStore = configureStore()
  store = mockStore();
  const component = shallow(<Provider store={store}><TasksList {...props} /></Provider>);
  console.log(component);
  return component;
}

describe('It has props', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      id: 'test id',
      title: 'test title',
      completed: 'test completed'
    };
     wrapper = setUp(props);
  })

  it('It should render without errors', () => {
    const component = findByTestAttribute(wrapper, 'wrapper-list')
    expect(component.length).toBe(0);
  });
});


