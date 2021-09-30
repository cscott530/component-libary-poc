import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IILink } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IILink />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
