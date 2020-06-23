import { createGlobalStyle } from 'styled-components';

const GlobalTheme = createGlobalStyle`
    :root {
        /** Colors */
        --main-body-color: #292923;
        --primary: #E8212E;
        --secondary:#1DAFEC;
        --success: #9CCC65;
        --failure: #EF5350;
        --warning: #FFEE58;
        --black: #000000;
        --white: #ffffff;
        --backgroundGray: #f0f0f0;
        --whiteBackground: #FAFAFA;
        --grayBackground: #F5F5F5;
        --footerBackground: #797979;
        --gray: #787878;
        --lightGray: #A0A0A0;
        --darkGray: #5a5a61;
        --blue: #007aff;
        --green: #1DB954;
        --lightgreen: #1ED760;
        --secondaryGreen: #b3c238;
        --border: #DCDCDC;
        --disabled: #E6E6E6;
        --orange: #ff7800;
        --yellow: #ffd800;
        --whiteOpacity: rgba(255,255,255, 0.2);
        --boxShadow: 0 7px 15px rgba(0,0,0,0.06);
        --boxShadowHover: 0 15px 20px rgba(0, 0, 0, 0.1);

        /** Typography */
        font-size: 18px;
        --primary-text-size: 1.25rem;
        --secondary-text-size: 1rem;

        /** spacing */
        --primary-spacing: 1rem;

       /**breakpoint*/
       --breakpoint-sm:576;
       --breakpoint-md:768,
       --breakpoint-lg:992;
       --breakpoint-xl:1200;

       /**input */
       --fontSize-primiry:'14px',
       --fontWeight-normal:'normal',
       --fontWeight-bold:'bold',
    
    }
`;

export default GlobalTheme;
