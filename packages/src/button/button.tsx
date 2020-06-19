import * as React from 'react';

interface DefaultModel{
  children: React.ReactNode;
  theme?: string;
}

export default (props: DefaultModel) => {
  const { children, theme } = props;
  return (
    <button className={theme ? `ini-btn-${theme}`: ''}>{children}</button>
  )
}
