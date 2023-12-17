import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`;

export const Item = styled.li`
  border: 1px solid grey;
  border-radius: 8px;
  background-color: rgba(135, 177, 127, 0.4);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 12px;
`;

export const AccentText = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const Text = styled.p`
  font-style: oblique;
`;