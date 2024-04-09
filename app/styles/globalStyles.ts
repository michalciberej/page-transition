'use client';

import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1d1d1d;
    color: #e5e4e0;
    width: 100%;
    height: 100dvh;
    text-align: center;

    main {
      height: 100%;
    }

    section {
      min-height: 100%;
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
