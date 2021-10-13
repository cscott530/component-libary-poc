// Generated with util/create-component.js
import React from 'react';

// Import Props
import { SvgIconsProps } from './SvgIcons.types';

// Import Styled Components
import {
  SvgIconsWrapper,
  SvgIconsHeading,
  SvgIconsDescription,
} from './SvgIcons.styles';

export const SvgIcons: React.FC<SvgIconsProps> = ({ title, description }) => (
  <SvgIconsWrapper data-testid="SvgIconsID">
    <SvgIconsHeading>{title}</SvgIconsHeading>
    <SvgIconsDescription>{description}</SvgIconsDescription>
  </SvgIconsWrapper>
);
