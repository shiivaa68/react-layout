import styled from 'styled-components';
import responsive from 'responsive';
export const SubtitleWrapper = styled.section`
  padding: 1.25rem;
  height: 100%;
  @media ${responsive.tablet} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const WrapperSub =styled.div``;

export const WrapperVoice =styled.div``;

export const WrapperDubbled =styled.div``;