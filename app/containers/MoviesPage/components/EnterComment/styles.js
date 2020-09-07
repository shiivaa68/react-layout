import styled from 'styled-components';

export const ButtonsGroup = styled.div`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  & > button {
    all: unset;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    margin-bottom:2rem;
    font-size: 1rem;
  }
`;


export const ErrorContainer = styled.div`
width: 80%;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
background-color:var(--primary-danger);
padding:1rem;
border-radius:5px;
`;



export const CommentBox = styled.article`
  min-height: 20vh;
  width:80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color:var(--side-bg);
  padding:2rem;
`;

export const Imgprofile=styled.div`
width:50px;
height:50px;
font-size: 1rem;
border-radius:80px;
background-color:white;
margin-bottom:2rem;
margin-left:2rem;

`;

