// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { IILogo } from "../src";
import { IILogoProps } from "../src";

export default {
  title: "Components/IILogo",
  component: IILogo,
  argTypes: {
    // any default props
  },
} as Meta;

const Template: Story<IILogoProps> = (args) => <IILogo {...args} />;

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

