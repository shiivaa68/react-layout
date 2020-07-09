import styled from 'styled-components';

export const ScreenShotWrapper = styled.section`
  position: relative;
  display: flex;
justify-content:flex-start;
// align-item:center;

`;

export const screen = styled.div`
  margin: 0.5em;
  overflow: hidden;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & > img {
    width: 50px;
    height:50px
    border-radius: 50%;
  }
`;
