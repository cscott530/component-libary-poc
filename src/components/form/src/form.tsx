import * as React from 'react';
import { Form } from './form.styled';
export interface FormProps {
  theme?: 'light' | 'dark'
}

export const IIForm: React.FC<FormProps> = ({
  theme,
  ...rest
}) => {
  return (<Form theme={theme}>
    {rest.children}
    <label>
      Input:
      <input type="text" placeholder="Input with Placeholder" />
    </label>
  </Form>);
};

IIForm.defaultProps = {
  theme: 'light'
};