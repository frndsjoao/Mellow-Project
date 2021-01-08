import styled from 'styled-components';

export const Container = styled.div`
  background: #2bcfa2;
  height: 100vh;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 60px;

  > img {
    margin-right: 40px;
    height: 850px;
  }
`;

export const Content = styled.div`
  color: #fff;

  > h1 {
    font-size: 46px;
    font-weight: 400;
    padding-bottom: 20px;
  }

  > p {
    font-size: 18px;
    line-height: 30px;
    padding-bottom: 40px;
    width: 700px;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
