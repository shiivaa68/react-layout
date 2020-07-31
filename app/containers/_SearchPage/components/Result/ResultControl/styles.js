import styled from 'styled-components';

export const ButtonWrapper = styled.section`
width:100vw;
min-height:70px;
 position:relative;
 display:flex;
 justify-content:flex-start;
 flex-direction:row;
 padding: 0 3rem;
 background-color:blue;

`;

export const ButtonControl = styled.div`
 & > Button {
     font-size:1.3rem;
 }
`;




