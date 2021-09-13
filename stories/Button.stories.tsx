import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IIButton, ButtonProps } from '../src/components/button';

const meta: Meta = {
  title: 'Components/II Button',
  component: IIButton,
  argTypes: {
    onClick: { action: 'clicked' }
  },
  parameters: {
    controls: { expanded: true }
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <IIButton {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

export const Primary = Template.bind({});
Primary.args = {primary: true, text: 'Primary button' };