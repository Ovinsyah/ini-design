import styled from 'styled-components';

export const Section = styled.div`
  padding: 24px;
`;
export const HeaderLogo = styled.div`
  margin-bottom: 16px;
`;
export const Menus = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  .list{
    &:not(:last-child){
      margin-bottom: 12px;
    }
  }
  a{
    display: block;
    display: block;
    margin-left: 10px;
    padding: 12px 0px;
    font-weight: 300;
  }
`;
export const TitleMenu = styled.div`
  font-weight: 500;
  font-size: 16px;
`;