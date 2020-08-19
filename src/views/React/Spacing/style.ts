import styled from 'styled-components';

export const Box = styled.div`
  background: black;
  width: fit-content;
  margin: auto;
`;
export const Item = styled.div`
  background: white;
  height: 10px;
  width: 10px;
`;
export const BoxContent = styled.div`
  background: whitesmoke;
  padding: 20px;
  width: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  &:not(:last-child){
    margin-right: 8px;
  }
`;
export const Title = styled.div`
  margin-top: 8px;
`;
export const Desc = styled.div`
  font-size: 12px;
  color: #9d9d9d;
`;