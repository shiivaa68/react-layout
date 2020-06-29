import { createGlobalStyle } from 'styled-components';

const GlobalTheme = createGlobalStyle`
    :root {
        /** Colors */
        --primary-dark: #101010;
        --secondary-dark: #222327;
        --primary-gray: #838383;
        --primary-light: #ffffff;
        --dim-blue: #6eb8ff;
        --primary-white:#FFFFFF;

        --blue: blue;


        /** Typography */
        font-size: 14px;
        --primary-text-size: 1.25rem;
        --secondary-text-size: 1rem;


        /** spacing */
        --primary-spacing: 1rem;

        /**font*/
        --primary-White-Color:"Vazir FD";
    }
`;

export default GlobalTheme;
