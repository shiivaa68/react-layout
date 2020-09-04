import styled from 'styled-components';
import responsive from '../../responsive';

export const CommentWrapper = styled.section`
  cursor: pointer !important;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 30px;
  justify-content: space-between;
  @media ${responsive.tablet} {
    justify-content: unset;
  }
`;

export const Container = styled.div`
  background-color: var(--side-bg);
`;

export const Image = styled.div`
  margin: 0.5em;
  overflow: hidden;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & > img {
    cursor: pointer;
    width: 100px;
    border-radius: 50%;
  }
`;

export const DescriptionCast = styled.div`
  text-align: center;
  color: #aaaaaa;
  vertical-align: middle;
  display: block;
  font-size: 12px;
  cursor: pointer;
  user-select: text;
`;

export const Title = styled.h4`
  padding: 0 1rem;
`;

export const Role = styled.h3``;
