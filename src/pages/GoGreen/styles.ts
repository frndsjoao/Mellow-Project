import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  align-items: center;
  margin-bottom: 70px;

  > img {
    margin: 30px 60px;
    height: 800px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: initial;
  margin-top: 150px;

  div {
    width: 500px;
    margin: 0 100px;

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

    div.sponsors {
      margin: 0;

      > img {
        width: 100px;

        & + img {
          margin-left: 50px;
        }
      }
    }
  }
`;
