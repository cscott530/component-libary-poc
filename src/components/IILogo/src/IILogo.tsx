// Generated with util/create-component.js
import React from 'react';

// Import Props
import { IILogoProps } from './IILogo.types';

// Import Styled Components
import {
  IILogoWrapper,
  IILogoHeading,
  IILogoDescription,
} from './IILogo.styles';

export const IILogo: React.FC<IILogoProps> = ({ title, description }) => (
  <IILogoWrapper data-testid="IILogoID">
    <IILogoHeading>{title}</IILogoHeading>
    <IILogoDescription>{description}</IILogoDescription>
  </IILogoWrapper>
);
