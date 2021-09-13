import React, { FC, HTMLAttributes } from 'react';
import Button from './button.styled';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** 
   * Text that goes inside the button 
   * @default Button Text Here 
   */
  text: string,
  /**
   * Whether or not the button border should be rounded. Defaults to `false`
   * @default false
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
};

/**
 * Custom Insider Intelligence-styled button
 * @author Insider Intelligence
 */
export const IIButton: FC<ButtonProps> = ({ text, rounded, fontWeight, primary, ...rest }) => {
  return <Button rounded={rounded} fontWeight={fontWeight} primary={primary} {...rest}>{text || `Button Text Here`}</Button>;
};
