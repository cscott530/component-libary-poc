module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ${componentName} } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<${componentName} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

`,
  directory: `/test/`,
  extension: `.test.tsx`,
});
