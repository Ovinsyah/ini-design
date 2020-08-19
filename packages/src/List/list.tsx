import React from 'react';

interface DefaultModel extends React.HTMLAttributes<HTMLElement> {
  list?: string[];
  listStyle?: string;
}
export default ({list, listStyle, ...props}: DefaultModel) => {
  return (
    <ul
    {...props}
      className={
        "ini-list" +
        (listStyle ? ` ${listStyle}` : "") +
        (props.className ? ` ${props.className}` : "")
      }>
      {list?.map((item, key) => <li key={key}>{item}</li>)}
      {!list && props.children}
    </ul>
  );
};
