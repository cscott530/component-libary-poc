import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const Button = styled.button<{
    rounded?: boolean,
    fontWeight?: number,
    primary?: boolean
}>`
    padding: 5px;
    border: 1px solid black;
    border-radius: ${({rounded}) => rounded ? '50px' : '0' };
    font-weight: ${({fontWeight}) => fontWeight || 400 };
    background-color: ${({primary}) => primary ? `rgb(0, 126, 255)` : 'white'};
    color: ${({primary}) => primary ? 'white' : 'rgb(0,126,255)'}
`;

/**
 * Button Properties
 */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** custom content, 
   * @default Button Text Here */
  text: string,
  /**
   * Whether or not the button border should be rounded. Defaults to `false`
   * @default `false`
   */
  rounded?: boolean,
  /**
   * Font weight of the button text (proof of concept)
   * 
   * @default 400
   */
  fontWeight?: number,

  /**
   * Whether to display this is as a 'primary' button
   * 
   * @default false
   */
  primary?: boolean
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * Trying out a custom button component
 * @author Insider Intelligence
 */
export const IIButton: FC<ButtonProps> = ({ text, rounded, fontWeight, primary, ...rest }) => {
  return <Button rounded={rounded} fontWeight={fontWeight} primary={primary} {...rest}>{text || `Button Text Here`}</Button>;
};
