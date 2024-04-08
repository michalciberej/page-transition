'use client';

import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body {
    background-color: #1d1d1d;
    color: #e5e4e0;
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: red;
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
