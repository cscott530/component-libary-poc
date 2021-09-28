import * as React from 'react';
import { Form } from './form.styled';
import { IIButton } from '../button';

export interface FormProps {
  theme?: 'light' | 'dark'
}

export const IIForm: React.FC<FormProps> = ({
  theme,
  ...rest
}) => {
  return (<Form theme={theme}>
    {rest.children}
    <div>
      <IIButton />
    </div>
  </Form>);
};

IIForm.defaultProps = {
  theme: 'light'
};