module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
export interface ${componentName}Props {
    title?: string;
    description?: string;
}
`,
  extension: `.types.ts`,
});
