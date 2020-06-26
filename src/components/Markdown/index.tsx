import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface DefaultModel {
  children: React.ReactNode;
  language?: string;
  className?: string;
}

export default (props: DefaultModel) => {
  const { children, language, className } = props;
  return  <SyntaxHighlighter className={"markdown " + (className || "")} language={language || "javascript"} style={hybrid}>{children}</SyntaxHighlighter>;
};
