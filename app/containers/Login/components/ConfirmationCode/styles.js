import styled from 'styled-components';

export const RegisterFormWrapper = styled.article`
  width: 100%;
  max-width: 500px;
  * {
    font-family: var(--primary-font);
  }
`;

export const RegisterBox = styled.div`
  max-width: 450px;
  margin: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: var(--primary-font);
  input::placeholder {
    font-size: 1rem;
    top: -5px;
    direction: rtl;
    position: relative;
  }
`;

export const ErrorContainer = styled.div`
  margin-bottom: 2rem;
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-danger);
  padding: 1rem;
  border-radius: 5px;
`;

export const WrapperBack = styled.div`
width: 90%;
direction:ltr;
`;

export const LoginButtonsGroup = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  & > button {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    font-size: 0.9rem;
  }
`;
export const WrapperCounter = styled.h2`

`;
export const FakeWrap=styled.div`
width: 100%;
box-sizing: border-box;
text-align: center;
font-size: 0.9rem;

`;
