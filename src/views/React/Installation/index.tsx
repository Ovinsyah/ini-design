import * as React from 'react';
import Layout from '../../../layouts/Dashboard';
import Markdown from '../../../components/Markdown';

export default () => {
  return (
    <Layout title="Installation" description="How to include ini design to your project">
      <Markdown>npm install ini-design</Markdown>
      <Markdown>yarn add ini-design</Markdown>
    </Layout>
  );
};
