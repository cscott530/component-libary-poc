module.exports = (componentName) => ({
  content: `_This readme was generated with \`util/create-component\`._

  ## ${componentName}

  This component can be installed with:

  \`\`\`
  yarn add @ii\\${componentName.toLowerCase()}
  \`\`\`
`,
  fileName: `readme.md`,
  directory: `/`
});

