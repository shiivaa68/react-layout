import styled, { css } from 'styled-components';

export const CategoryItemContainer = styled.section`
  position: relative;
`;

export const CategoryImage = styled.div`
  height: fit-content;
  position: relative;
  overflow: hidden;
  border-radius: 0.625em;
`;

export const CategoryItemHoverDetails = styled.div`
  ${props =>
    props.isSpecial &&
    css`
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
      padding: 1rem;
      opacity: 0;
      transition: all 0.3s ease-in-out;

      & > h3 {
        color: var(--primary-light);
        position: absolute;
        margin: 0;
        bottom: 1rem;
        z-index: 2;
      }

      &:hover {
        opacity: 1;
      }

      &:after {
        content: '';
        z-index: 1;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
      }
    `}
`;

export const ItemTitle = styled.p`
  color: var(--primary-white);
  cursor: pointer;
  font-size: 1rem;
  max-height: 3.58e;
  vertical-align: middle;
  user-select: none;
  white-space: initial;
  font-family: var(--primary-font-family);
`;
