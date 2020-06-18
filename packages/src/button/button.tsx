import * as React from 'react';
import { Button } from './style';

interface DefaultModel{
  children: React.ReactNode;
  theme?: string;
}

export default (props: DefaultModel) => {
  const { children, theme } = props;
  return (
    <Button theme={theme}>{children}</Button>
  )
}
