import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Button, Primary } from '../stories/Button.stories';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Primary Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Primary />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has the expected default props', () => {
    let button = <Primary />;
    expect(button.props.primary).toBe(true);
  });
});