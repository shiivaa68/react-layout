import styled from 'styled-components';

export const LoginWrapper = styled.article`
  width: 100%;
  height: 100vh;
  background-color: 'red';
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-light);
`;

export const LoginBox = styled.section`
  width: 500px;
  height: fit-content;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const LoginButtonsGroup = styled.div`
  width: 100%;
  height: 135px;
  background-color: yellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  & > button {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
`;
