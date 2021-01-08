import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  padding: 16px 32px;
  background: #00ea87;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  color: #2c3834;
  align-self: center;
  transition: background-color 200ms;

  &:hover {
    background-color: ${shade(0.1, '#00ea87')};
  }
`;
