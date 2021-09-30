module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import { ${componentName} } from './${componentName}';
import { ${componentName}Props } from './${componentName}.types';

export { ${componentName} };
export { ${componentName}Props };
`,
  fileName: 'index.ts',
  directory: `/src/`
});

