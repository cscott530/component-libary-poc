import React, { FC, HTMLAttributes } from 'react';
import Link from './link.styled';

/**
 * Link Properties
 */
export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  /**
   * Text inside the link
   * @default Link Text Here
   */
  text: string
}

/**
 * Trying out a custom link component
 * @author Insider Intelligence
 */
export const IILink: FC<LinkProps> = ({text, ...rest}) => {
  return <Link {...rest} href='#'>{text || 'Link Text Here'}</Link>;
};
