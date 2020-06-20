import styled from 'styled-components';

export const Navbar = styled.nav`
  background: black;
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  position: sticky;
  top: 0;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  span{
    font-size: 22px;
    font-weight: 100;
    margin-left: 8px;
    color: white;
  }
`;