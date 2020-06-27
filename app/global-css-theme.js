import { createGlobalStyle } from 'styled-components';

const GlobalTheme = createGlobalStyle`
    :root {
        /** Colors */
        --primary-dark: #292923;
        --secondary-dark: #222327;
        --primary-gray: #838383;
        --primary-light: #ffffff;
        --dim-blue: #6eb8ff;
        

        --blue: blue;


        /** Typography */
        font-size: 18px;
        --primary-text-size: 1.25rem;
        --secondary-text-size: 1rem;


        /** spacing */
        --primary-spacing: 1rem;
    }
`;

export default GlobalTheme;
