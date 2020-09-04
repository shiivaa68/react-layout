import styled from 'styled-components';
import responsive from 'responsive';

export const CountryWrapper = styled.section`
  padding: 1.25rem;
  height: 100%;
  @media ${responsive.tablet} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  max-height: 375px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #37383d; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

