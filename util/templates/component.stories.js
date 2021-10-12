module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ${componentName} } from "../src";
import { ${componentName}Props } from "../src";

// We're following Atomic design. So, by default, assuming a new component is the smallest unit.
export default {
  title: "Molecules/${componentName}",
  component: ${componentName},
  argTypes: {
    // any default props
  },
} as Meta;

const Template: Story<${componentName}Props> = (args) => <${componentName} {...args} />;

// DEFINE YOUR TYPES OF STORIES HERE WITH WHATEVER ARG PROPS YOU WANT TO TEST

export const Default = Template.bind({});

Default.args = {
  title: "This is a sample title",
  description: "This is a sample description",
};

export const NoDescription = Template.bind({});

NoDescription.args = {
  title: "This is a sample title",
};

`,
  extension: `.stories.tsx`,
  directory: `/stories/`
});
