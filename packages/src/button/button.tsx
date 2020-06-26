import * as React from 'react';

interface DefaultModel extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
  size?: string;
  href?: string;
  outline?: boolean;
  rounded?: boolean;
  laoding?: boolean;
  onClick?: () => void;
}

export default ({ children, href, theme, outline, size, rounded, laoding, ...props }: DefaultModel) => {
  if (href){
    return (
      <a
        href={href}
        onClick={props.onClick}
        className={
          (theme ? ("ini-btn-" + (outline ? ("o-" + theme) : theme)) : "") +
          (size ? (" ini-btn-" + size) : "") +
          (rounded ? " rounded" : "") +
          (props.disabled ? " disabled" : "") +
          (laoding ? " laoding" : "") +
          (props.className ? (" " + props.className) : "")
        }
      >{children}</a>
    );
  }
  return (
    <button
      {...props}
      className={
        (theme ? ("ini-btn-" + (outline ? ("o-" + theme) : theme)) : "") +
        (size ? (" ini-btn-" + size) : "") +
        (rounded ? " rounded" : "") +
        (laoding ? " laoding" : "") +
        (props.className ? (" " + props.className) : "")
      }
    >
      {children}
    </button>
  );
};
