import React from 'react';
import { shallow } from 'enzyme';
import Container from '../index';

describe('Container', () => {
  let component;
  beforeAll(() => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve([
            {
              name: 'note',
              id: 1,
            },
          ]);
        },
      });
    });
  });

  beforeEach(() => {
    component = shallow(<Container />);
  });

  it('should render the Container Component correctly with the className', () => {
    expect(component.exists()).toBe(true);
    expect(component.props().className).toBe('container');
  });

  it('should render the Container Component with Router with 3 routes', () => {
    const router = component.find('BrowserRouter');
    const routes = router.find('Route');
    const links = component.find('Link');

    expect(router.exists()).toBe(true);
    expect(routes.length).toBe(3);
    expect(links.length).toBe(2);
    expect(links.first().props().to).toEqual('/create');
    expect(links.last().props().to).toEqual('/notes/1');
    expect(router.find('AddFile').exists()).toBe(true);
  });
});
