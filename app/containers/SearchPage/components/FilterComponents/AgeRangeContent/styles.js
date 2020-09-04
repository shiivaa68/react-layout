import styled from 'styled-components';
import responsive from 'responsive';

export const AgeRangeWrapper = styled.section`
padding:1.25rem;
height: 29rem;
overflow: auto;
@media ${responsive.tablet} {
    height:100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;