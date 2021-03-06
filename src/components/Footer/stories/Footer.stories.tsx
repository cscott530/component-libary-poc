// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Footer } from "../src";
import { FooterProps } from "../src";

// We're following Atomic design. So, by default, assuming a new component is the smallest unit.
export default {
  title: "Molecules/Footer",
  component: Footer,
  argTypes: {
    // any default props
  },
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

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

