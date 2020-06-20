import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
`;
export const SectionGettingStarted = styled.div`
  display: flex;
  align-items: center;
`;
export const Header = styled.div`
  background: black;
  height: 70vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 30px;
  h1{
    margin: 0;
    font-size: 40px;
    font-weight: 200;
  }
  p{
    margin: 0 0 20px;
    font-weight: 200;
    font-size: 18px;
  }
`;
export const Button = styled(Link)`
  font-size: 16px;
  background: transparent;
  color: white;
  border: 1px solid white;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0px 30px;
  border-radius: 61px;
  outline: none;
  box-shadow: none;
  width: 200px;
  margin: 0 8px;
  cursor: pointer;
  transition: all .3s;
  &:hover{
    background: white;
    color: black;
    transition: all .3s;
  }
`;