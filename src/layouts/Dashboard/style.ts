import styled from 'styled-components';

export const Section = styled.section`
`;
export const Article = styled.article`
  display: flex;
`;
export const SectionSidebar = styled.div`
  flex: 1;
  height: 100vh;
  max-width: 220px;
  border-right: 1px solid #eaeaea;
  position: sticky;
  top: 0px;
  overflow: auto;
`;
export const Content = styled.div`
  flex: 1;
  padding: 32px;
  max-width: 1020px;
  margin: 0 auto;
`;