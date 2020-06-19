import * as React from 'react';

interface DefaultModel{
  children: React.ReactNode;
  theme?: string;
  className?: string;
  size?: string;
  outline?: boolean;
  rounded?: boolean;
  disabled?: boolean;
}

export default (props: DefaultModel) => {
  const { children, theme, className, size, outline, rounded, disabled } = props;
  return (
    <button
      disabled={disabled}
      className={
        (theme ? ("ini-btn-"+ (outline ? ("o-"+ theme) : theme)) : "")+
        (size ? (" ini-btn-"+size) : "")+
        (rounded ? " ini-btn-rounded" : "")+
        (className ? (" "+className) : "")
      }
    >{children}</button>
  )
}
