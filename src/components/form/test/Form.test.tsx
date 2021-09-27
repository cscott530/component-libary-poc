import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IIForm } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IIForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
