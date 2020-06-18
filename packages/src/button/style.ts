import styled, { css } from 'styled-components';
import color from '../../color';

interface ButtonModel{
  theme?: string;
}

const ButtonDefault = (bgColor?: string, hoverBgColor?: string, textColor?: string) => css`
  border-radius: .3rem;
  font-size: 1rem;
  padding: 0 .7rem;
  height: 36px;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  background: ${ bgColor || color.gray};
  border: 1px solid ${ bgColor || color.gray};
  color: ${textColor || color.dark};
  transition: all .3s;
  &:hover{
    background: ${hoverBgColor || color.darkGray};
    transition: all .3s;
  }
`;

export const Button = styled.button<ButtonModel>`
  ${props => props.theme === "primary" && css`
    ${ButtonDefault(color.primary, color.darkPrimary, "white")};
  `};
  ${props => !props.theme && css`
    ${ButtonDefault()};
  `};
`;