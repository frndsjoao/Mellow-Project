import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #2bd0a2;

  display: flex;
  align-items: center;

  img {
    height: 600px;

    &:first-child {
      margin: 0 75px 0 150px;
    }
    &:last-child {
      margin-left: 200px;
    }
  }
`;

export const InfoContent = styled.div`
  color: #fff;

  h2 {
    font-size: 46px;
    font-weight: normal;
  }

  p {
    font-size: 18px;
    font-weight: normal;
    line-height: 32px;
    padding: 25px 0;
  }
`;
