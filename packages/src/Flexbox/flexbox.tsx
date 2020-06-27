import React from 'react';

interface DefaultModel extends React.HTMLAttributes<HTMLElement> {
  flexDirection?: string;
  alignItems?: string;
  alignContent?: string;
  flexWrap?: string;
  justifyItems?: string;
  justifyContent?: string;
  fullHeight?: boolean;
}
export default ({flexDirection, alignItems, alignContent, flexWrap, justifyItems, justifyContent, fullHeight, ...props }: DefaultModel) => {
  return (
    <div
      className={
        "ini-flex" +
        (flexDirection ? ` flex-direction-${flexDirection}` : "") +
        (alignItems ? ` align-items-${alignItems}` : "") +
        (alignContent ? ` align-content-${alignContent}` : "") +
        (flexWrap ? ` flex-wrap-${flexWrap}` : "") +
        (justifyItems ? ` justify-items-${justifyItems}` : "") +
        (justifyContent ? ` justify-content-${justifyContent}` : "") +
        (fullHeight ? ` ini-h-100` : "")
      }
    >{props.children}</div>
  );
};