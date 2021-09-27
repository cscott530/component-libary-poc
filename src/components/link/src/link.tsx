import React, { FC } from 'react';
import Link from './link.styled';

/**
 * Link Properties
 */
export interface LinkProps {
  /**
   * Text inside the link
   * @default Link Text Here
   */
  text: string,

  /**
   * Link's href
   * 
   * @default '#'
   */
  href: string
}

/**
 * Trying out a custom link component
 * @author Insider Intelligence
 */
export const IILink: FC<LinkProps> = ({text, ...rest}) => {
  return <Link {...rest}>{text}</Link>;
};

IILink.defaultProps = {
  text: 'Link Text Here',
  href: '#'
}