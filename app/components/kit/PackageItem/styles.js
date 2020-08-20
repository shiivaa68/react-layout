import styled, { css } from 'styled-components';

export const PackageContainer = styled.section`
  position: relative;
  min-height: 100px;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr;
  background-color: var(--gray-light);
  border-radius: 10px;
  color: var(--primary-dark);
  font-weight: bold;
  padding: 1rem 1.5rem;
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
  align-self: center;
  justify-self: center;
`;
export const ButtonWrapper = styled.div`
  align-self: center;
  justify-self: center;
`;
