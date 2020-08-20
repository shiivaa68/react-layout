import styled from 'styled-components';

export const RegisterStepOneWrapper = styled.article`
  width: 100%;
  margin:0px;
  padding:0px;
  
  * {
    font-family: var(--primary-font);
  }
`;

export const LoginBox = styled.section`
  width: 600px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: var(--primary-font);
   color:white;
   
`;

export const LoginButtonsGroup = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom:0.5rem;
  & > button {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    font-size: 0.90rem;
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