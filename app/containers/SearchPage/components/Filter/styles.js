import styled from 'styled-components';
import responsive from 'responsive';

export const FilterContainer = styled.section`
  padding-left: 1rem;
  width: 100vw;
  text-align: center;
  @media ${responsive.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const FilterNavBar = styled.section`
  padding: 0 0 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 0.625rem;
  flex-wrap: wrap;
  justify-content: space-around;
  @media ${responsive.tablet} {
    width: 75%;
    justify-content: unset;
  }
`;


export const Down_Arrow = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.625rem;
`;