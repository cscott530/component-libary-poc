import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Button } from '../stories/Link.stories';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button text="Test"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});