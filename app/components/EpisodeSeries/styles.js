import styled from 'styled-components';

export const ContainerWrapper = styled.section`
position: relative;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content:flex-start ;
align-items: center;
padding: 0 2rem;
`;

export const Container = styled.div`

width: 225px;
height: fit-content;

margin-bottom: 3rem;

  &:hover {
    position: relative;
    & > div > div:last-child {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export const EpisodeCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 250px;
`;
export const Image = styled.div`
position: relative;
  & > img {
    width: 100%;
    border-radius: 0.5em;
  }
`;

export const PlayIcon = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 0;
  font-size: 4rem;
  transition: opacity 0.3s ease-in-out;
`;

export const EpisodeDescription = styled.div`
  text-align: right;
  color: var(--primary-white);
  display: block;
  font-size: 12px;
  cursor: pointer;
  user-select: text;
`;

export const EpisodeTitle = styled.h4`
width: 100%;
padding: 3rem;
  margin: 1rem 0;
`;