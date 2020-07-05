import styled, { css } from 'styled-components';

export const MovieItemContainer = styled.section`
  position: relative;
  width: 225px;
  height: 385px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0.5em 4rem 0.5em;
`;

export const Image = styled.div`
  width: calc(100% - 1em);
  height: 323px;
  margin: 0.5em;
  overflow: hidden;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--primary-light);

  & > img {
    width: 100%;
  }
`;

export const DescriptionArea = styled.div``;
export const Heading = styled.h4`
  padding: 0 1rem;
`;
export const SubHeading = styled.h3``;
