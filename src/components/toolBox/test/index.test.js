import React from 'react';
import { shallow } from 'enzyme';
import ToolBox from '../index';

describe('ToolBox', () => {
  let component;
  const onSave = jest.fn();
  const onEdit = jest.fn();
  const props = {
    onSave,
    onEdit,
  };
  beforeEach(() => {
    component = shallow(<ToolBox {...props} />);
  });

  it('should render the ToolBox Component correctly with className', () => {
    expect(component.exists()).toBe(true);
    expect(component.props().className).toBe('tool-box');
  });

  it('should render the ToolBox Component with save and edit icons', () => {
    const icons = component.find('FontAwesomeIcon');

    expect(icons.length).toBe(2);
    icons.forEach((icon) => icon.props().onClick());
    expect(props.onEdit).toHaveBeenCalled();
    expect(props.onSave).toHaveBeenCalled();
  });
});
