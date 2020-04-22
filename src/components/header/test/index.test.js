import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

describe('Header', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('should render the Header Component correctly', () => {
    expect(component.exists()).toBe(true);
  });

  it('should render the Header Component with nav and user Icons', () => {
    const icons = component.find('FontAwesomeIcon');
    const navIcon = icons.find('.nav-icon');
    const profileIcon = icons.find('.profile-icon');

    expect(icons.exists()).toBe(true);
    expect(icons.length).toBe(2);
    expect(navIcon.exists()).toBe(true);
    expect(profileIcon.exists()).toBe(true);
  });
});
