import styled from 'styled-components';

export const HeadingCoverContainer = styled.section`
  width: 100vw;
  min-height: 46.875vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -3rem;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 250px;
    display: block;
    z-index: 1;
    bottom: 0;
    background: linear-gradient(to top, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0));
  }
`;

export const CoverImage = styled.img`
  width: auto;
  height: 100%;
  position: absolute;
`;

export const CoverDetails = styled.div`
  width: 50vw;
  height: 300px;
  background-color: red;
  position: absolute;
  right: 2rem;
  z-index: 2;
`;
