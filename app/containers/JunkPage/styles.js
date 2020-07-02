import styled from 'styled-components';

export const HomePageWrapper = styled.article`
  position: relative;

  & article:first-child {
    position: relative;
    margin-bottom: -5rem;

    &:after {
      content: '';
      z-index: 1;
      position: absolute;
      bottom: 0;

      background: linear-gradient(
        to top,
        rgba(18, 18, 18, 1),
        rgba(18, 18, 18, 0)
      );
      height: 200px;
      width: 100%;
      pointer-events: none;
    }
  }
`;

export const SectionWrapper = styled.article`
  padding-bottom: 1rem;
`;
