module.exports = (componentName) => ({
  content: `_This readme was generated with \`util/create-component\`.

  ## ${componentName}
  ----

  This component can be installed with:

  \`\`\`
  yarn add @ii\\${componentName}
  \`\`\`
`,
  fileName: `readme.md`,
  directory: `/`
});

