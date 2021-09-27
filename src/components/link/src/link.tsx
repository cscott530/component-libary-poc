import React, { FC, AnchorHTMLAttributes } from 'react';
import Link from './link.styled';

/**
 * Link Properties
 */
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
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
  return <Link {...rest}>{text}</Link>;
};

IILink.defaultProps = {
  text: 'Link Text Here',
  href: '#'
}