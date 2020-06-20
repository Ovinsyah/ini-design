import styled from 'styled-components';

export const Section = styled.section`
`;
export const Article = styled.article`
  display: flex;
`;
export const SectionSidebar = styled.div`
  flex: 1;
  height: calc(100vh - 64px);
  max-width: 240px;
  padding: 24px;
  border-right: 1px solid #eaeaea;
  position: sticky;
  top: 64px;
  overflow: auto;
`;
export const Content = styled.div`
  flex: 1;
  padding: 24px;
`;