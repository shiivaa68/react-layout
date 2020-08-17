import styled, { css } from 'styled-components';

export const PackageContainer = styled.section`
  position: relative;
  width: 70%;
  height: 10vh;
  display: flex;
  justify-content:space-between;
  align-items: center;
  flex-direction: row;
  margin: 1rem 1rem;
  background-color:var(--gray-light);
  border-radius: 10px;
  color:var(--primary-dark);
  padding:1rem 1rem;
  font-weight: bold;
   border:1px;
`;

export const DescriptionArea = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
flex-direction: column;

`;
export const TitlePackage = styled.div`
  padding: 0 1rem;
  margin-bottom:0.5rem;
`;
export const DescriptionPackage=styled.div`
color: var(--primary-danger);
font-size:10px;
`;
export const PriceArea = styled.div`
color: var(--dark-blue);
`;
export const PriceAreaOff = styled.div`
text-decoration: line-through;
`;
export const ButtonWrapper=styled.div`
padding: 2rem 2rem;

`;
