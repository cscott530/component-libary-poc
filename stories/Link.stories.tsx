import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IILink, LinkProps } from '../src/components/link';

const meta: Meta = {
  title: 'II Link',
  component: IILink,
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

const Template: Story<LinkProps> = args => <IILink {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
