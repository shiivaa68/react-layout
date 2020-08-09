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
  & > img {
    width: 100%;
    max-width: 500px;
    height: 100%;
  }
  margin-bottom: 2rem;
`;
