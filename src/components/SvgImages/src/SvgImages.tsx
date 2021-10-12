// Generated with util/create-component.js
import React from 'react';

// Import Props
import { SvgImagesProps } from './SvgImages.types';

// Import Styled Components
import {
  SvgImagesWrapper,
  SvgImagesHeading,
  SvgImagesDescription,
} from './SvgImages.styles';

export const SvgImages: React.FC<SvgImagesProps> = ({ title, description }) => (
  <SvgImagesWrapper data-testid="SvgImagesID">
    <SvgImagesHeading>{title}</SvgImagesHeading>
    <SvgImagesDescription>{description}</SvgImagesDescription>
  </SvgImagesWrapper>
);
