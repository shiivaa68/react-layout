import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const CategorySection = styled.section`
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const CategoryHeading = styled.div`
  width: 100vw;
  min-height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const CategoryItemContainer = styled.section`
  position: relative;
`;

export const Heading = styled.h3`
  color: var(--primary-light);
  font-size: 1rem;
  margin: 0 0.3rem 0 0;
`;

export const ShowMore = styled(Link)`
  all: unset;
  color: var(--primary-light);
  font-size: 1rem;
  margin-left: 1rem;
  display: flex;
  justify-content: space-between;
  font-family: var(--primary-font-family);
  padding: 0 1rem;
  cursor: pointer;
  width: 85px;
  align-items: center;
`;

export const CategoryBody = styled.div`
  width: 100vw;
  position: relative;

  &:hover {
    & > button {
      opacity: 1;
    }
  }
`;

export const PrevButton = styled.button`
  all: unset;
  position: absolute;
  z-index: 10;
  right: 0;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.425rem;
  color: var(--primary-light);
  background: linear-gradient(to left, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0));
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const NextButton = styled.button`
  all: unset;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 100%;
  font-size: 1.425rem;
  color: var(--primary-light);
  background: linear-gradient(to right, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0));
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  padding: 0 1rem;
`;

export const ActiveItemDescription = styled.section`
  width: 100vw;
  margin-top: 3rem;
  height: 0;
  position: relative;
  top: 0rem;
  background: var(--primary-light);
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.shouldShow &&
    css`
      height: 425px;
      top: 1rem;
    `}
`;
