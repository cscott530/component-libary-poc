import * as React from 'react';
import { Form } from './form.styled';

export interface FormProps {
  theme?: 'light' | 'dark';
  children?: JSX.Element | JSX.Element[]
}

export const IIForm: React.FC<FormProps> = ({ theme, ...rest }) => {
  return <Form theme={theme}>{rest.children}</Form>;
};

IIForm.defaultProps = {
  theme: 'light',
  children: <></>
};
