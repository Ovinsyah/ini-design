import * as React from 'react';
import { Section, Article, SectionSidebar, Content } from './style';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

interface DefaultModel {
  children: React.ReactNode;
  title?: string;
  description?: string;
  inicss?: boolean;
}

export default (props: DefaultModel) => {
  const { children, title, description, inicss } = props;
  return (
    <Section>
      <Article>
        <SectionSidebar><Sidebar inicss={inicss} /></SectionSidebar>
        <Content>
          <Header title={title} description={description}  />
          {children}
        </Content>
      </Article>
    </Section>
  );
};
