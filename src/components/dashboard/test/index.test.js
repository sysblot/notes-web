import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../index';

describe('Dashboard', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Dashboard />);
  });

  it('should render the Dashboard Component correctly with className', () => {
    expect(component.exists()).toBe(true);
    expect(component.props().className).toBe('dashboard');
  });

  it('should render the Dashboard Component with header and container', () => {
    expect(component.find('Header').exists()).toBe(true);
    expect(component.find('Container').exists()).toBe(true);
  });
});
