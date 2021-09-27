import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextInput, TextInputProps } from '../src';

const meta: Meta = {
  title: 'Molecules/II Text Input',
  component: TextInput,
  parameters: {
    children: {
      control: {
        type: 'text',
      },
    },    
    controls: { expanded: true }
  },
};

export default meta;

const Template: Story<TextInputProps> = args => <TextInput {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
