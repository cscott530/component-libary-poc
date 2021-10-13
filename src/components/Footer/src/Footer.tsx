// Generated with util/create-component.js
import React from 'react';

// Import Props
import { FooterProps } from './Footer.types';

// Import Styled Components
import {
  FooterWrapper,
  FooterHeading,
  FooterDescription,
} from './Footer.styles';

export const Footer: React.FC<FooterProps> = ({ title, description }) => (
  <FooterWrapper data-testid="FooterID">
    <FooterHeading>{title}</FooterHeading>
    <FooterDescription>{description}</FooterDescription>
  </FooterWrapper>
);
