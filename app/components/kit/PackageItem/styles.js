import styled from 'styled-components';
import responsive from '../../../responsive';

export const PackageContainer = styled.section`
  position: relative;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0rem 1rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  background-color: var(--gray-light);
  border-radius: 10px;
  color: var(--primary-dark);
  padding: 1rem 0.4rem;
  font-weight: 500;
  border: 1px;
  font-size: smaller;
  @media ${responsive.tablet} {
    height: 10vh;
    width: 70%;
    margin: auto;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    padding: 1rem 1rem;
    font-weight: bold;
    font-size: unset;
  }
`;

export const DescriptionArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TitlePackage = styled.div`
  padding: 0 1rem;
  margin-bottom: 0.5rem;
`;
export const DescriptionPackage = styled.div`
  color: var(--primary-danger);
  font-size: 10px;
`;
export const PriceArea = styled.div`
  color: var(--dark-blue);
  align-self: center;
  justify-self: center;
`;
export const PriceAreaOff = styled.div`
  text-decoration: line-through;
`;
export const ButtonWrapper = styled.div`
  padding: 0;
  @media ${responsive.tablet} {
    padding: 2rem 2rem;
  }
`;
