import styled from 'styled-components';

export const HomePageWrapper = styled.article`
  position: relative;

  & > article:first-child {
    position: relative;
    padding-bottom: 0 !important;
    margin-bottom: -5rem;

    &:after {
      content: '';
      z-index: 1;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 200px;
      pointer-events: none;
      background: linear-gradient(to top, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0));
    }
  }
`;

export const SectionWrapper = styled.article`
  padding-bottom: 1rem;
`;
