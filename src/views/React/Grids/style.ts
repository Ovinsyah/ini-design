import styled from 'styled-components';

interface BlockModel{
  gray?: boolean;
}

export const Block = styled.div<BlockModel>`
  background: ${props => props.gray ? "#666666" : "black"};
  height: 50px;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;