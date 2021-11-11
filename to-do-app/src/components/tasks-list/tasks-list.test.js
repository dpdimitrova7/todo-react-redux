import React from 'react';
import { shallow } from 'enzyme';
import TasksList from './tasks-list.component'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { findByTestAttribute } from '../../Utils';

const setUp = (props={}) => {
  const mockStore = configureStore()
  let store;
  store = mockStore();
  const component = shallow(<Provider store={store}><TasksList {...props} /></Provider>);
  return component;
}

describe('Task List Component', () => {

  //const initialState = {}
  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('It should render without errors', () => {
    const task = findByTestAttribute(component, 'wrapper-list')
    expect(task.length).toBe(0);
  });
})