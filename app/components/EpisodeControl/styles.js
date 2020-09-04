import styled from 'styled-components';
import responsive from '../../responsive';

export const ButtonWrapper = styled.section`
width:100vw;
min-height:70px;
 position:relative;
 display:flex;
 justify-content:flex-start;
 flex-direction:column;
 padding: 0 3rem;

`;

export const ButtonControl = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
 & > Button {
     font-size:1.3rem;
 }
 max-width: 200px;
`;




