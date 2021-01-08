import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;

  position: relative;

  > img {
    width: 370px;
    height: 550px;
    background-size: cover;
    object-fit: cover;

    border-radius: 10px;
    z-index: 3;
  }
`;

export const InfoContent = styled.div`
  width: 368px;
  height: 510px;
  background: #fff;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 0 10px 10px 0;

  h2 {
    font-family: 'PT Serif', serif;
    font-size: 26px;
    font-weight: bold;
    color: #7b7b7b;
  }

  p {
    font-family: 'PT Serif', serif;
    font-size: 16px;
    font-weight: normal;
    color: #3b3b3b;
    padding: 35px 20px;
  }
`;

// &:hover ~ img {
//   transform: translateX(10%);
// }

// &:hover {
//   transform: scale(1.1) !important;
// }
