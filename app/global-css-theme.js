import { createGlobalStyle } from 'styled-components';

const GlobalTheme = createGlobalStyle`
    :root {
        /** Colors */
        --primary-dark: #121212;
        --secondary-dark: #222327;
        --primary-gray: #838383;
        --primary-light: #ffffff;
        --dim-blue: #6eb8ff;
        --primary-white:#FFFFFF;
        --dark-blue:#2990EB;
        --blue: blue;


        /** Typography */
        font-size: 14px;
        --primary-text-size: 1.25rem;
        --secondary-text-size: 1rem;


        /** spacing */
        --primary-spacing: 1rem;

        /**font*/
        --primary-font-family:"Vazir FD";
    }
`;

export default GlobalTheme;
