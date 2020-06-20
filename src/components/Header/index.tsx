import * as React from 'react';
import { Header, Title, Description } from './style';

interface DefaultModel {
  title?: string;
  description?: string;
}

export default (props: DefaultModel) => {
  const { title, description } = props;
  return (
    <Header>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Header>
  );
};
