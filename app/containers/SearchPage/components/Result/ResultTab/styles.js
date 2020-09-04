import styled from 'styled-components';
import responsive from 'responsive';

export const TabWrapper = styled.section`
  width: 100%;
  min-height: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 2rem;
  & > button {
    font-size: 1.2rem;
    
  }



  @media ${responsive.tablet} {
    & > button {
      font-size: 1.3rem;
    }
  }
`;