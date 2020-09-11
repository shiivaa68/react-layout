import styled from 'styled-components';
import responsive from '../../../../responsive';


export const Container = styled.div`
  background-color: var(--side-bg);
  display:flex;
  felx-direction:column;
  justify-content: flex-start;
  min-height: 15vh;
  width:200%;
  background-color:#484b5a26;
 
`;

export const Image = styled.div`
  margin: 0.5em;
  overflow: hidden;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  & > img {
    cursor: pointer;
    width: 60px;
    border-radius: 50%;
  }
`;

export const Description = styled.div`

display:flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
flex-wrap: wrap;
  text-align: center;
  color: #aaaaaa;
  vertical-align: middle;
  font-size: 12px;
  min-height: 10%;
  width:80%;
  padding:1rem;
  user-select: text;

`;

export const Desuser = styled.div`
& > span {
  padding:0.75rem;
  
}
`;
export const Title = styled.h4`
  padding: 0 1rem;
`;

export const Text = styled.div`
margin:1rem;
font-size:1.15rem;
color:white;
`;


export const Favorite = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  height: 10%;
  & > div {
    padding: 0.25rem;

    & div img {
      filter: invert(100%);
    }
  }
`;
export const ReplyWrapper = styled.div`


padding:1rem 1rem;

// justify-content: space-between;
@media ${responsive.tablet} {
 justify-content: unset;
}


`;