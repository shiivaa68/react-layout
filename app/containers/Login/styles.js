import styled from 'styled-components';

export const LoginWrapper = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--primary-light);
`;

export const ImgLogin = styled.div`
width: 400px;
height: fit-content;
  & > img {
    width: 100%;
    max-width: 800px;
    height: 100%;
  }
  margin-bottom: 2rem;
`;