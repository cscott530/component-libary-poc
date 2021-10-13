// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  Check, 
  Facebook as FacebookSvg, 
  Twitter as TwitterSvg, 
  LinkedIn as LinkedInSvg, 
  Envelope as EnvelopeSvg, 
  NewsLetterChart as NewsLetterChartSvg, 
  AuthorBrandDesktop as AuthorBrandDesktopSvg, 
  AuthorBrandMobile as AuthorBrandMobileSvg 
} from '../src';

let _empty: React.FC<{}> = () => <div />;

// We're following Atomic design. So, by default, assuming a new component is the smallest unit.
export default {
  title: "Molecules/Icons",
  component: _empty,
  argTypes: {
    // any default props
  },
} as Meta;

const CheckTemplate: Story = () => <Check />;
export const Checkmark = CheckTemplate.bind({});

const FacebookTemplate: Story = () => <FacebookSvg />;
export const Facebook = FacebookTemplate.bind({});

const TwitterTemplate: Story = () => <TwitterSvg />;
export const Twitter = TwitterTemplate.bind({});

const LinkedInTemplate: Story = () => <LinkedInSvg />;
export const LinkedIn = LinkedInTemplate.bind({});

const EnvelopeTemplate: Story = () => <EnvelopeSvg />;
export const Envelope = EnvelopeTemplate.bind({});

const NewsLetterChartTemplate: Story = () => <NewsLetterChartSvg />;
export const NewsLetterChart = NewsLetterChartTemplate.bind({});
NewsLetterChart.storyName = "Newsletter Chart";

const AuthorBrandDesktopTemplate: Story = () => <AuthorBrandDesktopSvg />;
export const AuthorBrandDesktop = AuthorBrandDesktopTemplate.bind({});
AuthorBrandDesktop.storyName = "Author Brand/Desktop";


const AuthorBrandMobileTemplate: Story = () => <AuthorBrandMobileSvg />;
export const AuthorBrandMobile = AuthorBrandMobileTemplate.bind({});
AuthorBrandMobile.storyName = "Author Brand/Mobile";