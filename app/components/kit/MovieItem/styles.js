import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieItemContainer = styled.section`
  position: relative;
  width: 225px;
  height: 385px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0.5em 4rem 0.5em;
  cursor:pointer;
  color: #fff;
`;

export const Image = styled.div`
  cursor: ${props => props.clickable ? 'pointer' : 'unset'};
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

export const DescriptionArea = styled.div`
cursor: ${props => props.clickable ? 'pointer' : 'unset'};`;
export const Heading = styled.h4`
  padding: 0 1rem;
`;
export const SubHeading = styled.h3``;

export const MyLink = styled(Link)`
  all: unset;
`;