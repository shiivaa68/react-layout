import styled from 'styled-components';

export const LoginWrapper = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--primary-light);
  font-size: ${props => props.isMobile ? 'small'  : 'inherit'};
`;

export const ImgLogin = styled.div`
width: 400px;
height: fit-content;
  & > img {
    width:70%;
    max-width: 400px;
    height: 100%;
    margin-top: 15px;
  }
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;