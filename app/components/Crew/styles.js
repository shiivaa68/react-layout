import styled from 'styled-components';
import responsive from 'responsive';

export const CrewWrapper = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 5rem;
  @media ${responsive.tablet} {
    padding: 2rem 1rem;
    margin:6rem 2rem;
    justify-content: unset;
  }
`;

export const ContainerCrew = styled.div`
width: 95%;
display:flex;
flex-direction: row;
justify-content:  flex-start;
align-items: flex-start;
padding: 0rem 2rem;
flex-wrap: wrap;
@media ${responsive.tablet} {
  padding: 0rem 1rem;
}
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
  @media ${responsive.tablet} {
    padding:2rem 2rem;
  }
`;
export const TitleCrew =styled.h2`


`
export const Title = styled.h4`
  font-size: 1.5rem;
  padding: 0 2rem;
  @media ${responsive.tablet} {
    padding: 0;
  }
`;

export const Description = styled.h3`
text-align: justify;
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

width: 95%;
// background-color:gray;
`;

export const ContainerFilm = styled.div`
width: 100%;
position: relative;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
section {
  width: 45%;
  max-width: 225px;
  height: unset;
  margin: unset
}
div {
  height: unset;
}
@media ${responsive.mobileM} {
  section {
    width: 30%;
  }
}

@media ${responsive.tablet} {
  justify-content: space-around;
  section {
    width: 225px;
  }
  padding: 0 2rem;
}
// background-color:red;
`;
export const ContainerSeries = styled.div`
width: 100%;
position: relative;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
section {
  width: 45%;
  max-width: 225px;
  height: unset;
  margin: unset
}
div {
  height: unset;
}
@media ${responsive.mobileM} {
  section {
    width: 30%;
  }
}

@media ${responsive.tablet} {
  justify-content: space-around;
  section {
    width: 225px;
  }
  padding: 0 2rem;
}
`;