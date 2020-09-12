import styled, { css } from 'styled-components';
import responsive from '../../responsive';

export const CommentWrapper = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  background-color: var(--side-bg);
  justify-content: space-between;
  @media ${responsive.tablet} {
    justify-content: unset;
  }
`;

export const Container = styled.div`
  background-color: var(--side-bg);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 15vh;
  width: 90%;
  margin-right: 4rem;
`;

export const CommentArea = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;

export const ReplyArea = styled.div`
  width: 100%;
  height: fit-content;
  padding-right: 8%;
`;

export const WrapperButtonMore = styled.div`
  text-align: center;

  & > button {
    unset: all;
    align: center;
    cursor: pointer;
    font-size: 1rem;
    border: none;
    background: transparent;
    //  &  button img {

    // }

    //  &:hover {
    //   background-color: var(--dark-blue);
    //   color: var(--primary-light);
    // }
  }
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
    width: 60px;

    border-radius: 60%;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  color: #aaaaaa;
  vertical-align: middle;
  font-size: 12px;
  min-height: 10%;
  width: 80%;
  padding: 1rem;
  user-select: text;
  border-bottom: 1px solid #37383e63;
`;

export const Desuser = styled.div`
  & > span {
    padding: 0.75rem;
  }
`;
export const Title = styled.h4`
  padding: 0 1rem;
`;

export const Text = styled.div`
  margin: 1rem;
  font-size: 1.25rem;
  color: white;
  text-align: justify;

  ${props =>
    props.isSpoil &&
    css`
      filter: blur(5px);
    `}
`;

export const Favorite = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  height: 10%;
  & > div {
    padding: 0.25rem;

    & div img {
      filter: invert(100%);
    }
  }
`;

export const WrapperReply = styled.div`
  min-height: 100%;
  width: 80%;
`;
