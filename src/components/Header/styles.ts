import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #2bcfa2;

  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLinks = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.1, '#fff')};
    }
  }

  div {
    border: 2px solid #fff;
    border-radius: 50%;

    display: flex;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;

      border: 2px solid #2bcfa2;
    }
  }
`;
