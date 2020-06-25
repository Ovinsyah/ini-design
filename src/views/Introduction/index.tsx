import * as React from 'react';
import Layout from '../../layouts/Dashboard';
import { Article } from './style';


export default (props: {isInicss?: boolean}) => {
  const description = `Build your beautiful website quickly using IniDesign. We have provided a guide that you can learn on our site. guidelines that we provide in the form of foundation and components.`;
  return (
    <Layout inicss={props.isInicss} title="Introduction" description={description}>
      <Article>
        <img src="/images/schema-foundation.svg" alt="Schema foundation" />
      </Article>
    </Layout>
  );
};
