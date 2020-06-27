import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavBar = styled.header`
min-height:80px;
width:100vmax;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
padding-left:2.25rem;
padding-right:2.25rem;
background: linear-gradient(
    to bottom,
    rgba(18, 18, 18, 1),
    rgba(18, 18, 18, 0)
  );
`;

export const HeaderDetail = styled.section`
width:fit-content;
background-color:green;
display:flex;
justify-content:space-between;
align-items:center;

& button {
    margin:0 0.5rem;
}
`;

export const HeaderLogo = styled.div`
width:60px;
height:40px;
background-color:yellow;
display:flex;
justify-content:center;
align-items:center;
`;

export const HeaderMenu = styled.div`
width:fit-content;
background-color:red;
display:flex;
justify-content:flex-start;
align-items:center;
`;

export const  SearchIcon = styled.div`
width:48px;
height:48px;
background-color:green;
display:flex;
justify-content:center;
align-items:center;
`;

export const HeaderLink = styled(Link)`
display:inline-flex;
padding:0.25em 2em;
margin:1em;
text-decoration:none;
border-radius:4px;
-webkit-font-smoothing: antialiased;
-webkit-touch-callout: none;
user-select:none;
cursor:pointer;
outline:0;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-size:16px;
border: 2px solid #41addd;
color:#41addd;

&:active{
    background:#41addd;
    color:#fff;
}
`;