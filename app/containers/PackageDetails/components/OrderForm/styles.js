import styled, { css } from 'styled-components';

export const PackageContainer = styled.section`
  position: relative;
  width: 50%;
  height: 80vh;
  display: flex;
  justify-content:space-between;
  align-items: center;
  flex-direction:column;
  background-color:var(--light);
  border-radius: 10px;
  color:var(--primary-dark);
  padding:2rem;
  font-weight: bold;
   border:1px;

`;
export const TitlePackage = styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content:center;
align-items: center;
font-size:1.5rem;
border-bottom: 1px solid #E0E0E0;
`;

export const DescriptionArea = styled.div`
width: 100%;
height: 20vh;
display: flex;
 justify-content:space-between;
 padding:2rem;
align-items: center;

border-bottom: 2px solid  #E0E0E0;


`;

export const DescriptionTitle=styled.div`
 display: flex;
 justify-content:space-between;
 padding:0.5rem;
 align-items: flex-start;
 flex-direction:column;
 color: var(--primary-danger);
`;
export const DescriptionPrice = styled.div`
color: var(--dark-blue);
display: flex;
justify-content:space-between;
padding:0.5rem;
align-items: flex-start;
flex-direction:column;

`;
export const ButtonWrapper=styled.div`
display: flex;
justify-content:flex-start;
padding:3rem;
align-items: flex-start;
flex-direction:column;
`;


export const ContainerCode = styled.div`
width: 100%;
height: 30vh;
display: flex;
 justify-content:space-between;
 flex-direction:column;
 padding:2rem;
align-items: flex-start;
border-radius: 10px;

`;
export const Textcode=styled.div`
display: flex;
justify-content:flex-start;
padding:0.5rem;
align-items: flex-start;
flex-direction:column;


`;
export const Title=styled.div`
color: var(--primary-danger);
padding-bottom:1rem;
`;
export const TitlePage=styled.div`
padding-bottom:2rem;
margin:0;
`;

export const WraperInput=styled.div`
display:flex;
justify-content:space-between;
padding-right:1rem;
`;