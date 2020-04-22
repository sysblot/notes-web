import React from 'react';
import { shallow } from 'enzyme';
import Editor from '../index';
import { getNote } from '../../../api';

jest.mock('../../../api');

describe('Editor', () => {
  let component;
  const props = { new: 'new' };

  beforeEach(() => {
    component = shallow(<Editor props={props} />);
  });

  it('should render the Editor Component correctly with className', () => {
    expect(component.exists()).toBe(true);
    expect(component.props().className).toBe('editor');
  });

  it('should not call getNotes when it is a new note', () => {
    expect(getNote).not.toHaveBeenCalled();
  });

  it('should render the Editor Component with page and toolBox', () => {
    expect(component.find('ToolBox').exists()).toBe(true);
    expect(component.find('Page').exists()).toBe(true);
  });
});
