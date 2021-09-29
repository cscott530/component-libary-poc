import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IIForm, FormProps } from '../src';

const meta: Meta = {
  title: 'Atoms/Form',
  component: IIForm,
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

const Template: Story<FormProps> = args => <IIForm {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  theme: 'light'
};

export const DarkTheme = Template.bind({});

DarkTheme.args = {
  theme: 'dark'
};
