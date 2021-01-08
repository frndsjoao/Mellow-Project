import styled from 'styled-components';

export const Container = styled.div`
  height: 78vh;
`;

export const TextContent = styled.div`
  margin: 100px 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    font-size: 46px;
    font-weight: normal;
    padding-bottom: 30px;
  }

  > p {
    font-size: 18px;
    line-height: 30px;
    text-align: center;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  margin: 40px 0 20px;

  display: flex;
  justify-content: space-between;

  /* &:hover img {
    transform: translateX(-10%);
  } */
`;
