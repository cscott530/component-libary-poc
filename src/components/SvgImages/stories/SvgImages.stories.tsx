// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { SvgImages } from "../src";
import { SvgImagesProps } from "../src";

export default {
  title: "Components/SvgImages",
  component: SvgImages,
  argTypes: {
    // any default props
  },
} as Meta;

const Template: Story<SvgImagesProps> = (args) => <SvgImages {...args} />;

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

