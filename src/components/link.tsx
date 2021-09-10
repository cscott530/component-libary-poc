import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const Link = styled.a`
  border-bottom-width: 1px;
  border-bottom-color: rgb(233, 16, 25);
  border-bottom-style: solid;
  text-decoration: none;
  color: inherit;
  font-family: Arial sans-serif;
  font-size: xx-large;
`;

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
