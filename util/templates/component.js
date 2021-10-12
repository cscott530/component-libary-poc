module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from 'react';

// Import Props
import { ${componentName}Props } from './${componentName}.types';

// Import Styled Components
import {
  ${componentName}Wrapper,
  ${componentName}Heading,
  ${componentName}Description,
} from './${componentName}.styles';

export const ${componentName}: React.FC<${componentName}Props> = ({ title, description }) => (
  <${componentName}Wrapper data-testid="${componentName}ID">
    <${componentName}Heading>{title}</${componentName}Heading>
    <${componentName}Description>{description}</${componentName}Description>
  </${componentName}Wrapper>
);
`,
  directory: `/src/`,
  extension: `.tsx`,
});
