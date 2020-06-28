import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    direction: rtl;
  }

  body {
    font-family: 'Vazir FD','Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Vazir FD','Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: var(--primary-dark);
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
