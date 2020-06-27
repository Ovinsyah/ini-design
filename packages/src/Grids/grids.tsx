import React from 'react';

interface GridsModel extends React.HTMLAttributes<HTMLElement> {}
interface GridModel extends React.HTMLAttributes<HTMLElement> {
  width?: number;
  xSmallWidth?: number;
  smallWidth?: number;
  mediumWidth?: number;
  largeWidth?: number;
  xLargeWidth?: number;
}

export const Grids = ({ ...props }: GridsModel) => {
  return <div {...props} className={"ini-grids" + (props.className ? (" " + props.className) : "")}>{props.children}</div>;
};

export const Grid = ({ width, xSmallWidth, smallWidth, mediumWidth, largeWidth, xLargeWidth, ...props} : GridModel) => {
  return (
    <div
      className={
        "ini-grid" +
        (width ? ` is-${width}` : "") +
        (xSmallWidth ? ` xsmall-${xSmallWidth}` : "") +
        (smallWidth ? ` small-${smallWidth}` : "") +
        (mediumWidth ? ` medium-${mediumWidth}` : "") +
        (largeWidth ? ` large-${largeWidth}` : "") +
        (xLargeWidth ? ` xlarge-${xLargeWidth}` : "") +
        (props.className ? (" " + props.className) : "")}
      >{props.children}</div>
  );
};
