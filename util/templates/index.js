const component = require("./component");
const componentTypes = require("./component.types");
const componentStories = require("./component.stories");
const componentTests = require("./component.test");
const componentStyles = require("./component.styles");
const packageJson = require('./component.package');
const readme = require('./component.readme');
const componentIndex = require('./component.index');

module.exports = [
  component,
  componentTypes,
  componentStories,
  componentTests,
  componentStyles,
  packageJson,
  readme,
  componentIndex
];
