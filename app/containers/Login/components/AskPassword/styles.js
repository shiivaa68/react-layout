import styled from 'styled-components';

export const LoginWrapper = styled.article`
  width: 100%;
  max-width: 500px;
  * {
    font-family: var(--primary-font);
  }
`;

export const LoginBox = styled.section`
  max-width: 450px;
  margin: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: var(--primary-font);
`;

export const LoginButtonsGroup = styled.div`
  max-width: 500px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  & > button {
    width: 35%;
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

export const WrapperBack = styled.div`
margin:1rem;
direction:ltr;
padding:2rem;

`;