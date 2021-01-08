import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f9f9f9;
    color: #2c3834;
    -webkit-font-smoothing: antialiased
  }

  body, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
  }

  h1, strong {
    font-family: 'DM Serif Display', serif;
    font-weight: 500
  }

  button {
    cursor: pointer;
  }

`;
