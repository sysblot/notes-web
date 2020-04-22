import React from 'react';
import { shallow } from 'enzyme';
import Page from '../index';

describe('Page', () => {
  let component;
  const props = {
    note: { name: 'New Note', id: 1, content: 'this is a test note' },
    editable: true,
    onEdit: jest.fn(),
  };
  beforeEach(() => {
    component = shallow(<Page {...props} />);
  });

  it('should render the Page Component correctly with className', () => {
    expect(component.exists()).toBe(true);
    expect(component.props().className).toBe('page-container');
  });

  it('should render the Page Component with pageHeader', () => {
    const pageHeader = component.find('.page-header');
    const event = { event: { currentTarget: { textContent: 'Abcd' } } };

    pageHeader.props().onBlur(event);

    expect(pageHeader.exists()).toBe(true);
    expect(pageHeader.props().contentEditable).toBe(props.editable);
    expect(pageHeader.props().children).toBe(props.note.name);
    expect(props.onEdit).toHaveBeenCalledWith('name', event);
  });

  it('should render the Page Component with page content', () => {
    const newProps = { ...props, editable: false, onEdit: jest.fn() };
    const newComponent = shallow(<Page {...newProps} />);
    const event = {
      event: { currentTarget: { textContent: 'the content is changed' } },
    };

    const pageContent = newComponent.find('.page');
    pageContent.props().onBlur(event);
    expect(pageContent.exists()).toBe(true);
    expect(pageContent.props().children).toBe(props.note.content);
    expect(pageContent.props().contentEditable).toBe(newProps.editable);
    expect(newProps.onEdit).toHaveBeenCalledWith('content', event);
  });
});
