import styled from 'styled-components';
import responsive from '../../responsive';

export const CommentWrapper = styled.section`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  //  border-radius: 5px;
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
  min-height: 15vh;
  width: 90%;
  margin-right: 4rem;
  // border-bottom: 1px solid  #37383e63;
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
background-color:red;
min-height: 100%;
width: 80%;


`;