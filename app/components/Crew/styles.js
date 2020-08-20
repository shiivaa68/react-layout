import styled from 'styled-components';

export const CrewWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem 2rem;
  margin:6rem 2rem;
`;

export const ContainerCrew = styled.div`
height: 30%;
width: 95%;
display:flex;
flex-direction: row;
justify-content:  flex-start;
align-items: flex-start;
padding: 0rem 1rem;

`;

export const WrapperImg = styled.div`
  margin: 0.5em;
  overflow: hidden;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items:center;
  & > img {
    width: 160px;
    border-radius: 50%;
  }
`;

export const DescriptionCrew = styled.div`
  user-select: text;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items:flex-start;
  padding:2rem 2rem;
`;
export const TitleCrew =styled.h2`


`
export const Title = styled.h4`
  font-size: 1.5rem;
  
`;

export const Description = styled.h3`
padding: 0 0.75rem;
width:100%;
margin:1rem 0 ;
color: #aaaaaa;
`;
export const WrapperSuggest = styled.div`

display:flex;
flex-direction: column;
justify-content:  flex-start;
align-items: flex-start;

height: 100%;
width: 95%;
// background-color:gray;
`;

export const ContainerFilm = styled.div`
display:flex;
flex-direction: row;
justify-content:  flex-start;
align-items: flex-start;
height: 50%;
width: 95%;
// background-color:red;
`;
export const ContainerSeries = styled.div`
// background-color:orange;
display:flex;
flex-direction: row;
justify-content:  flex-start;
align-items: flex-start;
height: 50%;
width: 95%;


`;