import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
from {
  opacity: 0;
  transform: translateY(30px);
}
to {
  opacity: 1;
  transform: translateY(0);
}`;

export const Container = styled.div`
  width: 260px;
  height: 400px;
  background: #fff;
  color: #2c3834;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  padding: 30px;
  position: relative;

  display: flex;
  flex-direction: column;

  animation: ${appearFromBottom} 1s;
  transition: transform 300ms ease 100ms;

  & + div {
    margin-left: 20px;
  }

  &:hover {
    transform: scale(1.05);
  }

  > h2 {
    font-size: 26px;
    font-weight: 500;
    color: #00a35e;
  }

  > p {
    font-size: 12px;
    font-weight: 500;
    color: #df3558;
  }

  > img {
    width: 100px;
    height: 100px;
    align-self: center;
    margin: 20px;
  }

  button {
    position: absolute;
    bottom: calc(0% - 20px);
  }
`;

export const Infos = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 14px;
    font-weight: 400px;
    line-height: 24px;
  }
`;
