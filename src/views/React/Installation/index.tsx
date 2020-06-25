import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Layout from '../../../layouts/Dashboard';

export default () => {
  return (
    <Layout title="Installation" description="Ini Installation">
      <SyntaxHighlighter language="javascript" style={dracula}>
        npm i ini-design
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={dracula}>
        yarn add ini-design
      </SyntaxHighlighter>
    </Layout>
  );
};
